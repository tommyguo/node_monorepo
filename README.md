## Intro
This is a monorepo structure for TypeScript and Jest, with nice dev add-ons such as ESLint, Prettier, absolute import paths, sorted imports, and nvm.

This monorepo structure allows you to share code between your packages. A package can be used as a service, a collection of services, or a lib (code for other services to use).

### How you might use this in the real world
You have a `lib` package that contains core code such as database models and import functions. You have a `webapp` package that contains just your front-end and server code. It interacts with the db so it imports modules from the `lib` package. You have a `scripts` package that contains some scripts that you run on your database. It also imports modules from the `lib` package.

## Installation:
From root:
- `npm run install-all` to install dependencies
- `npm run build-all` to compile code in all packages
- `npm run test-all` to test all packages
- `npm run lint-all` to run eslint on all packages

You can also cd into each package and run scripts on individual packages.

## Recommended VSCode extensions
- ESLint
- Jest Runner
- Prettier

## Docker
To build a Docker image for a package, add a Dockerfile to the package. Build the Dockerfile from the root of the repo. 

You typically need to run `npm install` on all packages that your package imports, including the package itself, and then run `npm run build` on the package.