import { QueryResolvers } from './resolvers-types';
import { Ctx } from '../createServer';
// import { clients, configuration, middlewares } from '@moovly/clients';

// const { Group, Licenses, Users } = clients;

// configuration.setToken('7483be3bcee246349a3dea580facf832046e02fc937246678b11af462e781332');
// configuration.setMiddlewares(middlewares.default);

// let start = 0;
const Query: QueryResolvers.Resolvers<Ctx> = {
  items(parent, args, ctx, info) {
    // @ts-ignore null || undefined issue
    return ctx.client.items(args);
  },
  item(parent, args, ctx, info) {
    // @ts-ignore null || undefined issue
    return ctx.client.item(args.where);
  },
  itemsConnection(parent, args, ctx) {
    const where = {
      id: args.where && args.where.id || undefined,
    }
    return {
      pageInfo: ctx.client.itemsConnection({ where }).pageInfo(),
      edges: ctx.client.itemsConnection({ where }).edges(),
      aggregate: ctx.client.itemsConnection({ where }).aggregate(),
    }
  },
  // async seats() {
  //   const start = Date.now();
  //   const seats = await Licenses.getActiveSeats('7ecd40fb-b502-11e8-bd9b-0a2cf957548e');

  //   const end = Date.now();

  //   console.log('Ran in ms:', end - start);
  //   return seats;
  // },
  // // @ts-ignore
  // async group(parent, args, ctx, info) {
  //   start = Date.now();
  //   const seatsPr = await Licenses.getActiveSeats('7ecd40fb-b502-11e8-bd9b-0a2cf957548e');

  //   const membersPr = await Group.getGroupMemberships('7ecd40fb-b502-11e8-bd9b-0a2cf957548e', {
  //     page: 1,
  //     page_size: 100,
  //   });

  //   const [members1, seats] = await Promise.all([membersPr, seatsPr]);

  //   const members2 = await Group.getGroupMemberships('7ecd40fb-b502-11e8-bd9b-0a2cf957548e', {
  //     page: 2,
  //     page_size: 100,
  //   });

  //   const members = members1.results.concat(members2.results);

  //   seats.forEach(s => {
  //     const idx = members.findIndex(m => m.user_id === s.user_id);

  //     if(idx !== -1) {
  //       // @ts-ignore
  //       members[idx].seatInfo = s;
  //     }
  //   });


  //   console.log(members.length);
  //   const end = Date.now();

  //   console.log('Ran in ms:', end - start);
  //   console.log('fetch end:', end);
  //   return members;
  // }
};

// export const MoovlyUser: MoovlyUserResolvers.Resolvers = {
//   async info(parent, args, ctx, info) {
//     const startLocal = Date.now();
//     console.log(`STARTED ${parent.user_id}: ${startLocal}`);
//     const res = await Users.getUserInformation(parent.user_id!);
//     console.log(`COMPLETED ${parent.user_id}: ${Date.now() - startLocal}`);
//     console.log(`TOTAL: ${Date.now() - start}`);
//     return res;
//   }
// }

export default Query;
