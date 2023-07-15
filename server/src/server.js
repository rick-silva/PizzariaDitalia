import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify();
//cria a conexão do prisma client
const prisma = new PrismaClient;

app.get('/pizzas', async ()=>{
    //usando o 'prisma client' consulta a tabela 'pizza' e recupera todos os valores da tabela
    // armazenando na variavel pizzas
    const pizzas = await prisma.pizza.findMany()

    // retorna os valores da tabela armazenados na tabela pizza
    return pizzas
})

//inicia o servidos na porta 3333
app.listen({
    port: 3333,
// como a chamada se trata de uma promice podemos usar o metodo then, caso o retorno seja positivo temos uma mensagem de retorno no console
}).then(()=>{
    console.log('servidor rodando na porta 3333')
})