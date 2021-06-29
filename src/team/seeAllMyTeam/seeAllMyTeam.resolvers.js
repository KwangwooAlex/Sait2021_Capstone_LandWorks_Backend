import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Query: {
    seeAllMyTeam: protectedResolver((_, __, { loggedInUser }) => {
      const teams = client.team.findMany({
        where: {
          teamMember: {
            some: { id: loggedInUser.id },
          },
        },
        include: {
          teamMember: true,
          project: true,
          role: true,
        },
      });
      // console.log("teams", teams);
      return teams;
    }),
  },
};
