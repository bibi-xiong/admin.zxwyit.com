<template>
  <div class="about">
    <div class="top">
      <div class="middle">
          <div class="middle-img">
              <img src="../assets/img/favicon.jpg" >
          </div>
          
          <div class="middle-middle">
              <h3>智学无忧后台系统</h3>
          </div>
            <p class="middle-tow">做最有态度、责任、良心的IT教育</p>
      </div>

      <div class="middles"></div>
      <div class="bottom">
        <div class="bottom-top">
          <el-input placeholder="请输入账号" prefix-icon="el-icon-s-custom" v-model="input1" class="input1"></el-input>
          <el-input placeholder="请输入密码"  prefix-icon="el-icon-lock" v-model="input2" class="input2 thur"></el-input>
          <el-checkbox class="bottoma thur" v-model="checked">记住密码</el-checkbox><br/>
          <el-button class="denglu thur" type="success" @click="enter">登录</el-button>
       </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
   data() {
      return {
        input1: '',
        input2: '',
        checked: true
      }
    },
    methods:{
      enter(){
        // console.log("1111")
         axios
        .post('https://www.runoob.com/try/ajax/demo_axios_post.php')
        .then(response => (this.info = response))
        .catch(function (error) { // 请求失败处理
          console.log(error);
        });

      }
    }
}
</script>

<style lang="less" scoped>
.about{
  width: 100%;
  height: 600px;
  background:url("../assets/img/background.jpg");
  background-size:100% 100%;
  display: flex;
}
.top{
  width:500px;
  height:300px;
  background-color: #DEEFF7;
  position: absolute;
  display: flex;
  top:20%;
  left:20%;
}
.middles{
  width: 2px;
  height: 100%;
  background: linear-gradient(#fff,#189E8C,#fff) ;
}

.middle{
  width:50%;
  height:300px;
  display: flex;
}
.middle-img img{
  border-radius:50%;
  width:20%;
  height:40%;
  position: absolute;
  top:10%;
  left:13%;
}
.middle-middle{
  color:#189E8C;
  position: absolute;
  top:55%;
  left:10%;
  font-weight: 700;
}
.middle-tow{
  position: absolute;
  font-size: .6rem;
  top:70%;
  left:8%;
  color: #888888
}
.bottom{
  width:50%;
  height:100%;
  display: flex;
//  background-color: aqua;
}
.bottom-top{
  width:85%;
  height:100%;
  position: relative;
  left: 15px;
  top:40px;
}
.thur{
  margin-top: 20px;
}
.denglu{
  width:100%;
}
@media(max-width:800px ){
            .middle{display: none}
            .top{width:250px;}
            .el-button{width:200px;}
            .bottom-top{width:200px;}
        }
</style>

