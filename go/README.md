# Desafio Concluído - Publicando uma Imagem Go no Docker Hub

Este repositório contém a solução para o desafio de publicar uma imagem Go no Docker Hub. O objetivo era criar uma imagem que, ao ser executada com o comando `docker run <seu-user>/fullcycle`, exibisse a mensagem "Full Cycle Rocks!!".

## Passos para Execução

Siga os passos abaixo para executar o desafio concluído:

1. Certifique-se de ter o Docker instalado em sua máquina.

2. Execute o seguinte comando para baixar a imagem do Docker Hub:

```bash
docker pull r0ds/fullcycle
```

3. Após o download da imagem, execute o seguinte comando para executar o container:

```bash
docker run r0ds/fullcycle
```

4. Verifique se a mensagem "Full Cycle Rocks!!" é exibida no terminal.

## Descrição do Desafio

Este desafio tinha como objetivo criar e publicar uma imagem Go no Docker Hub. A imagem deveria exibir a mensagem "Full Cycle Rocks!!" ao ser executada. Para atingir esse objetivo, foram seguidos os seguintes passos:

1. Foi criado um programa básico em Go que imprime a mensagem desejada.

2. Utilizou-se uma imagem oficial da linguagem Go como base para a construção da imagem personalizada.

3. Foram aplicadas técnicas para minimizar o tamanho final da imagem, incluindo a compilação estática.

4. A imagem personalizada foi publicada no Docker Hub.

## Resultado

Após concluir o desafio, foi possível criar e publicar uma imagem Go no Docker Hub, seguindo as especificações do desafio. A imagem pode ser executada com sucesso, exibindo a mensagem "Full Cycle Rocks!!".

Para mais detalhes sobre o desafio e a solução implementada, consulte o repositório completo do projeto.

## Repositório do Projeto

O repositório do projeto com o desafio concluído pode ser encontrado [aqui](link-do-repositorio).

## Imagem no Docker Hub

A imagem do projeto Go no Docker Hub pode ser acessada através do seguinte link: [Link imagem Docker Hub](https://hub.docker.com/r/r0ds/fullcycle).
