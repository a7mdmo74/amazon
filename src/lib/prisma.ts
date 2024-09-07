import { PrismaClient } from '@prisma/client';

let prismaInit: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prismaInit = new PrismaClient();
} else {
  // eslint-disable-next-line
  if (!(global as any).prisma) {
    // eslint-disable-next-line
    (global as any).prisma = new PrismaClient();
  }
  // eslint-disable-next-line
  prismaInit = (global as any).prisma;
}

export const prisma = prismaInit;
