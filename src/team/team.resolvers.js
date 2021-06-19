import client from "../client";

export default {
  Team: {
    // team: async ({ id }) => {
    //   const teamCheck = client.user
    //     .findUnique({
    //       where: { id },
    //     })
    //     .team({
    //       include: { teamMember: true },
    //     });
    //   // console.log("teamCheck", teamCheck);
    //   return teamCheck;
    // },
    // role: ({ userId }) => client.user.findUnique({ where: { id: userId } }),
  },
};
