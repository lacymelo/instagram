'use client'
import { Avatar, Heading, Text } from "@labex-hambre-ui/react";
import { Content, Controls, ImageContainer, Info, More, Post, PostHeader, Profile } from "./styles";
import Image from "next/image";
import more from "../../../assets/more.svg"
import like from "../../../assets/like.svg"
import comment from "../../../assets/comment.svg"
import send from "../../../assets/send.svg"
import hero from "../../../assets/allmight.png"
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

export default function Feed() {
    const [posts, setPosts] = useState<PostProps[]>([])

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

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <Page>
            {
                posts.map((post) => (
                    <Post>
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
                            <Image
                                src={like}
                                height={20}
                                width={20}
                                alt="câmera"
                                priority
                            />
                            <Image
                                src={comment}
                                height={20}
                                width={20}
                                alt="câmera"
                                priority
                            />
                            <Image
                                src={send}
                                height={20}
                                width={20}
                                alt="câmera"
                                priority
                            />
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