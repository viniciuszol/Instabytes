# Instabytes

Instabytes é uma aplicação que replica a funcionalidade básica de uma página inicial de perfil do Instagram. O backend foi desenvolvido utilizando **Node.js** e a **API do Google**, enquanto o frontend exibe as postagens de um perfil de maneira dinâmica. O sistema também utiliza o **MongoDB Atlas** para armazenar os dados das postagens e interagir com o banco de dados de forma eficiente.

## Tecnologias Utilizadas

- **Backend**:
  - Node.js (JavaScript)
  - Express.js
  - API do Google (para integrar funcionalidades como autenticação, etc.)
  - MongoDB Atlas (para armazenar dados)

- **Frontend**:
  - HTML, CSS e JavaScript (Vanilla)
  - Exibição dinâmica de postagens

## Funcionalidades

- **Página inicial de perfil**: Exibe as postagens de um usuário, como um feed do Instagram.
- **Integração com API do Google**: Utiliza a API do Google para funcionalidades extras como autenticação, entre outras.
- **Armazenamento de dados**: As postagens são armazenadas no banco de dados MongoDB Atlas.
- **Frontend interativo**: O frontend é responsável por mostrar as postagens de maneira dinâmica, similar ao layout do Instagram.

### Clonando o Repositório

Primeiro, clone o repositório para o seu ambiente local:

```bash
git clone https://github.com/seu-usuario/instabytes.git
cd instabytes
```

### Instalando as Dependências

Antes de rodar o projeto, você precisará instalar as dependências do backend. O projeto utiliza o Node.js. Para instalar as dependências, execute o seguinte comando no terminal:

```bash
npm install
```

Isso irá instalar todos os pacotes necessários, que estão listados no arquivo package.json.

### Configurando as Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto e adicione o seguinte conteúdo, substituindo pelos seus dados:

**-STRING_CONEXAO**=sua-conexao-mongodb-atlas 
**-GEMINI_API_KEY**=sua-chave-api-gemini
