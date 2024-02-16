import { Avatar, Heading, Text } from "@labex-hambre-ui/react";
import { Content, Controls, ImageContainer, Info, More, Post, PostHeader, Profile } from "./styles";
import Image from "next/image";
import more from "../../../assets/more.svg"
import like from "../../../assets/like.svg"
import comment from "../../../assets/comment.svg"
import send from "../../../assets/send.svg"
import hero from "../../../assets/allmight.png"
import { Page } from "../styles";

export default function Feed() {
    return (
        <Page>
            <Post>
                <PostHeader>
                    <Profile>
                        <Avatar />

                        <Info>
                            <Text as="strong">
                                Laciene Melo
                            </Text>

                            <Text>
                                Cametá
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
                        src={hero}
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
                        0 curtidas
                    </Text>

                    <Text>
                        Semana OmniStack 7
                    </Text>

                    <Text>
                        <Text as="strong">ReactJS</Text> <Text as="strong">NextJS 14</Text>
                    </Text>
                </Content>
            </Post>
        </Page>
    )
}