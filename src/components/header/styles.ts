'use client'
import { styled } from "@labex-hambre-ui/react"

export const HeaderBox = styled("div", {
    background: '$white',
    boxShadow: "rgba(99, 99, 99, 0.4) 0px 2px 8px 0px",
    minHeight: '$20',
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 2
})

export const Content = styled("div", {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    maxWidth: 860,
    margin: '$2 auto',
})

export const LeftBlock = styled("div", {
    padding: '0 $4 0 $4',
})

export const RightBlock = styled("div", {
    padding: '0 $4 0 $4',
})
