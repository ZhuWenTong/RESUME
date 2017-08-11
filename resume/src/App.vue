<template>
	<div id="app">
		<music></music>
		<tip></tip>
		<load></load>
		<router-view></router-view>
	</div>
</template>

<script>
import music from './components/Common/music.vue';
import tip from './components/Common/tip.vue';
import load from './components/Common/loading.vue';
export default {
	components:{
		music,
		tip,
		load
	}
}
</script>

<style>
	html,body{
		height:100%;background:url('./assets/images/bg.png') no-repeat;background-size: 100% 100%;
	}
	#app{
		height:100%;
	}
</style>
