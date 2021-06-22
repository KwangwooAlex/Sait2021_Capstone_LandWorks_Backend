import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    deleteTeamMember: protectedResolver(
      async (_, { teamId, teamMemberId }, { loggedInUser }) => {
        const teamMember = await client.team
          .findUnique({
            where: {
              id: teamId,
            },
          })
          .teamMember({
            where: { id: teamMemberId },
          });

        if (!teamMember) {
          return {
            ok: false,
            error: "teamMember not found.",
          };
        } else {
          await client.team.update({
            where: {
              id: teamId,
            },
            data: {
              teamMember: {
                disconnect: {
                  id: teamMemberId,
                },
              },
              // role: {
              //   disconnect: {
              //     id: teamMemberId,
              //   },
              // },
            },
          });

          const findRole = await client.role.findFirst({
            where: {
              AND: [
                {
                  userId: teamMemberId,
                },
                {
                  teamId,
                  // email:email,
                },
              ],
            },
          });
          // console.log("findRole", findRole);

          await client.role.delete({
            where: {
              id: findRole.id,
            },
          });
        }

        // console.log("teamMember", teamMember);
        return {
          ok: true,
        };
        // if (!photo) {
        //   return {
        //     ok: false,
        //     error: "Photo not found.",
        //   };
        // } else if (photo.userId !== loggedInUser.id) {
        //   return {
        //     ok: false,
        //     error: "Not authorized.",
        //   };
        // } else {
        //   await client.photo.delete({
        //     where: {
        //       id,
        //     },
        //   });
        //   return {
        //     ok: true,
        //   };

        // }
      }
    ),
  },
};
