db.version();
db.stats();
db.serverStatus();

db.createCollection("example");
db.example.createIndex({ id: 1, name: 1 });
db.example.createIndex({ email: 1 }, { unique: true });
db.example.insertMany([
    {
        id: 1,
        name: "foo",
        email: "foo@example.com",
        created: new Date("2006-01-02T15:04:05.678+09:00"),
    },
    {
        id: 2,
        name: "bar",
        email: "bar@example.com",
        created: new Date("2006-01-03T15:04:05.678+09:00"),
    },
]);
