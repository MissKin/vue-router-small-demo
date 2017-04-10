<template>
	<h1>我是主页</h1>
	<a v-link='{path:"/home/login"}'>user Login</a>
	<br>
	<a v-link='{path:"/home/reg"}'>user Register</a>
	<div class="border">
		<router-view></router-view>
	</div>
</tempalte>
<!-- scope 局部样式 -->
<style scope>
	.border{border: 1px solid #000}
</style>