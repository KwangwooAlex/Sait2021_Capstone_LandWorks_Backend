//fs는 file system임!!
import bcrypt from "bcrypt";
import client from "../../client";
import { protectedResolver } from "../users.utils";

console.log(process.cwd());

const resolverFn = async (
  _,
  { username, email, companyName, phoneNumber, password: newPassword, avatar },
  { loggedInUser }
) => {
  // const { id } = await jwt.verify(token, process.env.SECRET_KEY);

  // let avatarUrl = null;
  // if (avatar) {
  //   avatarUrl = await uploadToS3(avatar, loggedInUser.id, "avatars");

  // const { filename, createReadStream } = await avatar;
  // const newFilename = `${loggedInUser.id}-${Date.now()}-${filename}`;

  let uglyPassword = null;
  if (newPassword) {
    uglyPassword = await bcrypt.hash(newPassword, 10);
  }
  const updatedUser = await client.user.update({
    where: {
      id: loggedInUser.id,
    },
    data: {
      username,
      email,
      companyName,
      phoneNumber,
      ...(uglyPassword && { password: uglyPassword }),
      ...(avatar && { avatar: avatar }),
    },
  });
  if (updatedUser.id) {
    return {
      ok: true,
    };
  } else {
    return {
      ok: false,
      error: "Could not update profile.",
    };
  }
};

export default {
  Mutation: {
    editProfile: protectedResolver(resolverFn),
  },
};
