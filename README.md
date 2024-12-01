<p align="center">
  <img src="./app/assets/splash.png" width="240" alt="Vaga Certa Logo" />
</p>

<p align="center">
  descrição
</p>

---

<p align="center">
 <a href="#started">Primeiros Passos</a> • 
 <a href="#tech">Tecnologias</a> • 
  <a href="#colab">Colaboradores</a> •
 <a href="#contribute">Contribua</a>
</p>


### Principais funcionalidades:
- **Fun**: funcionalidade

<h2 id="started">🚀 Primeiros Passos</h2>

<h3>Pré-requisitos</h3>

- [NodeJS](https://nodejs.org/en/download/package-manager)
- [Git](https://git-scm.com/downloads)

<h3>Clonando</h3>

Como clonar o projeto:

```bash
git clone git@github.com:devBrunaSilva/app-vagas.git
```

<h3>Iniciando o servidor</h3>

Instale as dependências:
```bash
npm run install:server
```

Execute o servidor:
```bash
npm run start:server
```

<h3>Iniciando a aplicação</h3>

> Você deverá configurar as variáveis de ambiente em um arquivo `.env` para acessar a API.
Crie o arquivo .env na pasta `./app` e adicione a variável `EXPO_PUBLIC_API_URL` que deve conter o ip da maquina onde o servidor está executando

`.env`
```env
EXPO_PUBLIC_API_URL=http://192.168.15.15:3000
```

Instale as dependências:
```bash
npm run install:app
```

Execute o servidor:
```bash
npm run start:app
```

<h2 id="technologies">💻 Tecnologias</h2>

- expo
- react native
- styled components
- node
- express


<h2 id="colab">🤝 Colaboradores</h2>

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/devBrunaSilva">
        <img src="https://avatars.githubusercontent.com/u/96504509?v=4" width="100px;" alt="Bruna Silva Profile Picture"/><br>
        <sub>
          <b>Bruna Silva</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/franklinrms">
        <img src="https://avatars.githubusercontent.com/u/88167195?v=4" width="100px;" alt="Franklin Ramos Profile Picture"/><br>
        <sub>
          <b>Franklin Ramos</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/patrickmps">
        <img src="https://avatars.githubusercontent.com/u/58093259?v=4" width="100px;" alt="Patrick Mota Profile Picture"/><br>
        <sub>
          <b>Patrick Mota</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/robsonsst">
        <img src="https://avatars.githubusercontent.com/u/83371170?v=4" width="100px;" alt="Robson Santos Profile Picture"/><br>
        <sub>
          <b>Robson Santos</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/euyasmin">
        <img src="https://avatars.githubusercontent.com/u/133703149?v=4" width="100px;" alt="Yasmin Miranda Profile Picture"/><br>
        <sub>
          <b>Yasmin Miranda</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

<h2 id="contribute">📫 Contribua</h2>

Contribuições são sempre bem-vindas! Se você deseja ajudar a melhorar o Vaga Certa, siga os passos abaixo:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature ou correção de bug: `git checkout -b feature/nome-da-feature`.
3. Implemente sua solução seguindo os padrões de código do projeto.
4. Faça commits claros e descritivos: `git commit -m "Descrição da mudança"`
5. Envie sua branch: `git push origin -u feature/nome-da-feature`
6. Abra um Pull Request explicando a mudança proposta e, se aplicável, inclua capturas de tela das modificações visuais.

Agradecemos por suas contribuições e por ajudar a melhorar o Vaga Certa!


<h3>Documentações que podem ajudar</h3>

[📝 Como criar um Pull Request](https://www.atlassian.com/br/git/tutorials/making-a-pull-request)

[💾 Padrões de commits](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)