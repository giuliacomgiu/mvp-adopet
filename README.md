# Adopet

## CRIAÇÃO DE MINIMUM VIABLE PRODUCT.
## SITE E APLICATIVO DE GERENCIAMENTO DE DOAÇÃO DE ANIMAIS.

Jades Cassins Netto

Giulia Ciprandi

Thiago Pereira Novais

Rosana Rossin

Monica Tomaz de Jesus


## Frontend
React native com gerenciador de pacotes Yarn

## Backend
NodeJS e ExpressJS
Sequelize como interface com o banco de dados
Json Web Token e Bycrypt para autenticação
CORS
Nodemon para desenvolvimento local

## Banco de Dados
MySQL com engine InnoDB

## IDEs
Para o frontend e backend utilizamos o Visual Studio Code, e para manipulação do banco de dados utilizamos a linha de comando.



## Estrutura de pastas do projeto
O projeto está divido em pastas:
- app: pasta onde estão as rotas, controllers e models do backend;
- assets: pasta onde estão os recursos do frontend (imagens, arquivos de estilo, telas do aplicativo, utilitários);
- components: pasta que contém os componentes utilizados no frontend
- config: pasta com configurações do banco de dados
- db/seeds: pasta com arquivos .json para testes de implementação do banco de dados


## Como executar o projeto
### 1) Clonar repositório:
Primeiramente é necessário clonar o repositório GIT para a máquina que irá executar a aplicação (é necessário possuir o GIT instalado).
Para clonar o repositório, execute o seguinte comando no terminal:
git clone https://github.com/giuliacomgiu/mvp-adopet.git

### 2) Instalar pacotes:
Após clonar o repositório, é necessário instalar todas as dependências do projeto. Para isso é necessário instalar o yarn seguindo a documentação do próprio gerenciador de dependências: https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable (Isso pode incluir instalar outros pacotes, como o npm). Também é preciso instalar o mysql seguindo a própria documentação: https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/

### 3) Instalar dependências
Para tanto, é necessário navegar até o diretório dos projetos e executar o seguinte comando, ainda no terminal:
```
yarn install
```
Se houver algum conflito, é preciso remover o diretório .yarn/cache e o arquivo .yarn/install-state.gz

### 4) Executar o projeto do front end:
Para executar o projeto, no diretório do projeto digitar o seguinte comando no terminal:
```
yarn start
```
Em seguida, é preciso interagir com a interface do ExpoCli. A forma que o projeto foi validada foi utilizando o aplicativo ExpoGo em um celular android. Feitos os passos requisitados pelo ExpoCLI, basta acessar a url
`http://localhost:19006/`

### 5) Executar o projeto do back end
Primeiramente, é preciso se certificar que o serviço do mysql está rodando corretamente. Caso o sistema operacional seja Debian, basta executar no terminal
```
systemctl status mysql.service
```
Uma vez que esteja ativo, é preciso alterar o arquivo config/db.config.js e colocar as credenciais utilizadas por você ao inicializar o serviço do MySQL. Se o sistema operacional for debian, é possível encontrá-los rodando o seguinte comando no terminal
```
sudo cat /etc/mysql/debian.cnf
```
Para executar o projeto, no diretório do projeto digitar o seguinte comando no terminal:
yarn server
Basta acessar o backend no endereço
`http://localhost:8080/`
Para verificar que o servidor iniciou corretamente, basta acessar `http://localhost:8080/api/` e validar a resposta em JSON `{ “checks”: “ok” }`

