db.createUser({
    user: 'root',
    pwd: 'toor',
    roles: [
        {
            role: 'readWrite',
            db: 'testDB',
        },
    ],
});

db = new Mongo().getDB("testDB");

db.createCollection('newspapers', { capped: false });
db.createCollection('publishers', { capped: false });

db.publishers.insert([
    {"name":"Rob Jr.","joined_date":"2015-07-06T11:22:37Z","__v":0}
]);