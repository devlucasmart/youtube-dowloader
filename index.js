const express = require('express');
const { spawn } = require('child_process');
const path = require('path');
const os = require('os');

const app = express();
app.use(express.json());

app.post('/download', (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).send({ error: 'A URL do vídeo é necessária.' });
  }

  const videoDir = path.resolve(os.homedir(), 'Downloads');
  const command = 'yt-dlp';
  const args = ['-o', `${videoDir}/%(title)s.%(ext)s`, url];

  // Executa o comando para baixar o vídeo
  const downloadProcess = spawn(command, args);

  // Captura a saída padrão (stdout) em tempo real
  downloadProcess.stdout.on('data', (data) => {
    console.log(`Status: ${data}`);
  });

  // Captura erros (stderr) em tempo real
  downloadProcess.stderr.on('data', (data) => {
    console.error(`Erro: ${data}`);
  });

  // Quando o processo de download for concluído
  downloadProcess.on('close', (code) => {
    if (code === 0) {
      res.send({ message: 'Vídeo baixado com sucesso!' });
    } else {
      res.status(500).send({ error: `Erro ao baixar vídeo. Código de saída: ${code}` });
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
