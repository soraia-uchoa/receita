import { createServer }  from "node:http"

//criar servidor
const server = createServer((req, res) => {
    res.end("oladkoeff")
})

server.listen(3000, () => {
    console.log("Servidor criado")
})