const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const Post = require("../models/Post");

module.exports = {
  async index(req, res) {
    const posts = await Post.find().sort("-createdAt");

    return res.status(200).json(posts);
  },
  async store(req, res) {
    const { author, place, description, hashtags } = req.body;
    const { filename: image } = req.file;

    const [name] = image.split("."); // pegando somente o nome da imagem
    const filename = `${name}.jpg`;

    // comprimindo imagem
    await sharp(req.file.path)
      .resize(500)
      .jpeg({ quality: 70 })
      .toFile(path.resolve(req.file.destination, "resized", filename));

    // deletando a imagem no tamanho original
    fs.unlinkSync(req.file.path);

    const post = await Post.create({
      author,
      place,
      description,
      hashtags,
      image: filename,
    });

    req.io.emit("post", post); // vai emitir/disponibilizar o novo post em tempo real (Socket IO)

    return res.status(200).json(post);
  },
};
