import { defineStore } from 'pinia';
import dayjs from 'dayjs'
import {LocalStorage} from "quasar";
const localizedFormat = require('dayjs/plugin/localizedFormat')
const updateLocale = require('dayjs/plugin/updateLocale')
const duration = require('dayjs/plugin/duration')
const relativeTime = require('dayjs/plugin/relativeTime')

export const useLangStore = defineStore( 'lang', {
  state: () => ({
    language: LocalStorage.getItem('lang') || navigator.language.split("-")[0] || 'ru',
    locale: '',
  }),
  actions: {
    setLanguage(language: string) {
      this.language = language;
      this.locale = language
      LocalStorage.set('lang', language)
      this.dayInit()
      // location.reload()
    },
    dayInit(){
      require(`dayjs/locale/${this.language}.js`)
      dayjs.locale(this.language)
      dayjs.extend(localizedFormat)
      dayjs.extend(updateLocale)
      dayjs.extend(duration)
      dayjs.extend(relativeTime)
    }
  },
});
