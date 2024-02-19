import { Skeleton } from "@/components/skeleton";
import { Grid, Page } from "../styles";
import { Form } from "./styles";

export default function NewLoading() {
    return (
        <Page>
            <Form>
                <Grid>
                    <Skeleton sizeColumn={14} sizeRow={8} />
                    <Skeleton sizeColumn={14} sizeRow={2} />
                    <Skeleton sizeColumn={14} sizeRow={4} />
                    <Skeleton sizeColumn={14} sizeRow={2} />
                    <Skeleton sizeColumn={14} sizeRow={4} />
                    <Skeleton sizeColumn={14} sizeRow={2} />
                    <Skeleton sizeColumn={14} sizeRow={4} />
                    <Skeleton sizeColumn={14} sizeRow={2} />
                    <Skeleton sizeColumn={14} sizeRow={4} />
                    <Skeleton sizeColumn={14} sizeRow={5} />
                </Grid>
            </Form>
        </Page>
    )
}