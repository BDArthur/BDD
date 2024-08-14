const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.music.createMany({
      data: [
        {
          title: 'Tudo Que Você Quiser',
          duration: 249,
          releaseYear: 2013,
          artists: 'Luan Santana',
          album: 'O Mundo é dos Jovens',
          genres: 'Sertanejo',
          isSingle: false,
        },
        {
          title: 'Tanto Faz',
          duration: 156,
          releaseYear: 2013,
          artists: 'Luan Santana',
          album: 'O Mundo é dos Jovens',
          genres: 'Sertanejo',
          isSingle: false,
        },
        {
          title: 'Te Vivo',
          duration: 216,
          releaseYear: 2013,
          artists: 'Luan Santana',
          album: 'O Mundo é dos Jovens',
          genres: 'Sertanejo',
          isSingle: false,
        },
        {
          title: 'Te Esperando',
          duration: 277,
          releaseYear: 2013,
          artists: 'Luan Santana',
          album: 'O Mundo é dos Jovens',
          genres: 'Sertanejo',
          isSingle: false,
        },
        {
          title: 'Cê Topa',
          duration: 168,
          releaseYear: 2013,
          artists: 'Luan Santana',
          album: 'O Mundo é dos Jovens',
          genres: 'Sertanejo',
          isSingle: false,
        },
      ],
    });
    console.log('Music records inserted successfully.');
  } catch (error) {
    console.error('Error inserting music records:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
