import { PrismaClient } from "@prisma/client";
import { MyContext } from "../bot.js";

const prisma = new PrismaClient();

export const isAuthenticated = async (ctx: MyContext): Promise<boolean> => {
  const from = ctx.update.message!.from;
  const user = await prisma.user.findFirst({ where: { id: from.id } });

  return user && user.is_admin ? true : false;
};
