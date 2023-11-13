# sitemario
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Mukta:wght@300;700&display=swap"
      rel="stylesheet"
    />
    <title>Super Mario</title>
  </head>

  <body>
    <div class="caixa-video-mario">
      <video src="assets/video.mp4" autoplay muted loop></video>
      <div class="mascara-video"></div>
    </div>

    <div class="caixa-principal">
      <img src="assets/logo.png" alt="logo do super mario" class="logo-mario" />
      <p>Encanadores Mario & Luigi - Resolvendo Seus Problemas Com Estilo!</p>
      <p>
        Você já se encontrou em uma situação de emergência com encanamento?
        Vazamentos inesperados, canos entupidos ou torneiras que não param de
        pingar? Não se preocupe, porque estamos aqui para salvar o dia!
        Apresentamos a vocês os encanadores mais famosos do Reino dos Cogumelos
        - Mario e Luigi!
      </p>
      <button onclick="cliqueiNoBotao()">Fale conosco</button>
    </div>

    <img src="assets/mario.png" alt="logo mario e luigi" class="imagem-mario-luigi" />

    <form  class="fale-conosco" action="https://formsubmit.co/mhtech2023@gmail.com" method="POST" >
      <input class="inp" placeholder="Seu nome" name="nome" />
      <input class="inp_1" placeholder="Seu telefone" name="telefone" />
      <textarea placeholder="Digite seu problema aqui" name="texto"></textarea>
      <button onclick="sumirFormulario()">Enviar formulário</button>
    </form>

    <div class="mascara-form"></div>
  </body>
  <script src="script.js"></script>
</html>
