import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';

import messages from 'src/i18n';

import {useLangStore} from 'src/stores/lang'

const langStore = useLangStore()

const inst = createI18n({
  locale: langStore.language,
  messages,
});

export default boot(({ app }) => {
  app.use(inst);
  langStore.dayInit();
  // Set i18n instance on app
});

export const i18n = inst.global;

