# letsgo

svelte app to show next departure according to vasttrafik API (https://developer.vasttrafik.se/)

## Developing

Install dependencies with `npm install`

Add vasttrafik API token to `.env`

```
API_AUTHORIZATION_HEADER=<auth-key>
```

Load it with `npm run check`

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
