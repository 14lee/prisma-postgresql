// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient();

// export default defineEventHandler(async (_event) => {
//   await prisma.user.create({
//     data: {
//       name: 'Alice',
//       email: 'alice@prisma.io',
//       posts: {
//         create: { title: 'Hello World' },
//       },
//       profile: {
//         create: { bio: 'I like turtles' },
//       },
//     },
//   })

//   const post = await prisma.post.update({
//     where: { id: 1 },
//     data: { published: true },
//   })

//   const allUsers = await prisma.user.findMany({
//     include: {
//       posts: true,
//       profile: true,
//     },
//   })
//   return allUsers;
// })
