require("dotenv").config();
import { graphqlUploadExpress } from "graphql-upload";
import { getUser } from "./users/users.utils";
import express from "express";
import logger from "morgan";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./schema";
import http from "http";

const PORT = process.env.PORT;

const apollo = new ApolloServer({
  resolvers,
  typeDefs,
  playground: true,
  // introspection: true,
  uploads: false,

  context: async (ctx) => {
    if (ctx.req) {
      return {
        loggedInUser: await getUser(ctx.req.headers.token),
      };
    } else {
      const {
        connection: { context },
      } = ctx;
      return {
        loggedInUser: context.loggedInUser,
      };
    }
  },

  subscriptions: {
    onConnect: async ({ token }) => {
      if (!token) {
        throw new Error("You can't listen.");
      }
      const loggedInUser = await getUser(token);
      return {
        loggedInUser,
      };
    },
  },
});

const app = express();
app.use(graphqlUploadExpress());
app.use(logger("tiny"));
apollo.applyMiddleware({ app });

app.use("/static", express.static("uploads"));
const httpServer = http.createServer(app);
apollo.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, () => {
  console.log(`✅✅✅ Server is running on http://localhost:${PORT} ✅✅✅`);
});
//
