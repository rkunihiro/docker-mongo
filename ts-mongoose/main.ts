import { connect, model, Schema } from "mongoose";

interface Example {
    id: number;
    name: string;
    email: string;
    created: Date;
}

const exampleModel = model(
    "Example",
    new Schema<Example>({
        id: Number,
        name: String,
        email: String,
        created: Date,
    }),
    "example",
);

export async function main(): Promise<void> {
    const db = await connect("mongodb://user:pass@localhost:27017", { dbName: "test" });

    try {
        const list = await exampleModel.find().exec();
        console.log(JSON.stringify(list, null, 4));
    } finally {
        await db.disconnect();
    }
}
main();
