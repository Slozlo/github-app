## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Project structure

Project has common react app structure:

### `containers`

Container - it`s smart React Component, which includes one or a few dumb components

### `components`

Component - it`s dumb React Component, that we can reuse in our app.

### `store`

Describes our app`s redux store.

### `types`

Includes data types.

## App Components

### `App`

Used as Layout of our app, and includes store Provider.

### `Header`

Container at the top, with search input inside.

### `ReposList`

Container, that show list of founded repos.

### `RepoItem`

Describes Repo`s information, such as name, forks count, stars count etc.

### `Loader`

Show spinner, when repos list is fetching.
