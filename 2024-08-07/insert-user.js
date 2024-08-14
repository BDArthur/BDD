const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

async function main() {
    const data = [
            { username: 'Caiunhumgameplays', birthDate: '1945-05-13', email: "", password: "", name: 'Cainhum', age: '17', location: 'Brazil, Caraguatatuba, SP'},
            { username: 'Arthurgameplays', birthDate: '2009-01-22', email: "", password: "", name: 'Arthur', age: '72', location: 'Brazil, Caraguatatuba, SP'},
            { username: 'Thiagogameplays', birthDate: '2005-12-31', email: "", password: "", name: 'Thiago', age: '7', location: 'Brazil, Caraguatatuba, SP'},
            { username: 'Guilhermegameplays', birthDate: '2007-02-03', email: "", password: "", name: 'Guilherme', age: '15', location: 'Brazil, Caraguatatuba, SP'},
            { username: 'Computadorgameplays', birthDate: '2004-08-23', email: "", password: "", name: 'Computador', age: '32', location: 'Brazil, Caraguatatuba, SP'}
    ];
    await prisma.user.create({ data });
    console.log("Cadastro realizado com sucesso!");
}

main();