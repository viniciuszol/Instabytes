import "dotenv/config";
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";
// Conecta ao banco de dados MongoDB
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para buscar todos os posts do banco de dados
export async function getTodosPosts() {
    // Seleciona o banco de dados "imersao_instabyte"
    const db = conexao.db("imersao_instabyte");
    // Seleciona a coleção "posts"
    const colecao = db.collection("posts");
    // Busca todos os documentos da coleção e converte em um array
    return colecao.find().toArray();
  }

  export async function criarPost(novoPost) {
      // Seleciona o banco de dados "imersao_instabyte"
      const db = conexao.db("imersao_instabyte");
      // Seleciona a coleção "posts"
      const colecao = db.collection("posts");
      // Busca todos os documentos da coleção e converte em um array
      return colecao.insertOne(novoPost);
  }

  export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao_instabyte");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id)
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost});
}