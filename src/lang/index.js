import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en_US'
import es from './es_ES'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'es',
  fallbackLocale: 'en',
  messages: {
    en: {
      lang: en
    },
    es: {
      lang: es
    }
  }
})