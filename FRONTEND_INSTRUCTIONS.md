> _Note: Delete this file before publishing your app!_

# Features of ISMA Front-end

| Feature       | Description                                               |
| ------------- | --------------------------------------------------------- |
| SPA Framework | [Preact](https://preactjs.com/guide/v10/getting-started/) |
| Language      | [TypeScript](https://www.typescriptlang.org/)             |
| Style         | [Material UI](https://material-ui.com/)                   |
| JS Bundler    | [Parcel](https://parceljs.org/)                           |
| Testing       | [Jest](https://jestjs.io/)                                |
| Redux         | [Redux-zero](https://github.com/redux-zero/redux-zero)    |

# Set Backend API

Simply point your [API requests](http://127.0.0.1:8000) at .env file.

# About Project

## Pages & Components

- Sign in page (URL: /#/login )

  > Uses JWT (store the token in localStorage)

  > System always checks if the user has logged in, and redirects to sign in page if not yet.

- Knowledge Base page (URL: /#/ )

  > When User searches from Search panel, basic information of results are fetched from backend.

  > If clicks one word, system fetches full information of that word from backend.

  > You can edit fields in Concept View, and save it to database by clicking "Save" Button.

  - Search Panel
    - Concept Search Tab
    - Advanced Search Dialog
    - Program Search Tab
  - Search Results
  - Chips of Words from Search Results
  - Concept View
    - Synonym Tab
    - Semantic Tab
    - Program Tab
    - Description Tab
    - Definition Tab

- Tasks page (URL: /#/task )
  > User can check/edit his inbox/outbox. And can send new Task to other.
- Administration page (URL: /#/administration)
  > User can edit/add/remove users.

## Theming App

You can define your customized MaterialUI theme on theme.ts.
This is where you define primary color of the application. (Here Green)
And then apply it to application by ThemeProvider in App.tsx.

## Redux & API

In Redux-zero, you only need actions.ts and store.ts and static file connect.tsx.

### Action

Here is where you define actions to alter store and perform communication to backend.
actions.ts is only place you can alter store in react/preact apps.

### Connect

In connect.tsx, you define a static functional component, which will be composed to every components that are going to interact with redux.
By connects.tsx, props of components are linked to actions and store.

### Store

This is the place where you define store.
Initial values are set here.

### Services

In services.ts, all rest apis are defined.
You include them in actions.ts, and fetch/save data from/to backend by calling them.

## Constants

Every Apps have Constant values.
They are defined in constants.ts file.
And components import them to use.

## Types

Types are like Classes in PHP.

## Utils

Utils are functions that perform specific tasks.

### request.ts

It provides more advanced Axios interface to the app.
So it is used in services.ts.

### parse-storage-get.ts

It is used to get last logged in credential information.

### redux-getters.ts

Here are some functions that returns more organized data from store.
