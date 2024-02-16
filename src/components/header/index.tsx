import { Content, HeaderBox, LeftBlock, RightBlock } from "./styles";
import Image from 'next/image'
import camera from "../../assets/camera.svg"
import logo from "../../assets/logo.svg"

export function Header() {
    return (
        <HeaderBox>
            <Content>
                <LeftBlock>
                    <Image
                        src={logo}
                        width={200}
                        alt="logo Instagram"
                    />
                </LeftBlock>

                <RightBlock>
                    <Image
                        src={camera}
                        height={25}
                        width={25}
                        alt="câmera"
                    />
                </RightBlock>
            </Content>
        </HeaderBox>
    )
}