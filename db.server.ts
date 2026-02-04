import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

declare global {
  var __db__: PrismaClient;
}

// This is needed because in development we don't want to restart
// the server with every file change and we bleed a lot of npm packages
// so we need to be able to reuse our prisma connection across reloads.
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.__db__) {
    global.__db__ = new PrismaClient();
  }
  prisma = global.__db__;
}

export default prisma;
