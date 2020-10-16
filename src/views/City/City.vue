<template>
    <div>
        <div class="header">
                <i style="font-size: 19px; font-style:normal" @click="goba">X</i>
            <div class="title">当前城市 - </div>
        </div>
        <div class="search-city-input">
            <div class="input-wrap">
                <van-icon name="search" class="search-icon" />
                <input
                    type="text"
                    placeholder="输入城市名或拼音"
                    class="search-input"
                />
            </div>
        </div>
        <van-index-bar :index-list="indexList" highlight-color="#ff0000">
            <template v-for="item in dataList">
                <van-index-anchor :index="item.index" :key="item.index" style="background:#eee"></van-index-anchor>
                <van-cell @click="chooseCity(sub.name)" v-for="(sub,key) in item.data" :title="sub.name" :key="key" />
            </template>
        </van-index-bar>
    </div>
</template>

<script>
import {cityListData} from '@/api/api' 
import Vue from 'vue';
import {IndexBar, IndexAnchor, Cell} from 'vant';
import "vant/lib/index.css"
// import {mapMutations} from 'vuex'
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);
export default {
    data() {
        return {
            dataList:[],
            indexList:[],
            address:'',
        }
    },
    
    created(){
        this.eventBus.$emit('footernav',false)
    },
    beforeDestroy(){
        this.eventBus.$emit('footernav',true)
    },
    async mounted() {
        let ret = await cityListData()        
        this.dataList = ret[0]
        this.indexList = ret[1]
    },
     methods: {
        // 获取选择的城市名称
        chooseCity: function(city){
            console.log(city)
            this.$router.go(-1)
            // 将数据写入vuex中
            this.$store.commit('setCity',city)
        },
        goba:function(){
            this.$router.go(-1)
        }
        
    },
}
</script>

<style lang="scss" scoped>
    .header{
        display: flex;
        padding: 0 10px;
        height: 50px;
        align-items: center;
        .title{
            width: 100%;
            text-align: center;
        }
    }
        .search-city-input {
        z-index: 2000;
        width: 100vw;
        padding: 9.5px 15px;
        background-color: #f4f4f4;
        position: fixed;
        top: 44px;
        height: 30px;

        ::placeholder {
            font-size: 11px;
            color: #bdc0c5;
        }

        .input-wrap {
            background-color: #fff;
            position: relative;
            display: inline-block;
            border-radius: 3px;
            width: 93%;
            height: 30px;

            .search-icon {
                position: absolute;
                left: 7px;
                top: 0;
                line-height: 30px;
                font-size: 16px;
                color: #797d82;
            }
            .search-input {
                position: absolute;
                left: 33.5px;
                top: 0;
                height: 30px;
                width: calc(100% - 65px);
                border: 0;
            }
        }
    }
</style>