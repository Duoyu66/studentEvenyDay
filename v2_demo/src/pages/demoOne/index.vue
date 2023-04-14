<template>
    <div>
<!--        <h1>我是demoOne</h1>-->
<!--        <router-link to="/hello">hello</router-link>-->
<!--        <router-link to="/demoTwo">demoTwo</router-link>-->
        <addForm :localData="localData" @init/>
        <search :localData="localData"/>
        <el-button type="primary" @click="addFruits">添加例子</el-button>
        <el-button type="primary" @click="searchFruits">查找例子</el-button>
        <el-button type="primary" @click="flags=true">查询全部</el-button>
<!--        主-->
        <el-table
            v-if="flags"
                :data="localData"
                style="width: 100%">
            <el-table-column
                    prop="id"
                    label="序列号"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="price"
                    label="价格/每斤(元)">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="产区">
            </el-table-column>
            <el-table-column
                    prop="caozuo"
                    label="操作">
                <template slot-scope="scope">
                    <el-button @click="deleteFruits(scope.row)" type="text" size="small">删除</el-button>
                    <!-- Form -->
                    <el-button type="text" @click="dialogFormVisible = true;checkId(scope.row)">编辑 c</el-button>

                    <el-dialog title="收货地址" :visible.sync="dialogFormVisible" width="800px">
                        <el-form :model="formData" inline>
                            <el-form-item label="水果名字" >
                                <el-input v-model="formData.name" autocomplete="off" ></el-input>
                            </el-form-item>
                            <el-form-item label="价格" >
                                <el-input v-model="formData.price" autocomplete="off" ></el-input>
                            </el-form-item>
                            <el-form-item label="产区" >
                                <el-input v-model="formData.address" autocomplete="off" ></el-input>
                            </el-form-item>
<!--                            <el-form-item label="序列号" >-->
<!--                                <el-input v-model="formData.id" autocomplete="off" ></el-input>-->
<!--                            </el-form-item>-->
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click="dialogFormVisible = false;changeFruits()">确 定</el-button>
                        </div>
                    </el-dialog>
                </template>
            </el-table-column>
        </el-table>
<!--        查询-->
        <el-table
            v-else
            :data="searchData"
            style="width: 100%">
            <el-table-column
                prop="id"
                label="序列号"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="price"
                label="价格/每斤(元)">
            </el-table-column>
            <el-table-column
                prop="address"
                label="产区">
            </el-table-column>
            <el-table-column
                prop="caozuo"
                label="操作">
                <template slot-scope="scope">
                    <el-button @click="deleteFruits(scope.row)" type="text" size="small">删除</el-button>
                    <!-- Form -->
                    <el-button type="text" @click="dialogFormVisible = true;checkId(scope.row)">编辑 c</el-button>

                    <el-dialog title="收货地址" :visible.sync="dialogFormVisible" width="800px">
                        <el-form :model="searchData" inline>
                            <el-form-item label="水果名字" >
                                <el-input v-model="searchData.name" autocomplete="off" ></el-input>
                            </el-form-item>
                            <el-form-item label="价格" >
                                <el-input v-model="searchData.price" autocomplete="off" ></el-input>
                            </el-form-item>
                            <el-form-item label="产区" >
                                <el-input v-model="searchData.address" autocomplete="off" ></el-input>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click="dialogFormVisible = false;changeFruits()">确 定</el-button>
                        </div>
                    </el-dialog>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import {mapState} from "vuex";
import axios from "axios";
import {nanoid} from "nanoid";
import addForm from "@/pages/demoOne/addForm.vue";
import search from "@/pages/demoOne/search.vue";
import {mapMutations} from "vuex";

export default {
    name: "demoOne",
    components:{addForm,search},
    data() {
        return {
            dialogFormVisible: false,
            formData:{
                name:'',
                price:null,
                address:''
            },
            newArr:[],
            idNum:null,
            flag:true
        }
    },
    mounted() {
        this.$store.dispatch('getWeather');
        this.$store.dispatch('getLocalData');
 // this.$store.commit('searchDATA', this.newArr)
        console.log("我是vuex中的searchData",this.searchData)
    },
    computed: {
        ...mapState({
            weatherObj: state => state.weather.weatherObj,
            localData: state => state.localData.localData,
            // searchData:state => state.localData.searchData

        }),
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
    },
    methods: {
        //初始化
        initLocalFruits() {
            this.$store.dispatch('getLocalData');
        },
        //查
        searchFruits() {
            axios.get(` http://localhost:3000/fruits?name=奥拓&&？price=`).then(res => {
               this.searchData =res.data;
                this.flags=false;
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
            this.initLocalFruits()
        },
        //增
        addFruits() {
            axios.post('http://localhost:3000/fruits', {
                name: '奥拓',
                price: 89.234,
                id: nanoid(),
            }).then(res => {
                console.log('添加成功')
            })
            console.log(this.localData)
            this.initLocalFruits();
        },
        //删
        deleteFruits(row) {
            console.log("cc", row.id)
            let rowId = row.id;
            axios.delete(`http://localhost:3000/fruits/${rowId}`).then(res => {
                console.log('删除成功');
                this.initLocalFruits();
            })
        },
        //改
        changeFruits(){
            console.log("已获取的id",this.idNum)
            const {name,address,price} = this.formData;
            axios.patch(`http://localhost:3000/fruits/${this.idNum}`,{
                name:name,
                address:address,
                price:price,
                kk:"牛逼"
            }).then(res=>{
                console.log('修改成功')
                this.initLocalFruits();
            })
            this.formData.name=''
            this.formData.address=''
            this.formData.price=''
            this.formData.id=''
            console.log("hello woirdl")
        },
    //     获取id
        checkId(row){
            console.log("checkid中的row",row)
            this.idNum = row.id;
        }
    },
    watch:{

    }
}
</script>

<style scoped>

</style>