import { Kernel } from "@bluelibs/core";
import { ApolloBundle } from "@bluelibs/apollo-bundle";
import { MongoBundle } from "@bluelibs/mongo-bundle";
import { SecurityBundle } from "@bluelibs/security-bundle";
import { SecurityMongoBundle } from "@bluelibs/security-mongo-bundle";
import { LoggerBundle } from "@bluelibs/logger-bundle";
import { XBundle } from "@bluelibs/x-bundle";
import { ApolloSecurityBundle } from "@bluelibs/apollo-security-bundle";
import { PasswordBundle } from "@bluelibs/password-bundle";
import { XAuthBundle } from "@bluelibs/x-auth-bundle";
import { GraphQLBundle } from "@bluelibs/graphql-bundle";
import { EmailBundle } from "@bluelibs/email-bundle";
import { ValidatorBundle } from "@bluelibs/validator-bundle";
import { UsersCollection } from "../bundles/AppBundle/collections";

import env from "./env";

export const kernel = new Kernel({
  parameters: {
    context: env.CONTEXT,
    debug: false,
    testing: process.env.NODE_ENV === "test",
  },
  bundles: [
    new LoggerBundle(),
    new ValidatorBundle(),
    new GraphQLBundle(),
    new ApolloBundle({
      port: env.ROOT_PORT,
      url: env.ROOT_URL,
      enableSubscriptions: true,
    }),
    new MongoBundle({
      uri: env.MONGO_URL,
    }),
    new SecurityBundle(),
    new SecurityMongoBundle({
      usersCollection: UsersCollection,
    }),
    new ApolloSecurityBundle(),
    new XBundle({
      appUrl: env.APP_URL,
      rootUrl: env.ROOT_URL,
    }),
    new EmailBundle(),
    new PasswordBundle(),
    new XAuthBundle(),
  ],
});
