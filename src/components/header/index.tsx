import { Content, HeaderBox, LeftBlock, RightBlock } from "./styles";
import Image from 'next/image'
import camera from "../../assets/camera.svg"
import logo from "../../assets/logo.svg"
import Link from "next/link";

export function Header() {
    return (
        <HeaderBox>
            <Content>
                <LeftBlock>
                    <Link href="/">
                        <Image
                            src={logo}
                            width={200}
                            alt="logo Instagram"
                        />
                    </Link>
                </LeftBlock>

                <RightBlock>
                    <Link href="/new">
                        <Image
                            src={camera}
                            height={25}
                            width={25}
                            alt="câmera"
                        />
                    </Link>
                </RightBlock>
            </Content>
        </HeaderBox>
    )
}