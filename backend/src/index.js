const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const routes = require("./routes");

const app = express();

const server = require("http").Server(app); // configurando servidor para protocolo HTTP
const io = require("socket.io")(server); // configurando servidor para Socket IO

// conectando com o mongodb atlas(nuvem)
mongoose.connect(
  "mongodb+srv://yago:instagramclone@instagramclone-q44hw.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// configurando todas as rotas para trabalharem com Socket IO
app.use((req, res, next) => {
  req.io = io;

  next();
});

app.use(cors()); // habilitando o cors pra que domínios extenos possam acessar a API

// disponibilizando o acesso de arquivos estáticos a partir da rota files
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "uploads", "resized"))
);

app.use(routes); // integrando o express com as rotas que estão configuradas em arquivo externo

server.listen(3333); // porta de escuta do servidor
