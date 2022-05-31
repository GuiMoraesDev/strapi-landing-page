# Strapi server

<Img src="https://github.com/GuiMoraesDev/strapi-landing-page/blob/main/src/shared/assets/images/strapi-logo.png" alt="Strapi logo" height="100px" align="right" />

[![strapi](<https://img.shields.io/badge/strapi-3.6.8-rgb(0%2C%20126%2C%20255)?logo=Strapi>)](https://strapi.io/)

</br>

<small>All badges are links to each doc</small>

## Description of that project 📖

This project is about the client page that is the base to render all contents created on Strapi server

## Project Folders Structure 👷

```code
.
├── app..............................# projects folders were created here;
│    ├── api.........................# contains the api files setted by strapi UI;
│    ├── config......................# contains the strapi configs files;
│    │   ├── functions...............# contains functions files as cron or bootstrap functions;
│    │   │   └── responses...........# contains files to set the default responses by status code;
│    │   └── [...]...................# contains the default config files;
│    ├── extensions..................# contains the extensions/plugins used by strapi;
│    │   └── [extentions-folders]
│    └── public......................# default exported public folder;
│        └── uploads.................# by default uploads files are set in this folder;
└── [...]............................# root files as environment, docker-compose file, etc;
```
