import bcrypt from "bcrypt";
import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    addRole: protectedResolver(async (_, { roleName, teamId, userId }) => {
      const existingUser = await client.user.findUnique({
        where: { id: userId },
      });

      const existingTeam = await client.team.findFirst({
        where: {
          id: teamId,
        },
      });

      const existingMember = await client.team
        .findFirst({
          where: {
            id: teamId,
          },
        })
        .teamMember({ where: { id: userId } });

      const existingTeamMemberRole = await client.team
        .findFirst({
          where: {
            id: teamId,
          },
        })
        .role({
          where: {
            userId,
          },
        });
      console.log("existingMember.length", existingMember.length);
      console.log("check", existingTeamMemberRole.length);

      if (existingUser && existingTeam) {
        if (existingMember.length === 0) {
          return {
            ok: false,
            error: "not in this team member",
          };
        }

        if (existingTeamMemberRole.length !== 0) {
          return {
            ok: false,
            error: "Already has role in this team",
          };
        }
        try {
          await client.role.create({
            data: {
              roleName,
              teamId,
              userId,
            },
          });
        } catch (e) {
          console.log("Error", e);
          return {
            error: e,
            ok: false,
          };
        }
        return {
          ok: true,
        };
      } else {
        return {
          error: "can not find team or user",
          ok: false,
        };
      }
    }),
  },
};
