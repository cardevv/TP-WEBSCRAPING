// Seleciona todos os elementos com a classe .description-noticia
let ns = document.querySelectorAll(".description-noticia");

// Array para guardar as notícias com data
let noticias = [];

// Expressão regular para encontrar datas no formato DD/MM/AAAA
const regexData = /(\d{2}\/\d{2}\/\d{4})/;

// Monta a lista {data, titulo}
for (let i = 0; i < ns.length; i++) {
  let tituloCompleto = ns[i].innerText.trim();

  // Usa a regex para encontrar a data na string
  let matchData = tituloCompleto.match(regexData);

  // Se a regex encontrar uma data, a variável `data` terá o valor da data encontrada
  // Caso contrário, a variável `data` terá o valor "sem data"
  let data = matchData ? matchData[0] : "sem data";

  // Remove a data do título para deixar o título mais limpo
  let titulo = tituloCompleto.replace(regexData, '').trim();

  noticias.push({ data, titulo });
}

// --- FILTRO ---
// Exemplo: filtrar só notícias de 09/09/2025
let filtradas = noticias.filter(n => n.data.includes("09/09/2025"));

console.log("Todas as notícias:", noticias);
console.log("Filtradas por data:", filtradas);
