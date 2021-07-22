import client from "../../client";

export default {
  Query: {
    seeProject: (_, { projectId }) =>
      client.project.findUnique({
        where: {
          id: projectId,
        },
        // include: {
        //   team: true,

        //   // team: {
        //   //   teamMember: true,
        //   // },
        // },
      }),
  },
};
