# Party Manager para Jogadores Solo

## Descrição do Projeto
Este projeto é um **Party Manager** desenvolvido para facilitar a vida de jogadores solo ou casuais que só têm tempo para grindar em eventos como dungeons, especialmente nos finais de semana. Com ele, os jogadores podem agendar grupos, receber notificações via **Discord** e se organizar de forma mais eficiente para eventos temporários.

A ideia central do projeto é permitir que os jogadores agendem eventos, com a criação automática de salas no Discord e notificações por webhook. As salas serão criadas automaticamente para os grupos, e, após o término do evento, essas salas serão deletadas para manter o ambiente organizado.

## Funcionalidades

- **Agendamento de Grupos:** Permite que jogadores agendem um grupo específico para fazer dungeons.
- **Criação Automática de Sala no Discord:** A API do Discord cria automaticamente uma sala para o grupo em um servidor comunitário, onde os jogadores podem se organizar.
- **Notificações via Webhook:** O sistema envia notificações no Discord para avisar os jogadores com 1 hora de antecedência e também notifica se alguém desistir do evento.
- **Deleção Automática da Sala:** Após o término do evento, a sala criada será automaticamente deletada para manter o servidor limpo.
- **Reservas de Jogadores:** O sistema permite adicionar jogadores na reserva, caso algum participante desista de última hora.

## Tecnologias Utilizadas

- **Next.js** para toda a lógica de backend usando o **API Router**.
- **API do Discord** para criação e deleção de canais e gerenciamento de permissões.
- **Webhooks** do Discord para enviar notificações automáticas aos jogadores.

## Como Funciona

1. **Formação do Grupo:**
   - O jogador agenda um evento, como uma dungeon, e convida até 5 participantes. O grupo pode ter até 5 jogadores na reserva.

2. **Criação da Sala no Discord:**
   - A API do Discord cria automaticamente uma sala no servidor comunitário, exclusiva para os jogadores daquele evento. A sala pode ser de texto ou voz, conforme a necessidade do grupo.

3. **Notificações via Webhook:**
   - Os jogadores recebem uma notificação via Discord com 1 hora de antecedência do evento.
   - Se algum jogador desistir, o sistema avisa automaticamente os outros membros.

4. **Término do Evento:**
   - Quando o evento termina, o sistema deleta automaticamente a sala que foi criada para o grupo, mantendo o servidor organizado.

<!-- ## Pré-requisitos

- **Node.js** instalado
- **Next.js** instalado
- Um **bot** configurado no Discord com permissões adequadas (gerenciar canais, enviar mensagens, etc.)
- Um **servidor comunitário** no Discord para hospedar as salas de evento -->

<!-- ## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/usuario/party-manager.git -->
