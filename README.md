# saddle-frontend

An open source Design System / React Component Library for Saddle projects

## Usage
#### To Install the Package in Another Project:
1. Add a `.npmrc` to your project with the following:
```
@saddle-finance:registry=https://npm.pkg.github.com
```
2. Generate a [Github Personal Access Token](https://github.com/settings/token) with the `read:packages` permission enabled
3. Create a `.npmrc` in your home directory with the following:
```
//npm.pkg.github.com/:_authToken=<PERSONAL_ACCESS_TOKEN_HERE>
```
4. Add project to your package.json file as a dependency:
```
"@saddle-finance/saddle-design-system": "<RELEASE_TAG_HERE",
```

## Development
#### Installation
```bash
$ npm install
```

#### Run the Component Library
To interact with the component library locally:
```bash
$ npm run storybook
```
