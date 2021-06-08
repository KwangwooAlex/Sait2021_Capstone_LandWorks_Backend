import client from "../client";

export default {
  User: {
    team: async ({ id }) => {
      const teamCheck = client.user
        .findUnique({
          where: { id },
        })
        .team({
          include: { teamMember: true },
        });

      // console.log("teamCheck", teamCheck);
      return teamCheck;
    },
  },
};
