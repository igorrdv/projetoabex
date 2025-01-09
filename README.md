## Passo a passo para rodar a aplicação:
Abra o terminal e digite: 
```
npm install
```
> Em seguida digite: 
```
docker-compose up -d
```
Caso não tenha o docker instalado em sua máquina para executar o passo anterior, instale o Docker Desktop [aqui](https://www.docker.com/products/docker-desktop/).
> Em outro terminal: 
```
npx prisma db push
```
# Agora mude para a pasta Frontend
```
cd Frontend/
```
> Digite novamente o comando 
```
npm install
```
# Pronto, o projeto está instalado!

## Como rodar o projeto:
Na pasta raiz digite:
```
npm run dev
```
Agora mude para a pasta Frontent em outro terminal e digite: 
```
npm run dev
```
Pronto, o projeto está rodando em sua máquina. Abra no link que aparece em seu terminal, ou pelo link http://localhost:5173/




## Rotas disponíveis no projeto: 
- /
- /login
- /registrar
- /eventos

