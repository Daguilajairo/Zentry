const btnComecar = document.getElementById('btnComecar');
const section = document.getElementById('servicos');

btnComecar.addEventListener('click', () => {
    section.scrollIntoView({ behavior: 'smooth' });
});

const btnRetornar = document.getElementById('retornar');
const inicio = document.getElementById('inicio');
btnRetornar.addEventListener('click', () => {
    inicio.scrollIntoView({ behavior: 'smooth' });
});

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});


function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100; 

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}


window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

 
  (function() {
    emailjs.init("e5t3S4kdaLWXQ47iX");
  })();

 
  const form = document.getElementById("form-contato");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

  
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const empresa = document.getElementById("empresa").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    
    if (!nome || !email || !mensagem) {
      alert("⚠️ Por favor, preencha nome, e-mail e mensagem.");
      return;
    }

    
    alert("⏳ Enviando mensagem...");

   
    emailjs.send("service_6hbhzz9", "template_0876wwa", {
      from_name: nome,
      email_id: email,
      company: empresa,
      message: mensagem
    })
    .then(function() {
      alert("✅ Mensagem enviada com sucesso! Obrigado pelo contato, " + nome + ".");
      form.reset();
    }, function(error) {
      console.error("Erro:", error);
      alert("❌ Ocorreu um erro ao enviar. Verifique sua conexão ou tente novamente.");
    });
  });