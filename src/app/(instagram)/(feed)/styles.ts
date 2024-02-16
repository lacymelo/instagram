'use client'
import { styled } from "@labex-hambre-ui/react"

export const Post = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    background: '$white',
    boxShadow: 'rgba(99, 99, 99, 0.4) 0px 1px 5px 0px',
    width: '100%',
})

export const PostHeader = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '$3',
})

export const Profile = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    gap: '$3'
})

export const Info = styled('div', {

})

export const More = styled('div', {

})

export const ImageContainer = styled('div', {
    display: 'flex',
    width: '100%',
    padding: 0
})

export const Controls = styled('div', {
    display: 'flex',
    padding: '$3',
    gap: '$3'
})

export const Content = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    padding: '$3',
    gap: '$2'
})

