<template>

<div>
    <!-- Form -->
    <el-button type="text" @click="dialogFormVisible = true">添加</el-button>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="addData">
            <el-form-item label="水果名字" >
                <el-input v-model="addData.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="产地" >
                <el-input v-model="addData.address" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="价格" >
                <el-input v-model="addData.price" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false;addFruits()">确 定</el-button>
        </div>
    </el-dialog>
</div>

</template>

<script>
import axios from "axios";
import {nanoid} from "nanoid";

export default {
    name: "addForm",
    props:['localData'],
    data(){
        return {
            dialogFormVisible: false,
            addData:{
                name:'',
                id:'',
                address:'',
                price:''
            }
        }
    },
    methods:{
        //初始化
        initLocalFruits() {
            this.$store.dispatch('getLocalData');
        },
        //增
        addFruits() {
            const {name,price,address} = this.addData
            axios.post('http://localhost:3000/fruits', {
                name:name,
                price:price,
                address:address,
                id: nanoid(),
            }).then(res => {
                console.log('添加成功')
            })
            console.log(this.localData)
            this.initLocalFruits();
        },
        checkId(row){
            console.log("子组件的id是",row.id)
        }
    }
}
</script>

<style scoped>

</style>