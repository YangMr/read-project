<template>
	<div>
		<span class="iconfont" :class="[name ? 'icon-' + name : '']" :style="{color, fontSize: size + 'rpx' }"></span>
	</div>
	
</template>

<script>
	export default {
		name:"icon",
		props : {
			name : {
				type : String,
				default : ""
			},
			size : {
				type : String,
				default : 24
			},
			color : {
				type : String,
				defalt : "#333"
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
