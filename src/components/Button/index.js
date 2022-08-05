import addButton from './add'
import searchButton from './search';
import secButton from './secondary'

export default {
  install(Vue) {
    Vue.component("add-button", addButton);
    Vue.component("search-button", searchButton);
    Vue.component("sec-button", secButton);
  },
};