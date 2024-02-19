'use client'
import { Avatar, Text } from "@labex-hambre-ui/react";
import { Content, Controls, ImageContainer, Info, More, Post, PostHeader, Profile } from "./styles";
import Image from "next/image";
import more from "../../../assets/more.svg"
import like from "../../../assets/like.svg"
import comment from "../../../assets/comment.svg"
import send from "../../../assets/send.svg"
import { Page } from "../styles";
import { useEffect, useState } from "react";
import { api } from "@/lib/axios";
import { AxiosError } from "axios";
import { env } from "@/env";

interface PostProps {
    id: string
    author: string
    place: string
    description: string
    hashtags: string
    image: string
    createdAt: string
    updatedAt: string
    like: number
}

interface SocketLikeProps {
    postId: string
    likes: number
}

export default function Feed() {
    const [posts, setPosts] = useState<PostProps[]>([])
    const [socketLike, setSocketLike] = useState<SocketLikeProps>()
    const [socketPost, setSocketPost] = useState<PostProps>()

    async function getPosts() {
        await api.get('/posts').then((response) => {
            setPosts(response.data)
        })
            .catch((err) => {
                if (err.code === AxiosError.ERR_NETWORK) {
                    console.log('Sem conexão')
                } else {
                    console.log(err)
                }
            })
    }

    async function likeInPost(postId: string) {
        await api.get(`/post/${postId}`, { withCredentials: true }).then((response) => {
            console.log(response)
        }).catch((err) => {
            if (err.code === AxiosError.ERR_NETWORK) {
                console.log('Sem conexão')
            } else {
                console.log(err)
            }
        })
    }

    useEffect(() => {
        const fetchLikeAndConnectWebSocket = async () => {
            getPosts()

            const socket = new WebSocket(`${env.NEXT_PUBLIC_SOCKECT_API_API_INSTAGRAM}/like/result`)

            socket.onopen = () => {
                console.log('Conectado a rota WebSocket like')
            }

            socket.onmessage = (event) => {
                console.log('Mensagem recebida da rota Websocket like:', event.data)

                setSocketLike(JSON.parse(event.data))
            }

            socket.onclose = () => {
                console.log('Conexão WebSocket para a rota like')
            }

            // Cleanup function
            return () => {
                socket.close()
            }
        }

        const fetchPostAndConnectWebSocket = async () => {
            getPosts()

            const socket = new WebSocket(`${env.NEXT_PUBLIC_SOCKECT_API_API_INSTAGRAM}/post/result`)

            socket.onopen = () => {
                console.log('Conectado a rota WebSocket post.')
            }

            socket.onmessage = (event) => {
                console.log('Mensagem recebida da rota Websocket post.', event.data)

                setSocketPost(JSON.parse(event.data))
            }

            socket.onclose = () => {
                console.log('Conexão WebSocket para a rota post.')
            }

            // Cleanup function
            return () => {
                socket.close()
            }
        }

        fetchLikeAndConnectWebSocket()
        fetchPostAndConnectWebSocket()
    }, [])

    useEffect(() => {
        if (socketLike) {
            setPosts((prevPosts) => {
                return prevPosts.map((post) => {
                    if (post.id == socketLike.postId) {
                        return {
                            ...post,
                            like: socketLike.likes
                        }
                    }

                    return post
                })
            })
        }

        if (socketPost) {
            const updatedPosts = [...posts]
            updatedPosts.unshift(socketPost)
            setPosts(updatedPosts)
        }
    }, [socketLike, socketPost])

    return (
        <Page>
            {
                posts.map((post) => (
                    <Post key={post.id}>
                        <PostHeader>
                            <Profile>
                                <Avatar />

                                <Info>
                                    <Text as="strong">
                                        {post.author}
                                    </Text>

                                    <Text>
                                        {post.place}
                                    </Text>
                                </Info>
                            </Profile>

                            <More>
                                <Image
                                    src={more}
                                    height={15}
                                    width={15}
                                    alt="câmera"
                                />
                            </More>
                        </PostHeader>

                        <ImageContainer>
                            <Image
                                src={post.image}
                                height={300}
                                width={572}
                                alt="post"
                                priority
                            />
                        </ImageContainer>


                        <Controls>
                            <div onClick={() => likeInPost(post.id)}>
                                <Image
                                    src={like}
                                    height={20}
                                    width={20}
                                    alt="hart"
                                    priority
                                />
                            </div>

                            <div>
                                <Image
                                    src={comment}
                                    height={20}
                                    width={20}
                                    alt="comment"
                                    priority
                                />
                            </div>

                            <div>
                                <Image
                                    src={send}
                                    height={20}
                                    width={20}
                                    alt="air plane"
                                    priority
                                />
                            </div>
                        </Controls>

                        <Content>
                            <Text as="strong">
                                {post.like} curtidas
                            </Text>

                            <Text>
                                {post.description}
                            </Text>

                            {
                                post.hashtags && (
                                    <Text>
                                        <Text as="strong">{post.hashtags.split(',').map((hastagh) => `#${hastagh.trim()}`).join(' ')}</Text>
                                    </Text>
                                )
                            }
                        </Content>
                    </Post>
                ))
            }
        </Page>
    )
}