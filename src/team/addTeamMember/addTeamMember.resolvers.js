import bcrypt from "bcrypt";
import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    addTeamMember: protectedResolver(async (_, { teamId, userId }) => {
      try {
        const existingTeam = await client.team.findFirst({
          where: {
            id: teamId,
          },
        });
        if (existingTeam) {
          const existingUser = await client.user.findUnique({
            where: { id: userId },
          });

          const alreadyInTeam = await client.team
            .findUnique({
              where: {
                id: teamId,
              },
            })
            .teamMember({ where: { id: userId } });

          console.log("alreadyInTeam", alreadyInTeam);
          if (alreadyInTeam.length !== 0) {
            return {
              ok: false,
              error: "Can not add a user already in the same team.",
            };
          }

          if (existingUser) {
            console.log("여기까지옴");

            await client.team.update({
              where: {
                id: teamId,
              },
              data: {
                teamMember: {
                  connect: { id: userId },
                },
              },
            });

            return {
              ok: true,
            };
          } else {
            return {
              ok: false,
              error: "Can not find a user.",
            };
          }
        } else {
          return {
            ok: false,
            error: "Can not find a team.",
          };
        }
      } catch (e) {
        console.log("error", e);
        return {
          ok: false,
          error: "Cant add team member.",
        };
      }
    }),
  },
};
