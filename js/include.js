document.addEventListener("DOMContentLoaded", async () => {
  // Carrega header e footer em paralelo
  const [headerHtml, footerHtml] = await Promise.all([
    fetch("/componentes/navBar.html").then(r => r.text()),
    fetch("/componentes/footer.html").then(r => r.text())
  ]);

  // Insere no DOM
  document.getElementById("include-header").innerHTML = headerHtml;
  document.getElementById("include-footer").innerHTML = footerHtml;

  // Agora que os componentes existem, inicializa tudo do Materialize
  M.AutoInit();

  // Configurações extras (caso precise ajustar comportamento)
  const carousels = document.querySelectorAll(".carousel");
  carousels.forEach(c => {
    const instance = M.Carousel.init(c, {
      fullWidth: true,
      indicators: true,
      duration: 600
    });
    setInterval(() => instance.next(), 5000);
  });
});
