import { ReactNode } from "react";
import { Container, Content } from "./styles";
import { Header } from "@/components/header";

export default function InstagramLayout({ children }: { children: ReactNode }) {
    return (
        <Container>
            <Header />

            <Content>
                {children}
            </Content>
        </Container>
    )
}