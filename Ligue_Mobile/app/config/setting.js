/**
 * Basic Setting Variables Define
 */
export const BaseSetting = {
  name: 'ligueDigitale',
  displayName: 'ligueDigitale',
  appVersion: '1.0',
  defaultLanguage: 'en',
  languageSupport: ['en', 'fr', 'es'],

  resourcesLanguage: {
    en: {
      translation: require('../lang/en.json'),
    },
    fr: {
      translation: require('../lang/fr.json'),
    },
    es: {
      translation: require('../lang/es.json'),
    },
  },
};
