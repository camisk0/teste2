$(document).ready(function () {
  let imagesArray = [];
  let titlesArray = [];
  let currentImageIndex = 0;

  // Ao clicar na imagem do gráfico
  $(".clickable-image").click(function () {
    const imgSrc = $(this).attr("src");
    imagesArray = JSON.parse($(this).attr("data-images"));
    titlesArray = JSON.parse($(this).attr("data-titles"));
    currentImageIndex = imagesArray.indexOf(imgSrc);

    // Exibir a imagem e o título no modal
    $("#modalImage").attr("src", imgSrc);
    $("#modalTitle").text(titlesArray[currentImageIndex]);
    $("#imageModal").show();
    atualizarBotoes();
  });

  $(".close").click(function () {
    $("#imageModal").hide();
    updateGraph(); // Atualiza a imagem fora do modal
    atualizarBotoes(); // Atualiza os botões fora do modal
  });

  $(window).click(function (event) {
    if (event.target == document.getElementById("imageModal")) {
      $("#imageModal").hide();
      updateGraph(); // Atualiza a imagem fora do modal
      atualizarBotoes(); // Atualiza os botões fora do modal
    }
  });

  // Navegação das setas quando não está em tela cheia
  $("#nextGraphBtn").click(function () {
    currentImageIndex = (currentImageIndex + 1) % imagesArray.length;
    updateGraph();
    atualizarBotoes();
  });

  $("#prevGraphBtn").click(function () {
    currentImageIndex = (currentImageIndex - 1 + imagesArray.length) % imagesArray.length;
    updateGraph();
    atualizarBotoes();
  });

  // Navegação das setas dentro do modal
  $("#nextModalBtn").click(function () {
    currentImageIndex = (currentImageIndex + 1) % imagesArray.length;
    updateModal();
    atualizarBotoes();
  });

  $("#prevModalBtn").click(function () {
    currentImageIndex = (currentImageIndex - 1 + imagesArray.length) % imagesArray.length;
    updateModal();
    atualizarBotoes();
  });

  // Atualiza a imagem e o título fora do modal
  function updateGraph() {
    $(".clickable-image").attr("src", imagesArray[currentImageIndex]);
    $("#graphTitle").text(titlesArray[currentImageIndex]);
  }

  // Atualiza a imagem e o título dentro do modal
  function updateModal() {
    $("#modalImage").attr("src", imagesArray[currentImageIndex]);
    $("#modalTitle").text(titlesArray[currentImageIndex]);
  }

  // Atualiza a visibilidade dos botões
  function atualizarBotoes() {
    $("#prevGraphBtn").toggle(currentImageIndex > 0);
    $("#nextGraphBtn").toggle(currentImageIndex < imagesArray.length - 1);
    $("#prevModalBtn").toggle(currentImageIndex > 0);
    $("#nextModalBtn").toggle(currentImageIndex < imagesArray.length - 1);
  }

  // Inicializa a página e os gráficos
  function initializePage() {
    const initialImageSrc = $(".clickable-image").attr("src");
    imagesArray = JSON.parse($(".clickable-image").attr("data-images"));
    titlesArray = JSON.parse($(".clickable-image").attr("data-titles"));
    currentImageIndex = imagesArray.indexOf(initialImageSrc);
    updateGraph();
    atualizarBotoes();
  }

  initializePage();
});
