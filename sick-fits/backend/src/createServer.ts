import { GraphQLServer } from 'graphql-yoga';

import Query, { MoovlyUser } from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import db from './db';
import { prisma } from './generated/prisma-client';
import { ContextParameters } from 'graphql-yoga/dist/types';

export interface Ctx extends ContextParameters {
  db: typeof db,
  client: typeof prisma,
}

function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schemas/schema.graphql',
    // @ts-ignore
    resolvers: {
      Mutation,
      Query,
      MoovlyUser,
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    context: req => ({ ...req, db, client: prisma }),
  })
}

export default createServer;
