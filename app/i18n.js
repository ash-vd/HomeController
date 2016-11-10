/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';

import enLocaleData from 'react-intl/locale-data/en';
import nlLocaleData from 'react-intl/locale-data/nl';

export const appLocales = [
  'en',
  'nl',
];

import enTranslationMessages from './translations/en.json';
import nlTranslationMessages from './translations/nl.json';

addLocaleData(enLocaleData);
addLocaleData(nlLocaleData);
addLocaleData(nlLocaleData);

const formatTranslationMessages = (messages) => {
  const formattedMessages = {};
  for (const message of messages) {
    formattedMessages[message.id] = message.message || message.defaultMessage;
  }

  return formattedMessages;
};

export const translationMessages = {
  en: formatTranslationMessages(enTranslationMessages),
  nl: formatTranslationMessages(nlTranslationMessages),
  nl: formatTranslationMessages(nlTranslationMessages),
};
