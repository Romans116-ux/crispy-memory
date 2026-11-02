// Extends app.json. WEB_BASE_URL is set only by `npm run export:pages`, so the
// web preview can live under a subpath while native builds are unaffected.
module.exports = ({ config }) => {
  if (!process.env.WEB_BASE_URL) return config;
  return {
    ...config,
    experiments: { ...config.experiments, baseUrl: process.env.WEB_BASE_URL },
  };
};
