const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

async function main() {
    const data = [
        { id: "1", name: "Smartphone X1", price: "599.99", amount: "20", store: "Tech Store", 
        description: "A high-end smartphone with a 6.5-inch display and 128GB storage.", rating: "4.5"},
        { id: "2", name: "Wireless Earbuds Pro", price: "129.99", "amount": "50", store: "Gadget Hub",
          description: "Bluetooth earbuds with noise cancellation and 20 hours of battery life.", rating: "4.7" },
        { id: "3",name: "4K Ultra HD TV", price: "899.99", amount: "15", store: "ElectroWorld",
          description: "55-inch 4K Ultra HD TV with smart features and built-in streaming apps.", rating: "4.8" },
        { id: "4", name: "Gaming Laptop GTX", price: "1,299.99", amount: "10", store: "PC Central",
          description: "Powerful gaming laptop with NVIDIA GTX graphics and 16GB RAM.", rating: "4.6" },
        { id: "5", name: "Smartwatch Series 5", price: "249.99", amount: "30", store: "Wearables Plus",
          description: "Smartwatch with fitness tracking, heart rate monitor, and customizable watch faces.", rating: "4.4"}
    ];
    await prisma.products.create({ data });
    console.log("Cadastro realizado com sucesso!");
}

main();

    
       
      