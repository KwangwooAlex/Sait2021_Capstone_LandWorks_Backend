import bcrypt from "bcrypt";
import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    createTeam: protectedResolver(
      async (_, { teamName, description }, { loggedInUser }) => {
        try {
          const existingTeam = await client.team.findFirst({
            where: {
              teamName,
            },
          });
          if (existingTeam) {
            throw new Error("This team name is already taken.");
          }

          await client.team.create({
            data: {
              teamName,
              description,
              teamMember: {
                connect: {
                  id: loggedInUser.id,
                },
              },
            },
          });

          return {
            ok: true,
          };
        } catch (e) {
          return {
            ok: false,
            error: "Cant create team.",
          };
        }
      }
    ),
  },
};
