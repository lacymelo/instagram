<div align="justify">
  <p align="center">
    <img alt="Logo Omnistack 7 - Rocketseat" src="https://arturkilldragon.files.wordpress.com/2019/06/omnistack-wallpaper-1920x1080.png" width="550px" />
  </p>

  <h1 align="center">
    🤖 Trilha ReactJS: INSTAGRAM
  </h1>

  > Bem-vindo ao repositório do projeto INSTAGRAM, uma recriação do FRONTEND desenvolvido no evento OMNISTACK 7 promovido pela Rocketseat. Esta nova versão aborda a criação de um FRONTEND totalmente em NextJS 14 🚀, com funcionalidades de post e like em 👉 tempo real.
</div>

## :rocket: Os trê pilares no NextJS 14
- [X] Server Components 👉  Para não usar Javascript no lado do cliente.

- [X] Client Components 👉  Enviando somente o javascript necessário para o navegador (cliente).
- [X] Streaming SSR 👉  Ler/escrever dados de forma parcial + Server-Side Rendering

---

## :eyes: Visite nossa api
👉 [API-INSTAGRAM](https://github.com/lacymelo/API-INSTAGRAM)

##  📥 Configurações e instalações
> Estas são todas as bibliotecas utilizadas neste projeto, verifique cada uma com atenção.

✨ Para criar o projeto execute este comando.
```bash
pnpm create next-app@latest instagram
```
🛠️ Para manter um padrão de escrita do código, instale a lib `@rocketseat/eslint-config` da rocketseat.
```bash
pnpm i @rocketseat/eslint-config -D 
```
🛠️ No arquivo `.eslintrc.json` do seu projeto adicione a configuração `@rocketseat/eslint-config/react`, da seguinte forma.
```bash
{
  "extends": [
    "@rocketseat/eslint-config/react",
    "next/core-web-vitals"
  ]
}
```
🛠️ Para instalar o designer system do hambre lojas `@labex-hambre-ui`, instale executando o seguinte comando.
```bash
pnpm i @labex-hambre-ui/react@latest
```
🛠️ No arquivo `tsconfig.json` altere o `moduleResolution`, aplicando a seguinte configuração.
```bash
{
    "moduleResolution": "node",
}
```
🛠️ Para utilizar ícones no projeto, instale a lib `lucide-react`, executando o seguinte comando.
```bash
pnpm i lucide-react
```
🛠️ Para trabalhar com formulário e validação de formulário usaremos as libs `react-hook-form` e `zod`, faça a instalação com o seguinte comando.
```bash
pnpm i react-hook-form @hookform/resolvers zod
```
🛠️ Para trabalhar com variáveis ambientes instale a
biblioteca para gerenciar variáveis ambientes
```bash
pnpm i @t3-oss/env-nextjs
```
🛠️ Para trabalhar com requisições para apis instale a biblioteca axios
```bash
 pnpm i axios
```

# :closed_book: License

Released in 2024 :closed_book: License
Made with love by  Laciene Melo [#lacymelo](https://github.com/lacymelo) 🚀.
This project is under the [MIT license](./LICENSE).
Give a ⭐️ if this project helped you!


