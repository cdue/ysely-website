# Ysely Website

This project contains the source code of Ysely company's website.

It is using the following technical stack:
- [Next.js](https://nextjs.org) - Open source
- [Tailwind CSS](https://tailwindcss.com) - Open source
- [Headless UI](https://headlessui.dev) - Open source
- [Tailwind UI](https://tailwindui.com) with Salient template as inspiration - **Commercial license**: so if you want to use this project as a base for your own project, you must purchase your own license. See [TAILWIND-UI-LICENSE](TAILWIND-UI-LICENSE.md) for more information.

## Getting started

- First install the npm dependencies:

```bash
npm i
```

- Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Contributing

Every contribution is welcome 🙏

You may want to fix a typo, an issue, or add a new Feature, so in this case, please follow the [Contribution guide](#CONTRIBUTING.md).

## License

See the provided [License](LICENSE.md) file.

## Troubleshooting

### VSCode

If you encounter such message in you `.tsx` files: 
> Cannot use JSX unless the '--jsx' flag is provided

You may need to tell VSCode to use the Workspace provided Typescript version rather than its own Typescript version:
1. Go to the command palette CTRL+Shift+P (Or ⌘+Shift+P on Mac).
2. Choose "TypeScript: Select a TypeScript Version...".
3. Choose "Use workspace Version".

