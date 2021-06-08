import bcrypt from "bcrypt";
import client from "../../client";

export default {
  Mutation: {
    createAccount: async (
      _,
      { username, email, companyName, phoneNumber, password }
    ) => {
      try {
        const existingUser = await client.user.findFirst({
          where: {
            OR: [
              {
                username,
              },
              {
                email,
              },
            ],
          },
        });
        if (existingUser) {
          throw new Error("This username/email is already taken.");
        }

        const uglyPassword = await bcrypt.hash(password, 10);
        try {
          await client.user.create({
            data: {
              username,
              email,
              companyName,
              phoneNumber,
              password: uglyPassword,
            },
          });
        } catch (e) {
          console.log("Error", e);
        }

        return {
          ok: true,
        };
      } catch (e) {
        return {
          ok: false,
          error: "Cant create account.",
        };
      }
    },
  },
};
