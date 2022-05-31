# Client Page

<Img src="https://github.com/GuiMoraesDev/strapi-landing-page/blob/main/src/shared/assets/images/nextjs-logo.png" alt="Next.js logo" height="100px" align="right" />

[![next.js](https://img.shields.io/badge/next.js-12.0.10-000000?logo=Next.js)](https://reactjs.org/)
[![typescript](https://img.shields.io/badge/typescript-%5E4.5.5-blue?logo=Typescript)](https://www.typescriptlang.org/)
[![styled-components](https://img.shields.io/badge/styled--components-%5E5.3.3-ff69b4?logo=styled-components)](https://styled-components.com/)

</br>

<small>All badges are links to each doc</small>

## Test Status 🐛

[![codecov](https://codecov.io/gh/GuiMoraesDev/strapi-landing-page/branch/main/graph/badge.svg?token=0XJwssO6ip)](https://codecov.io/gh/GuiMoraesDev/strapi-landing-page)
[![Tests](https://github.com/GuiMoraesDev/strapi-landing-page/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/GuiMoraesDev/strapi-landing-page/actions/workflows/test.yml)

## Description of that project 📖

This project is about the client page that is the base to render all contents created on Strapi server

## Project Folders Structure 👷

```code
.
├── .github..........................# contains project workflows to run GithubActions;
├── .husky...........................# contains husky hooks;
├── .jest............................# contains jest setup files;
├── .storybook.......................# contains storybook setup files;
├── .vscode..........................# contains vscode settings files;
├── generators.......................# contains static files to generate reusable snipets of code;
│    └── templates...................# this folder it's used to group by all template files;
├── public...........................# contains files used by Next.js as template;
├── src..............................# projects folders were created here;
│    ├── components..................# contains reusable components;
│    │   └── [components_folders]
│    ├── pages.......................# contains pages files used to routing;
│    └── styles......................# global styles as reset css or themes;
└── [...]............................# root files as environment, linters, etc;
```
