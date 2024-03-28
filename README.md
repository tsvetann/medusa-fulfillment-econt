<p align="center">
  <a href="https://www.medusajs.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/59018053/229103275-b5e482bb-4601-46e6-8142-244f531cebdb.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg">
    <img alt="Medusa logo" src="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg">
    </picture>
  </a>
</p>
<h1 align="center">
  Medusa Fulfillment Econt
</h1>

<h4 align="center">
  <a href="https://docs.medusajs.com">Documentation</a> |
  <a href="https://www.medusajs.com">Website</a>
</h4>

<p align="center">
  Fulfillment plugin for econt.bg
</p>
<p align="center">
  <a href="https://github.com/medusajs/medusa/blob/master/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" alt="PRs welcome!" />
  </a>
  <a href="https://discord.gg/xpCwq3Kfn8">
    <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" alt="Discord Chat" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=tsnnik">
    <img src="https://img.shields.io/twitter/follow/medusajs.svg?label=Follow%20@tsnnik" alt="Follow @tsnnik" />
  </a>
</p>

## Compatibility

This plugin should be compatible with versions >= 1.8.0 of `@medusajs/medusa`. 

## Features

- Query information about cities and offices covered by Econt. Create shipping labels

## How to Install

1\. Run the following command in the directory of the Medusa backend:

```bash
npm install medusa-fulfillment-econt
```

or

```bash
yarn add medusa-fulfillment-econt
```

2\. Set the following environment variables in `.env`:

```bash
ECONT_USERNAME=<YOUR_ECONT_USERNAME>
ECONT_PASSWORD=<ECONT_PASSWORD>
ECONT_SERVICE_URL=<ECONT_SERVICE_URL>
```

3\. In `medusa-config.js` add the following at the end of the `plugins` array:

```js
const plugins = [
  // ...
  {
    resolve: "medusa-fulfillment-econt",
    options: {
      username: process.env.ECONT_USERNAME,
      password: process.env.ECONT_PASSWORD,
      service_url: process.env.ECONT_SERVICE_URL || "https://demo.econt.com/ee/services",
    }
  },
]
```

4\. Routes

`BACKEND_URL/store/econt/offices/name/:name` - returns all offices for a city with `:name`
`BACKEND_URL/store/econt/cities/postcode/:postcode` - returns all cities with a postcode (or partial postcode) `:postcode`

Check out all [available Medusa plugins](https://medusajs.com/plugins/).


Join our [Discord server](https://discord.com/invite/medusajs) to meet other community members.

## Other channels

- [GitHub Issues](https://github.com/tsvetann/medusa-fulfillment-econt/issues)
- [Twitter](https://twitter.com/tsnnik)
- [Medusa Blog](https://medusajs.com/blog/)
