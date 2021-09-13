import main from "./connection";

const seed = () => {
  // 1. drop collections
  return (
    main()
      .then(({ db, client }) => {
        // console.log(Object.keys(db.s.namespace), "<<<< database connection");
        // console.log(db.s.namespace);
        const collection = db.collection("countries");
        console.log(collection);
        // console.log(db);
        db.s.namespace.collections.drop();
        db.users.drop();
        return db;
      })
      // 2. create collections
      .then(db => {
        db.s.namespace.collection.createCollection("countries");
        db.s.namespace.collection.createCollection("users");

        return db;
      })
  );
  // 3. populate collections
};

export default seed;
