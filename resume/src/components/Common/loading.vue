<template>
    <div id='load' v-show = 'isShow'>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isShow : true
        }
    },
   mounted(){
        setTimeout(() => {
            console.log(this.isShow)
            this.isShow = false;//页面加载完成
        },500);
    }
}
</script>
<style scoped>
#load {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background: url('../../assets/images/load.gif') 50% 50% no-repeat rgb(249, 249, 249);
}
</style>