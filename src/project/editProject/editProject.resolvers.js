//fs는 file system임!!
import bcrypt from "bcrypt";
import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

console.log(process.cwd());

const resolverFn = async (
  _,
  { id, projectName, projectStatus, projectType, description, securityLevel },
  { loggedInUser }
) => {
  // const { id } = await jwt.verify(token, process.env.SECRET_KEY);

  // let avatarUrl = null;
  // if (avatar) {
  //   avatarUrl = await uploadToS3(avatar, loggedInUser.id, "avatars");

  // const { filename, createReadStream } = await avatar;
  // const newFilename = `${loggedInUser.id}-${Date.now()}-${filename}`;

  const updatedProject = await client.project.update({
    where: {
      id,
    },
    data: {
      projectName,
      projectStatus,
      projectType,
      description,
      securityLevel,
    },
  });
  if (updatedProject.id) {
    return {
      ok: true,
    };
  } else {
    return {
      ok: false,
      error: "Could not update project.",
    };
  }
};

export default {
  Mutation: {
    editProject: protectedResolver(resolverFn),
  },
};
