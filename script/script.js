//modo escuro 
document.getElementById("toggle-tema").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// mensagem no topo do site com nome e horario(de seu dipositivo que acessou o site.~.)
function mensagemdotopo() {
  const agora = new Date();
  const hora = agora.getHours();
  const minutos = agora.getMinutes();
  const alunos = ["Juan", "Del", "Luiza", "Marques"];
  const nomedadupla = alunos[Math.floor(Math.random() * alunos.length)];
  const minutostransforma = minutos < 10 ? '0' + minutos : minutos;
  const msg = `Site de ${nomedadupla} / Horário atual: ${hora}:${minutostransforma}`;

  document.getElementById("hora-msg").textContent = msg;
}
mensagemdotopo();

//formulario de contato
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
        erro.textContent = "Preencha";
        return;
      }
      erro.textContent = "Mensagem enviada";
      form.reset();
    });
  }
});

// navegacao 
const barradenav = [
  { nome: "Internet", link: "index.html" },
  { nome: "-Html-", link: "historia1.html" },
  { nome: "Contato", link: "contato.html" }
];
const nav = document.getElementById("barraN");
if (nav) {
  barradenav.forEach(item => {
    const a = document.createElement("a");
    a.href = item.link;
    a.textContent = item.nome;
    nav.appendChild(a);
  });
}

//uma lista de tags usando if e whilw
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
  "<code> — bloco de código (marcação inline para código)"
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

// Aplica animacao ao carregar
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("slide-in");
});
document.querySelectorAll("a[href]").forEach(link => {
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
