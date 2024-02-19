'use client'

import { keyframes, styled } from "@labex-hambre-ui/react"

const pulse = keyframes({
    '50%': {
        opacity: .5
    }
})

export const Container = styled('div', {
    backgroundColor: '$yellow50',
    gridColumn: 'span var(--size-column)',
    gridRow: 'span var(--size-row)',
    width: '100%',
    height: '100%',
    animation: `${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`
})