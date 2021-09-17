const { app: server } = require('./app');

const { PORT = 7000 } = process.env;

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})