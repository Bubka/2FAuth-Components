# 2FAuth-Components

A vue.js components library to build the 2FAuth web app & web extension.

> 2FAuth is a web app for managing your Two-Factor Authentication (2FA) accounts and generating their security codes.

🔗 [2FAuth repository](https://github.com/Bubka/2FAuth)  
🔗 [2FAuth docs](https://docs.2fauth.app/)

## Purpose

The sole purpose of this library is to share common components between all clients of the 2FAuth project. Although it could probably be used in other projects, it was not designed for, and it never will be.

## Workspace content

### Directories

| Name          | Content       |
| ------------- | ------------- |
| `histoire` | Components are documented using [Histoire](https://histoire.dev/). This directory contains all necessary configuration files and assets to build or preview the Histoire pages. |
| `packages` | Source code of all vue sfc components which compose the library, as well as an Histoire file for each of them. |
| `playground` | Contains all necessary configuration files and assets to build or preview a test playground if you need to work with a component in a specific way. |

## Development

### Requirements

- [NodeJS](https://nodejs.com) (v22 min.)
- [PNPM](https://pnpm.io/)
- [Crowdin CLI](https://crowdin.github.io/crowdin-cli/)

### Using the lib in other 2FAuth repositories

For now the library is not published as public packages. It is not possible to install it like any other js dependencies by adding it to a `package.json` file.

If you need to work on the [2FAuth repository](https://github.com/Bubka/2FAuth) or the [2FAuth-WebExtension repository](https://github.com/Bubka/2FAuth-WebExtension), clone the library repository in the same directory as the 2FAuth ones and use the npm `link` command.

You should get this directory structure:

```text
|-- Repositories
|   |-- 2FAuth
|   |-- 2FAuth-WebExtension
|   |-- 2FAuth-Components
```

From the 2FAuth or 2FAuth-WebExtension local directory, run the following command :

```shell
npm link ../2FAuth-Components/packages/ui ../2FAuth-Components/packages/formcontrols ../2FAuth-Components/packages/styles ../2FAuth-Components/packages/stores
```

See [pnpm link usage](https://serko.dev/post/pnpm-link-usage#directory-link)

### Working with translations

The components are localized using the [vue-i18n](https://vue-i18n.intlify.dev/) plugin. Translations are done and managed with the [Crowdin](https://crowdin.com/) SAAS.

In order for the components to be localised on the Histoire pages or the playground, you have to fetch the language files from Crowdin and store them in the `\resources\lang\` folder, alongside the `packages` and `playground` folders.

This can be acheived using the [Crowdin CLI](https://crowdin.github.io/crowdin-cli/) using the following command:

```shell
# fetch only the source file (en.json)
crowdin download sources

# fetch all translation files (*.json)
crowdin download translations
```

> [!IMPORTANT]
> The `en.json` source file fetched by the Crowdin CLI can be modified locally but it should NEVER BE UPLOADED to crowdin for an update from this repository.  
> If you need any additions or changes to the source language definition, please open a pull request to update the `en.json` file tracked in the [2FAuth repository](https://github.com/Bubka/2FAuth/tree/master/resources/lang)

## License

[AGPL-3.0](https://github.com/Bubka/2FAuth-WebExtension?tab=AGPL-3.0-1-ov-file#readme)
