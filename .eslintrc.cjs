module.exports = {
  extends: ['standard', 'plugin:astro/recommended'],
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      rules: {
        'no-tabs': 0
      }
    }
  ]
}
