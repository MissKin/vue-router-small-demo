import Vue from 'vue'
import App from './App.vue'
import Aaa from './Aaa.vue'
import VueRouter from 'vue-router'
import routerConfig from './router.config.js'
Vue.use(VueRouter)


/*创建路由， 配置路由*/
const router = new VueRouter();

router.map(routerConfig);
/*根路径，跳转到home*/
router.redirect({
	'/':'/home'
})
router.start(Aaa,'#box');

