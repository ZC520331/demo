import Vue from 'vue'
import App from './App.vue'
// import mavonEditor from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'
// import markdownItMerMaid from '@liradb2000/markdown-it-mermaid'
// import markdownItMerMaid from 'mermaid'


// import markdownItMerMaid from 'markdown-it-mermaid'
// mavonEditor.markdownIt.use(markdownItMerMaid)
// Vue.use(mavonEditor)
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
