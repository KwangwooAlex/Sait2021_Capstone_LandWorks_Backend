import bcrypt from "bcrypt";
import client from "../../client";

export default {
  Mutation: {
    createProject: async (
      _,
      {
        teamId,
        projectName,
        projectStatus,
        projectType,
        description,
        securityLevel,
      }
    ) => {
      try {
        const existingProject = await client.project.findFirst({
          where: {
            projectName,
          },
        });
        if (existingProject) {
          throw new Error("This project name is already taken.");
        }

        try {
          await client.project.create({
            data: {
              projectName,
              projectStatus,
              projectType,
              description,
              securityLevel,
              team: {
                connect: {
                  id: teamId,
                },
              },
            },
          });
        } catch (e) {
          console.log("error", e);
          return {
            ok: false,
            error: "Cant create project.",
          };
        }

        return {
          ok: true,
        };
      } catch (e) {
        return {
          ok: false,
          error: "Cant create project.",
        };
      }
    },
  },
};
