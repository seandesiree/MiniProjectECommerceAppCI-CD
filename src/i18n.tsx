
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to our Store",
          add_to_cart: "Add to Cart",
        }
      },
      fr: {
        translation: {
          welcome: "Bienvenue dans notre magasin",
          add_to_cart: "Ajouter au panier",
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;