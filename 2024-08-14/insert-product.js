const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.product.createMany({
      data: [
        {
          name: 'Product One',
          description: 'Description for Product One',
          price: new Prisma.Decimal(19.99),
          stock: 100,
          rating: new Prisma.Decimal(4.50),
        },
        {
          name: 'Product Two',
          description: 'Description for Product Two',
          price: new Prisma.Decimal(29.99),
          stock: 150,
          rating: new Prisma.Decimal(4.75),
        },
        {
          name: 'Product Three',
          description: 'Description for Product Three',
          price: new Prisma.Decimal(9.99),
          stock: 200,
          rating: new Prisma.Decimal(4.00),
        },
        {
          name: 'Product Four',
          description: 'Description for Product Four',
          price: new Prisma.Decimal(39.99),
          stock: 50,
          rating: new Prisma.Decimal(4.25),
        },
        {
          name: 'Product Five',
          description: 'Description for Product Five',
          price: new Prisma.Decimal(49.99),
          stock: 75,
          rating: new Prisma.Decimal(4.85),
        },
      ],
    });
    console.log('Product records inserted successfully.');
  } catch (error) {
    console.error('Error inserting product records:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();