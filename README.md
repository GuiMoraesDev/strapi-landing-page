# Strapi landing page monorepo

## Projects Readme 📚

- [Client Page](https://github.com/GuiMoraesDev/strapi-landing-page/blob/main/src/apps/client/README.md)
- [Strapi server](https://github.com/GuiMoraesDev/strapi-landing-page/blob/main/src/apps/server/README.md)

## Description of that project 📖

This is a POC project to validate an Landing page been updated by a strapi server

## Requirements 🛑

### Mandatory

For development, you will need some software installed in your environment.

- [NodeJS](https://nodejs.org/en/download/),
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable)
- Docker
  - [Windows](https://docs.docker.com/desktop/windows/install/)
  - [Linux](https://docs.docker.com/desktop/linux/install/)
  - [Mac](https://docs.docker.com/desktop/mac/install/)
- [Docker-compose](https://docs.docker.com/compose/),

### Optional

To improve your experience and enjoy each linter, here are some extensions </br>
<small>For VSCode, if you use another editor, please look at your marketplace</small>

- [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
- [Editorconfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)

## Configuring your Project 🧰

Yarn will install all dependencies into all projects, start and build them

```batch
yarn install
yarn start
yarn build
```

Use docker-compose to download and startup the strapi and postgres images

```batch
docker-compose pull
docker-compose up -d
```

## Project Folders Structure 👷

```code
.
├── .vscode..............................# contains the settings to vscode;
├── src..................................# source apps and shared folders were created here;
│    ├── apps............................# contain all projects files and folders;
│    │   └── [project_folders]
│    └── shared..........................# contain sharable and reusable files/folders;
│        └── assets......................# contain assets files;
│            └── images..................# images files to be used in this project;
└── [...]................................# root files as environment, linters, etc;
```
