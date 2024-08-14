const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

async function main() {
    const data = [
            { name: 'Tudo Que Você Quiser',  duration: '249', releaseYear: '2013', singer: 'Luan Santana'},
            { name: 'Tanto Faz',  duration: '156', releaseYear: '2013', singer: 'Luan Santana'},
            { name: 'Te vivo',  duration: '216', releaseYear: '2013', singer: 'Luan Santana'},
            { name: 'Te esperando',  duration: '277', releaseYear: '2013', singer: 'Luan Santana'},
            { name: 'Cê Topa',  duration: '168', releaseYear: '2013', singer: 'Luan Santana'}
    ];
    await prisma.music.create({ data });
    console.log("Cadastro realizado com sucesso!");
}

main();



