import { protectedResolver } from "../users.utils";
import client from "../../client";
import { uploadToS3 } from "../../shared/shared.utils";

export default {
  Mutation: {
    uploadAvatar: protectedResolver(async (_, { file }, { loggedInUser }) => {
      const fileUrl = await uploadToS3(file, loggedInUser.id, "uploadsAvatar");

      if (!fileUrl) {
        return {
          error: "File is not exist",
          ok: false,
        };
      }
      const updatedAvatar = await client.user.update({
        where: {
          id: loggedInUser.id,
        },
        data: {
          avatar: fileUrl,
        },
      });
      if (updatedAvatar) {
        return {
          ok: true,
        };
      } else {
        return {
          error: "File is not exist",
          ok: false,
        };
      }
    }),
  },
};
