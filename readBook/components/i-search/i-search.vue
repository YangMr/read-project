<template>
	<div class="container">
		<!-- 可搜索的输入框 -->
		<div v-if="mode === 'search'" class="search">
			可搜索的输入框
			<!-- <input type="text" /> -->
		</div>
		<!-- 不可以搜索的输入框 -->
		<div v-if="mode === 'no-search'" class="no-search" @click="handleClickInput">
			<div class="no-input" :class="[border ? 'border' : '', shape === 'circle' ? 'circle' : '']">{{placeholder}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"i-search",
		props : {
			icon : String,
			mode : {
				type : String,
				default : 'no-search'
			},
			placeholder : String,
			border : {
				type : Boolean,
				default : true
			},
			align : {
				type : String,
				default : "left"
			},
			shape : {
				type : String,
				default : 'square'
			},
			text : {
				type : String,
				default : ""
			}
		},
		data() {
			return {
				inputValue : ""
			};
		},
		methods: {
			handleSearchInput : function(){
				this.$emit("searchinput",{inputValue : this.inputValue})
			},
			handleClickInput : function(){
				this.$emit("clickinput")
			}
		}
	}
</script>

<style scoped>
	.container{
		
	}
	.no-search{
		display: flex;
		align-items: center;
	}
	.no-input{
		flex : 1;
		background: #ccc;
		box-sizing: border-box;
		padding:0 20rpx;
		height: 70rpx;
		line-height: 70rpx;
		color : #333;
		font-size: 28rpx;
	}
	.border{
		border:1px solid #ccc;
		background: #fff;
	}
	.text{
		margin: 0 10rpx;
	}
	.circle{
		border-radius: 40rpx;
	}
</style>
