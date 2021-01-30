<template>
  <div class="login-container">
    <kinesis-container>
      <kinesis-element :parallaxStrength="4" :type="parallax">
        <div class="login-box">
          <div class="login-header">
            <img src="../../assets/images/logo-a.png" class="login-logo" alt="">
            <p class='login-title'>网易云音乐</p>
          </div>
          <div class="login-form">
            <el-form :model="loginForm" :rules="rules" ref="loginForm">
              <el-form-item prop="phone" class="login-form-item">
                <el-input
                  type='text'
                  clearable
                  v-model="loginForm.phone"
                  placeholder='请输入手机号'>
                  <i
                    style='color:#5dd5c8'
                    class="iconfont nicephone2"
                    slot="prefix">
                  </i>
                  </el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  type='password'
                  clearable
                  v-model="loginForm.password"
                  placeholder='请输入密码'>
                   <i
                    style='color: #5dd5c8'
                    class="iconfont nicemima"
                    slot="prefix">
                  </i>
                </el-input>
              </el-form-item>
              <div class="login-btn-wrap">
                <el-button
                class='login-btn'
                @click='onLogin'>登录</el-button>
              </div>
            </el-form>
          </div>
        </div>
      </kinesis-element>
    </kinesis-container>
  </div>
</template>

<script type="text/ecmascript-6">
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
export default {
  name: '',
  data () {
    return {
      loginForm: {
        phone: '',
        password: ''
      },
      rules: {
        phone: [{ required: true, message: '手机号都没有！', trigger: 'blur' }],
        password: [{ required: true, message: '密码呢！', trigger: 'blur' }]
      },
      parallax: 'depth'
    }
  },
  props: {

  },
  methods: {
    onLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          console.log('校验成功')
        }
      })
    }
  },
  computed: {

  },
  components: {
    KinesisContainer,
    KinesisElement
  },
  created () {
  }
}
</script>

<style scoped lang='less'>
.login-container{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background:#5dd5c8 url('../../assets/images/newbg1.png') no-repeat;
  background-size:fit;
  .login-box{
    width: 350px;
    height: 486px;
    max-width: 350px;
    background: #fff;
    background-image: url('../../assets/images/logbg.jpg');
    border-radius:8px;
    box-shadow: 1px 2px 15px rgb(0,0,0,.3);
    background-position:bottom;
    text-align: center;
    background-size: cover;
    padding:40px 27px;
    box-sizing: border-box;
    .login-header{
      color:#ccc;
      margin-bottom: 30px;
      .login-logo{
        width: 50px;
        height: 50px;
      }
      .login-title{
        position: relative;
        top:-15px;
        color: #5dd5c8;
      }
    }
    .login-form{
      .login-form-item{
        padding:5px 0;
      }
    }
    .login-btn-wrap{
      margin-top:30px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      line-height: 1.5;
      border-radius: 3px;
      overflow: hidden;
      .login-btn{
        color: #fff;
        text-transform: uppercase;
        width:100%;
        height: 42px;
        background: #5dd5c8;
        border:0;
        border-radius: 3px;
      }

    }
  }
}
</style>
