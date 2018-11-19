import { GraphQLServer } from 'graphql-yoga';

import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import db from './db';
import { prisma } from './generated/prisma-client';
import { ContextParameters } from 'graphql-yoga/dist/types';
import { Request } from 'express-serve-static-core';


interface CustomRequest {
  userId?: string;
}
export interface Ctx extends ContextParameters {
  db: typeof db,
  client: typeof prisma,
  request: Request & CustomRequest,
}

function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schemas/schema.graphql',
    // @ts-ignore
    resolvers: {
      Mutation,
      Query,
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    context: req => ({ ...req, db, client: prisma }),
  })
}

export default createServer;
