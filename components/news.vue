<template>
	<h1>我是新闻页</h1>
	<ul>
		<li><a v-link='{path:"/news/detail/001"}'>新闻一一一一一一一</li>
		<li><a v-link='{path:"/news/detail/002"}'>新闻二二二二二二二</li>
	</ul>
	<div class="border">
		<router-view></router-view>
	</div>
</template>
<style type="text/css" scope>
	.border{border:1px solid #ff0000;}
</style>