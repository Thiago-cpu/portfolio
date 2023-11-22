/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

const withNextIntl = await import("next-intl/plugin").then((plugin) =>
  plugin.default("./src/locales/i18n.ts"),
);

/** @type {import("next").NextConfig} */
const config = withNextIntl({
  images: {
    remotePatterns: [
      {
        hostname: "media.licdn.com",
      },
    ],
  },
  // experimental: {
  //   ppr: true,
  // },
});

export default config;
