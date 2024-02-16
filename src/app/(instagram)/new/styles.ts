'use client'
import { Box, Text, styled } from "@labex-hambre-ui/react";

export const Form = styled(Box, {
    display: 'grid',
    gap: '$4',
    width: '100%',

    label: {
        display: 'grid',
        gap: '$1'
    }
})

export const Center = styled("div", {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
})

export const FormError = styled(Text, {
    color: '$red300'
})