import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";
import cors from "cors";

const corsOptions = {
  origin: "http://localhost:8000",
  optionsSucessStatus: 200
}

// Configura o armazenamento para arquivos enviados pelo Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Define o diretório de destino para os arquivos enviados (./uploads/)
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // Mantém o nome original do arquivo para os arquivos enviados
    cb(null, file.originalname);
  }
});

// Cria uma instância do Multer com o armazenamento configurado
const upload = multer({ dest: "./uploads", storage });

// Define as rotas para a aplicação
const routes = (app) => {
  // Analisa dados JSON no corpo da requisição para todas as rotas
  app.use(express.json());
  app.use(cors(corsOptions));
  // Rota para obter todos os posts (lida pela função listarPosts)
  app.get("/posts", listarPosts);

  // Rota para criar um novo post (lida pela função postarNovoPost)
  app.post("/posts", postarNovoPost);

  // Rota para fazer upload de uma imagem (lida pela função uploadImagem)
  app.post("/upload", upload.single("imagem"), uploadImagem);

  app.put("/upload/:id", atualizarNovoPost);
};

export default routes;