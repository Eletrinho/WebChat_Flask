
# WebChat Flask

Desenvolvimento de um aplicativo de chat em tempo real utilizando Flask, uma estrutura de aplicativo da web em Python. O projeto visa proporcionar uma experiência de comunicação instantânea e colaborativa entre usuários, oferecendo salas de chat públicas.


## Tecnologias utilizada
- Framework Web: Flask
- WebSocket: Flask-SocketIO
- Frontend: HTML, CSS, JavaScript (com Socket.IO)


## Melhorias a serem feitas

- Melhorar o design
- Utilizar algum banco de dados para salvar as mensagens, pois atualmente só da para ver as mensagens se estiver na página na hora, caso recarregue a página, as mensagens sumirão.
- Criar salas privadas


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/Eletrinho/WebChat_Flask
```

Entre no diretório do projeto

```bash
  cd WebChat_Flask
```

Crie um ambiente virtual do python e ative

```bash
  python -m venv env
  source env/Scripts/activate
```

Instale as dependências

```bash
  pip install -r requirements.txt
```

Inicie o servidor

```bash
  py run.py
```
Agora é só entrar no site https://localhost:5000/.


## Licença

[MIT](https://choosealicense.com/licenses/mit/)

