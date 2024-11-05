import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  //const user = await prisma.user.create({ data: { name: "Haniya" } });
  const del = await prisma.user.delete({ where: { id: 4 } });
  const users = await prisma.user.findMany();
  console.log(users);
}

main()
  .catch(() => {
    console.error("Error");
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
