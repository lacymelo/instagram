'use client'
import { Button, Text, TextInput, UploadInput } from "@labex-hambre-ui/react";
import { Page } from "../styles";
import { Center, Form, FormError } from "./styles";
import { ChangeEvent, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/lib/axios";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

const newPostFormSchema = z.object({
    author: z.string()
        .min(2, { message: "O nome precisa ter pelo menos 2 caracteres" })
        .refine(data => data !== '', {
            message: "O autor é obrigatório!"
        }),
    place: z.string()
        .min(3, { message: "A cidade precisa ter pelo menos 3 caracteres" })
        .refine(data => data !== '', {
            message: "A cidade é obrigatória!"
        }),
    description: z.string()
        .min(3, { message: "A descrição precisa ter pelo menos 10 caracteres" })
        .refine(data => data !== '', {
            message: "A descrição é obrigatória!"
        }),
    hashtags: z.string()
        .optional(),
    image: z.object({
        name: z.string(),
        type: z.string(),
        size: z.number(),
        lastModified: z.number(),
    })

})

type NewPost = z.input<typeof newPostFormSchema>

export default function New() {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isSubmitting }
    } = useForm<NewPost>({
        resolver: zodResolver(newPostFormSchema)
    })

    const router = useRouter()

    const [profilePicture, setProfilePicture] = useState<{
        file: File | null,
        url: string | null
    }>({
        file: null,
        url: null
    })

    function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0]

        if (file) {
            const imageUrl = URL.createObjectURL(file)

            setProfilePicture({
                file,
                url: imageUrl
            })

            setValue('image', file)
        }
    }

    async function handleNewPost(data: NewPost) {
        const formData = new FormData();
        formData.append('author', data.author);
        formData.append('place', data.place);
        formData.append('description', data.description);
        formData.append('image', profilePicture.file!);

        if (data.hashtags) {
            formData.append('hashtags', data.hashtags);
        }

        await api.post('/post', formData).then((response) => {
            console.log(response)
        })
            .catch((err) => {
                if (err.code === AxiosError.ERR_NETWORK) {
                    console.log('Sem conexão')
                } else {
                    console.log(err)
                }
            }).finally(() => {
                router.push('/')
            })
    }

    return (
        <Page>
            <Form as="form" onSubmit={handleSubmit(handleNewPost)}>
                <label>
                    <Center>
                        <Text size="sm">
                            Foto
                        </Text>

                        <UploadInput
                            imageUrl={profilePicture.url}
                            onFileChange={handleFileChange}
                        />
                    </Center>

                    {
                        errors.image && (
                            <FormError size="sm">A imagem é obrigatória</FormError>
                        )
                    }
                </label>

                <label>
                    <Text size="sm">
                        Autor
                    </Text>

                    <TextInput
                        placeholder="Seu nome"
                        {...register("author")}
                    />

                    {
                        errors.author && (
                            <FormError size="sm">{errors.author.message}</FormError>
                        )
                    }
                </label>

                <label>
                    <Text size="sm">
                        Cidade
                    </Text>

                    <TextInput
                        placeholder="Sua cidade"
                        {...register("place")}
                    />

                    {
                        errors.place && (
                            <FormError size="sm">{errors.place.message}</FormError>
                        )
                    }
                </label>

                <label>
                    <Text size="sm">
                        Descrição
                    </Text>

                    <TextInput
                        placeholder="O que estou pensando?"
                        {...register("description")}
                    />

                    {
                        errors.description && (
                            <FormError size="sm">{errors.description.message}</FormError>
                        )
                    }
                </label>

                <label>
                    <Text size="sm">
                        Hashtags
                    </Text>

                    <TextInput
                        placeholder="alegre, empolgada"
                        {...register("hashtags")}
                    />
                </label>

                <Button
                    size="md"
                    type="submit"
                    disabled={isSubmitting}
                >
                    Postar
                </Button>
            </Form>
        </Page>
    )
}