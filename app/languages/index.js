import { result } from 'lodash';
import English from './english.language';
import Indonesia from './indonesia.language';
import { set, storageKeys } from '../utils/storage.util';

const DEFAULT_LANGUAGE = 'en';

const current = {
  id: DEFAULT_LANGUAGE,
};

const languageMap = {
  en: {
    id: 'en', label: 'English', translation: English, value: 'en',
  },
  id: {
    id: 'id', label: 'Indonesia', translation: Indonesia, value: 'id',
  },
};

module.exports = {
  get language() {
    const selectedLangugage = languageMap[result(current, 'id', DEFAULT_LANGUAGE)];
    return selectedLangugage.translation;
  },
  setCurrentLang(languageId) {
    set(storageKeys.LANGUAGE, languageId);
    current.id = languageId;
    return languageId;
  },
  languageMap,
  DEFAULT_LANGUAGE,
};
