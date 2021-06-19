import client from "../../client";

export default {
  Query: {
    seeTeam: (_, { teamName }) =>
      client.team.findUnique({
        where: {
          teamName,
        },
        include: {
          teamMember: true,
          project: true,
          role: true,
        },
      }),
  },
};
