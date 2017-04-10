<template>
	{{$route.params | json}}
	<br>
	{{$route.path }}
	<br>
	{{$route.query |json}}
</template>