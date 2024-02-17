'use client'

import { styled } from "@labex-hambre-ui/react"

export const Container = styled('div', {
    height: '100vh',
    width: '100%',
    display: 'grid',
    gridTemplateRows: 'min-content max-content',
    position: 'relative'
})

export const Content = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: 572,
    margin: '$20 auto',
    gap: '$4',
})

export const Page = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    margin: '$4',
    gap: '$4',
})