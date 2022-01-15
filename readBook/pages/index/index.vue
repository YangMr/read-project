<template>
	<div class="container">
		<div class="search">
			<i-search mode="no-search" @clickinput="handleClickInput" shape="circle" placeholder="请输入要搜索的结果" text="搜索"></i-search>
		</div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},

		onLoad() {
			
		},
		methods: {
			handleClickInput : function(event){
				console.log("!23")
				console.log(event)
			}
		}
	}
</script>

<style>
	.search{
		padding: 0 20rpx;
		width: 100%;
		box-sizing: border-box;
	}
</style>
