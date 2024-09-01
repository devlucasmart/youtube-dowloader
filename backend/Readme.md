# YouTube Video Downloader API

Esta API permite o download de vídeos do YouTube e armazena-os na pasta de Downloads do usuário. Utiliza o `yt-dlp` para realizar o download dos vídeos e fornece feedback de status durante o processo.

## Visão Geral

A API foi construída com Node.js e Express. Utiliza o `yt-dlp` para baixar vídeos do YouTube. O progresso do download é registrado no console. O vídeo baixado é salvo na pasta `$HOME/Downloads` do usuário.

## Como Usar

1. **Inicie o Servidor:**

   No diretório do projeto, execute:

   ```bash
   node index.js
2. ***curl para enviar uma requisição POST para http://localhost:3000/download com o corpo JSON:***

    curl -X POST http://localhost:3000/download \
    -H "Content-Type: application/json" \
    -d '{"url": "https://www.youtube.com/watch?v=example"}'
