import { PrismaClient } from "@prisma/client";

export async function customSeed() {
  const client = new PrismaClient();
  try {
    await client.user.update({
      where: { username: "admin@ebac.com.br" },
      data: { firstName: "Admin", lastName: "User" },
    });
  } finally {
    await client.$disconnect();
  }
}
