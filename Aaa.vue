<template>
	<div id='box'>
		<h1>这是 aaa！{{mydata}}</h1>
		<menu></menu>
		<hr>
		<ul>
			<li><a v-link="{path:'/home'}">主页</li>
			<li><a v-link="{path:'/news'}">新闻</li>
		</ul>
		<router-view></router-view>
	</div>
</template>
<script>
import Menu from './components/Menu.vue'
	export default{
		data(){
			return{
				mydata:'aurora',
				pdata:'这是父数据！'
			}	
		},
		components:{
			'menu':Menu
		}
	}
</script>
<style>
	.v-link-active{font-size: 20px;}
</style>