import { MongoClient } from "mongodb";

interface Example {
    id: number;
    name: string;
    email: string;
    created: Date;
}

export async function main(): Promise<void> {
    const client = new MongoClient("mongodb://user:pass@localhost:27017");

    try {
        const db = client.db("test");
        const example = db.collection<Example>("example");

        const list = await example.find().sort("name").toArray();
        console.log(JSON.stringify(list, null, 4));
    } finally {
        await client.close();
    }
}
main();
