const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Caminho da pasta de uploads
const uploadsDir = path.join(__dirname, "../uploads");

// Garantir que a pasta de uploads existe
if (!fs.existsSync(uploadsDir)) {
  console.log("Criando pasta uploads...");
  fs.mkdirSync(uploadsDir);
}

// Configuração do multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage,
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/i)) {
      return cb(
        new Error("É permitido somente o envio de imagens (jpg, png, jpeg).")
      );
    }
    cb(null, true);
  },
});

module.exports = upload;
