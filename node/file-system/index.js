const fs = require('fs').promises; // Importa o módulo fs do Node.js para operações de sistema de arquivos de forma assíncrona
const path = require('path'); // Importa o módulo path do Node.js para manipulação de caminhos de arquivo

// Função para ler o conteúdo de um diretório de forma assíncrona
async function readdir(rootDir) {
    // Define o diretório raiz como o diretório atual se nenhum diretório for fornecido
    rootDir = rootDir || path.resolve(__dirname);
    // Lê os arquivos e diretórios dentro do diretório especificado
    const files = await fs.readdir(rootDir);

    // Chama a função walk para percorrer recursivamente os arquivos e diretórios dentro do diretório
    walk(files, rootDir);
}

// Função para percorrer recursivamente os arquivos e diretórios dentro de um diretório
async function walk(files, rootDir) {
    // Para cada arquivo/diretório dentro do diretório
    for (let file of files) {
        // Obtém o caminho completo do arquivo/diretório
        const fileFullPath = path.resolve(rootDir, file);
        // Obtém as estatísticas (como se é um diretório ou arquivo) do arquivo/diretório
        const stats = await fs.stat(fileFullPath);

        // Verifica se o item é um diretório
        if (stats.isDirectory()) {
            // Se for um diretório, chama recursivamente a função readdir para percorrê-lo
            readdir(fileFullPath);
            // Continua para o próximo item no loop
            continue;
        }

        // Imprime o nome do arquivo/diretório e se é um diretório ou não
        console.log(file, stats.isDirectory());
    }
}

// Chama a função readdir com o caminho do diretório que se deseja percorrer
readdir('C:/Users/Acer/Desktop/Projetos/JS-Udemy/');
