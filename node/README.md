# Desafio - Utilizando Nginx como Proxy Reverso

Este repositório contém uma solução para o desafio de utilizar o Nginx como proxy reverso em conjunto com uma aplicação Node.js e um banco de dados MySQL.

## Funcionalidades

- Quando um usuário acessa o servidor Nginx, o Nginx faz uma chamada para a aplicação Node.js.
- A aplicação Node.js adiciona um registro contendo um nome na tabela "people" do banco de dados MySQL.
- Após a adição do registro, a aplicação Node.js retorna uma página HTML para o Nginx com a lista de nomes cadastrados.
- Utilização do Docker Compose para facilitar a configuração e execução do projeto.

## Configuração

Para executar o desafio, siga as instruções abaixo:

1. Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina.

2. Clone este repositório para o seu ambiente local.

3. Navegue até o diretório raiz do projeto.

4. Execute o seguinte comando para iniciar os serviços:

```bash
docker-compose up -d
```

5. Aguarde até que todos os containers sejam inicializados corretamente.

6. Acesse o servidor em seu navegador usando o endereço `http://localhost:8080`.

7. Será exibida uma página com o título "Full Cycle Rocks!" e a lista de nomes cadastrados no banco de dados.

## Considerações Finais

Este desafio permitiu aplicar o conhecimento sobre o uso do Nginx como um proxy reverso, juntamente com uma aplicação Node.js e um banco de dados MySQL. A solução utiliza o Docker Compose para facilitar a configuração e execução do ambiente de desenvolvimento.

Sinta-se à vontade para explorar o código e adaptar a solução de acordo com suas necessidades.
