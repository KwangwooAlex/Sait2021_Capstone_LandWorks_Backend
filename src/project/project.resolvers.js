import client from "../client";

export default {
  Project: {
    team: async ({ teamId }) => {
      const teamCheck = client.team.findUnique({
        where: { id: teamId },
        include: { teamMember: true },
      });

      // console.log("teamId", teamId);
      return teamCheck;
    },
  },
};
