import { Container } from "./styles"

interface SkeletonProps {
    sizeColumn: number
    sizeRow: number
}

export function Skeleton({ sizeColumn, sizeRow }: SkeletonProps) {
    return (
        <Container
            css={{
                '--size-column': sizeColumn,
                '--size-row': sizeRow
            }}
        />
    )
}