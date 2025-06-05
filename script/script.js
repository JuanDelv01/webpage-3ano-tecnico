// Toggle modo escuro com troca de ícone
const toggleTema = document.getElementById("toggle-tema");
if (toggleTema) {
  toggleTema.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const icon = toggleTema.querySelector("i");
    if (icon.classList.contains("fa-moon")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  });
}

// Mensagem no topo do site com nome e horário (do dispositivo)
function mensagemdotopo() {
  const agora = new Date();
  const hora = agora.getHours();
  const minutos = agora.getMinutes();
  const alunos = ["Juan", "Del", "Luiza", "Marques"];
  const nomedadupla = alunos[Math.floor(Math.random() * alunos.length)];
  const minutostransforma = minutos < 10 ? "0" + minutos : minutos;
  const msg = `Site de ${nomedadupla} / Horário atual: ${hora}:${minutostransforma}`;

  const horaMsg = document.getElementById("hora-msg");
  if (horaMsg) {
    horaMsg.textContent = msg;
  }
}
mensagemdotopo();

// Validação e envio do formulário de contato
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contato");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const msg = document.getElementById("mensagem").value.trim();
      const erro = document.getElementById("erro-form");
      if (!nome || !email || !msg) {
        erro.textContent = "Por favor, preencha todos os campos.";
        return;
      }
      erro.textContent = "Mensagem enviada com sucesso!";
      form.reset();
    });
  }
});

// Navegação dinâmica
const barradenav = [
  { nome: "Internet", link: "index.html" },
  { nome: "-Html-", link: "historia1.html" },
  { nome: "Contato", link: "contato.html" },
];

const nav = document.getElementById("barraN");
if (nav) {
  barradenav.forEach((item) => {
    const a = document.createElement("a");
    a.href = item.link;
    a.textContent = item.nome;
    nav.appendChild(a);
  });
}

// Lista de tags usando while
const Tags = [
  "<html> — marca o início do documento HTML",
  "<head> — contém metadados da página",
  "<title> — título da página (exibido na aba do navegador)",
  "<body> — corpo do documento, onde o conteúdo aparece",
  "<h1> a <h6> — títulos e subtítulos, de nível 1 a 6 (contadas como 6 tags)",
  "<p> — parágrafo",
  "<br> — quebra de linha",
  "<hr> — linha horizontal (separador)",
  "<a> — link (âncora)",
  "<img> — imagem",
  "<ul> — lista não ordenada",
  "<ol> — lista ordenada",
  "<li> — item da lista",
  "<pre> — texto pré-formatado (mantém espaços e quebras)",
  "<code> — bloco de código (marcação inline para código)",
];

const ul3m19 = document.getElementById("lista");
if (ul3m19) {
  let i = 0;
  while (i < Tags.length) {
    const li = document.createElement("li");
    li.textContent = Tags[i];
    ul3m19.appendChild(li);
    i++;
  }
}

// Animação ao carregar página e animação de saída ao clicar nos links internos
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("slide-in");
});

document.querySelectorAll("a[href]").forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href.startsWith("#") || this.target === "_blank") return;
    e.preventDefault();
    document.body.classList.remove("slide-in");
    document.body.classList.add("slide-out");
    setTimeout(() => {
      window.location.href = href;
    }, 300);
  });
});
