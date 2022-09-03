const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");

const schema = require("./graphql/schema");
const root = require("./graphql/resolver/root");

const path = require("path");

const config = require("config");

const cors = require("cors");

const PORT = process.env.PORT || config.get("serverPort");
const DB_URL = config.get("MongoDBUrl");

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static(__dirname));
app.use(express.static(path.resolve(__dirname, "build")));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

mongoose
  .connect(DB_URL, { useNewUrlParser: true })
  .then((res) => console.log("Connected to DB"))
  .catch((error) => console.log(error));

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log("Server started on PORT ", PORT);
});
