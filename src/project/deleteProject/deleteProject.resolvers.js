import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    deleteProject: protectedResolver(
      async (_, { projectId }, { loggedInUser }) => {
        const findProject = await client.project.findUnique({
          where: {
            id: projectId,
          },
        });

        if (!findProject) {
          return {
            ok: false,
            error: "can not find a project",
          };
        } else {
          await client.project.delete({
            where: {
              id: findProject.id,
            },
          });
        }

        // console.log("findProject", findProject);

        return {
          ok: true,
        };
      }
    ),
  },
};
