import Translator from './translator';

const LANGS = process.env.TRANSLATE_TO.split(",");

Translator.updateAccess();

function maybeTranslate(text) {

  return ({ lang_from, lang_to }) => {

    return new Promise((resolve, reject) => {

      if (lang_to[0]) {

        Translator.requestAPICall(() => {

          Translator.translate({ fromLang: lang_from, toLang: lang_to[0] }, text)
            .then(resolve)
            .catch(reject);
        });
      } else {
        reject(text);
      }
    });
  };
}

export default function maybeTranslateToEng(text) {

  return new Promise((resolve, reject) => {

    Translator.requestAPICall(() => {

      Translator.isLang(LANGS, text)
        .then(maybeTranslate(text))
        .then(resolve)
        .catch(reject);
    });
  });
}
