# - Projeto Final Academia do Desenvolvedor 

### Pré requisitos: 

## MySql
`instalação e criação de um bd com uma tabela usuarios onde apliquei os conceitos usados em aula`

  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `data_nascimento` date NOT NULL,
  `telefone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `criado_em` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `alterado_em` timestamp NULL DEFAULT NULL,
  `criado_por` int(11) DEFAULT NULL,
  `alterado_por` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  
### Instalação
`Para manter o projeto organizado dividi o mesmo em duas pastas "api" e frontend respectivamente`

## API - instalação e Bibliotecas
 ` express - nodemon - mysql`

### Para rodar o projeto
`yarn start`

## Frontend - instalação e Bibliotecas
`npx create-react-app` `axios (consumir api) - styled-components (estilizaçao)- react-icons (carregar icons de ediçao) - react- toastify ( touchs feedback)`

## Fonte - Google - Poppins



