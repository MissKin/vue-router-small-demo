/*引入组件*/
import Home from './components/home.vue'
import News from './components/news.vue'
/*引入登录和注册的组件*/
import Login from './components/login.vue'
import Reg from './components/reg.vue'
import Detail from './components/detail.vue'

//专门配置的路由
export default{
	'/home':{
		component:Home,
		subRoutes:{
			'/login':{
				component:Login
			},
			'/reg':{
				component:Reg
			}
		}
	},
	'/news':{
		component:News,
		subRoutes:{
			'/detail/:newId':{
				component:Detail
			}
		}
	}
}