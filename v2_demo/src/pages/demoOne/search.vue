<template>
<div>
    <!-- Form -->

    <el-button type="text" @click="dialogFormVisible = true">按内容查询</el-button>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="searchMessage">
            <el-form-item label="水果名字" >
                <el-input v-model="searchMessage.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="价格" >
                <el-input v-model="searchMessage.price" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false;searchFruits()">确 定</el-button>
        </div>
    </el-dialog>
</div>
</template>

<script>
import axios from "axios";

export default {
    name: "search",
    props:['localData'],
    data(){
        return {
            dialogFormVisible:false,
            searchMessage:{
                name:'',
                price:''
            }
        }
    },
    methods:{
        //初始化
        initLocalFruits() {
            this.$store.dispatch('getLocalData');
        },
        //查
        searchFruits() {
            axios.get(` http://localhost:3000/fruits?name=${this.searchMessage.name}||price=${this.searchMessage.price}?`).then(res => {
               this.searchData =res.data;
                this.flags=false;
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
            this.initLocalFruits()
        },
    },
    computed:{
        searchData:{
            get(){
                return this.$store.state.localData.searchData
            },
            set(val){
                this.$store.state.localData.searchData = val
            }
        },
        flags:{
            get(){
                return this.$store.state.localData.flags
            },
            set(val){
                this.$store.state.localData.flags = val
            }
        }
    }
}
</script>

<style scoped>

</style>