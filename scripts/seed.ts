import * as dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { Salt, parseSalt } from "../src/auth/password.service";
import { hash } from "bcrypt";
import { customSeed } from "./customSeed";

if (require.main === module) {
  dotenv.config();
  const { BCRYPT_SALT } = process.env;
  if (!BCRYPT_SALT) {
    throw new Error("BCRYPT_SALT environment variable must be defined");
  }
  seed(parseSalt(BCRYPT_SALT)).catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}

async function seed(bcryptSalt: Salt) {
  const client = new PrismaClient();
  try {
    const data = {
      username: "admin@ebac.com.br",
      password: await hash("admin", bcryptSalt),
      firstName: "Admin",
      lastName: "User",
      roles: ["admin"],
    };
    await client.user.upsert({
      where: { username: data.username },
      update: data,
      create: data,
    });
    await customSeed();
    console.info("Seeded database successfully");
  } finally {
    await client.$disconnect();
  }
}
