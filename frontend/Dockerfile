# Use uma imagem oficial do Node.js como base para a construção
FROM node:18 AS build

# Defina o diretório de trabalho para o contêiner
WORKDIR /usr/src/app

# Copie o arquivo package.json e package-lock.json (se existir)
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código da aplicação
COPY . .

# Crie a versão de produção do frontend
RUN npm run build

# Use uma imagem Nginx para servir o build do React
FROM nginx:alpine

# Copie os arquivos build do contêiner Node.js para o diretório de servidos do Nginx
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Exponha a porta que o Nginx escutará
EXPOSE 80

# Comando padrão para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
