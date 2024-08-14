const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {

    await prisma.user.deleteMany({});

    await prisma.user.createMany({
      data: [
        {
          fullName: 'John Doe',
          username: 'johndoe',
          userType: 'USER',
          email: 'johndoe@example.com',
          password: 'password123',
          dateOfBirth: new Date('1990-01-01'),
        },
        {
          fullName: 'Jane Smith',
          username: 'janesmith',
          userType: 'USER',
          email: 'janesmith@example.com',
          password: 'password123',
          dateOfBirth: new Date('1985-05-15'),
        },
        {
          fullName: 'Admin User',
          username: 'adminuser',
          userType: 'ADMIN',
          email: 'adminuser@example.com',
          password: 'password123',
          dateOfBirth: new Date('1980-10-10'),
        },
        {
          fullName: 'Alice Johnson',
          username: 'alicejohnson',
          userType: 'USER',
          email: 'alicejohnson@example.com',
          password: 'password123',
          dateOfBirth: new Date('1992-02-20'),
        },
        {
          fullName: 'Bob Brown',
          username: 'bobbrown',
          userType: 'USER',
          email: 'bobbrown@example.com',
          password: 'password123',
          dateOfBirth: new Date('1988-07-30'),
        },
      ],
    });
    console.log('User records inserted successfully.');
  } catch (error) {
    console.error('Error inserting user records:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
