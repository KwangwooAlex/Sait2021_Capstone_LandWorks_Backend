import client from "../../client";
import { protectedResolver } from "../../users/users.utils";
import { PrismaDelete } from "@paljs/plugins";

export default {
  Mutation: {
    deleteTeam: protectedResolver(async (_, { teamId }, { loggedInUser }) => {
      const findTeam = await client.team.findUnique({
        where: {
          id: teamId,
        },
      });
      if (findTeam) {
        await client.project.deleteMany({
          where: {
            team: {
              id: teamId,
            },
          },
        });
        await client.role.deleteMany({
          where: {
            teamId,
          },
        });
        await client.team.delete({
          where: {
            id: teamId,
          },
        });
        return {
          ok: true,
        };
      } else {
        return {
          ok: false,
          error: "There is not team you chose",
        };
      }
    }),
  },
};
