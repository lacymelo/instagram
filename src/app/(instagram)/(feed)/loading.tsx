import { Skeleton } from "@/components/skeleton";
import { Grid, Page } from "../styles";
import { Post, PostHeader } from "./styles";

export default function FeedLoading() {
    return (
        <Page>
            <Post>
                <PostHeader>
                    <Grid>
                        <Skeleton sizeColumn={14} sizeRow={3} />
                        <Skeleton sizeColumn={6} sizeRow={3} />
                        <Skeleton sizeColumn={14} sizeRow={17} />
                        <Skeleton sizeColumn={2} sizeRow={2} />
                        <Skeleton sizeColumn={2} sizeRow={2} />
                        <Skeleton sizeColumn={14} sizeRow={3} />
                        <Skeleton sizeColumn={14} sizeRow={3} />
                        <Skeleton sizeColumn={14} sizeRow={3} />
                    </Grid>
                </PostHeader>
            </Post>

            <Post>
                <PostHeader>
                    <Grid>
                        <Skeleton sizeColumn={14} sizeRow={3} />
                        <Skeleton sizeColumn={6} sizeRow={3} />
                        <Skeleton sizeColumn={14} sizeRow={17} />
                        <Skeleton sizeColumn={2} sizeRow={2} />
                        <Skeleton sizeColumn={2} sizeRow={2} />
                        <Skeleton sizeColumn={14} sizeRow={3} />
                        <Skeleton sizeColumn={14} sizeRow={3} />
                        <Skeleton sizeColumn={14} sizeRow={3} />
                    </Grid>
                </PostHeader>
            </Post>
        </Page>
    )
}