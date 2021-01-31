<template>
  <div class="login-container">
    <kinesis-container>
      <kinesis-element :parallaxStrength="4" :type="parallax">
        <div class="login-box">
          <div class="login-header">
            <img
              src="../../assets/images/logo-a.png"
              class="login-logo"
              alt=""
            />
            <p class="login-title">网易云音乐</p>
          </div>
          <div class="login-form">
            <el-form :model="loginForm" :rules="rules" ref="loginForm">
              <el-form-item prop="phone" class="login-form-item">
                <el-input
                  type="text"
                  clearable
                  v-model="loginForm.phone"
                  placeholder="请输入手机号"
                >
                  <i
                    style="color: #5dd5c8"
                    class="iconfont nicephone2"
                    slot="prefix"
                  >
                  </i>
                </el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  type="password"
                  clearable
                  v-model="loginForm.password"
                  placeholder="请输入密码"
                >
                  <i
                    style="color: #5dd5c8"
                    class="iconfont nicemima"
                    slot="prefix"
                  >
                  </i>
                </el-input>
              </el-form-item>
              <div class="login-btn-wrap">
                <el-button :loading='loginLoading' class="login-btn" @click="onLogin">登录</el-button>
              </div>
            </el-form>
          </div>
        </div>
      </kinesis-element>
    </kinesis-container>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState, mapMutations } from 'vuex'
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
import { login, getUserInfo } from '@/api/user.js'
export default {
  name: '',
  data () {
    return {
      loginForm: {
        phone: '',
        password: ''
      },
      rules: {
        phone: [
          { required: true, message: '手机号都没有！', trigger: 'blur' },
          { pattern: /^1[3|4|5|7|8][0-9]{9}$/, message: '手机号不正确哦！', trigger: 'blur' }
        ],
        password: [{ required: true, message: '密码呢！', trigger: 'blur' }]
      },
      loginLoading: false,
      parallax: 'depth'
    }
  },
  props: {

  },
  methods: {
    ...mapMutations(['setToken', 'setUserInfo']),
    onLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loginLoading = true
          const { phone, password } = this.loginForm
          login(phone, password)
            .then(res => {
              console.log(res)
              if (res.code === 200) {
                // this.$store.commit('setToken', res.token)
                this.setToken(res.token)
                this.onGetUserInfo(res.account.id)
              } else {
                this.$message.error(res.msg)
              }
            })
            .catch(() => {
              this.loginLoading = false
              this.$message.error('似乎出了什么问题啊，啧啧啧!!!')
            })
        }
      })
    },
    async onGetUserInfo (uid) {
      try {
        const res = await getUserInfo(uid)
        if (res.code === 200) {
          const userInfo = {
            level: res.level,
            listenSongs: res.listenSongs,
            createTime: res.createTime,
            createDays: res.createDays,
            profile: res.profile,
            ...res.profile
          }
          // this.$store.commit('setUserInfo', userInfo)
          this.setUserInfo(userInfo)
          this.$message({
            message: '登录成功',
            type: 'success'
          })
          setTimeout(() => {
            // this.$router.push({ path: '/' })
          }, 2000)
        }
      } catch (err) {
        console.log(err)
      }
      this.loginLoading = false
    }
  },
  computed: {
    ...mapState(['userData'])
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
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #5dd5c8 url('../../assets/images/newbg1.png') bottom no-repeat;
  background-size: fit;
  .login-box {
    width: 350px;
    height: 486px;
    max-width: 350px;
    background: #fff;
    background-image: url('../../assets/images/logbg.jpg');
    border-radius: 8px;
    box-shadow: 1px 2px 15px rgb(0, 0, 0, 0.3);
    background-position: bottom;
    text-align: center;
    background-size: cover;
    padding: 40px 27px;
    box-sizing: border-box;
    .login-header {
      color: #ccc;
      margin-bottom: 30px;
      .login-logo {
        width: 50px;
        height: 50px;
      }
      .login-title {
        position: relative;
        top: -15px;
        color: #5dd5c8;
      }
    }
    .login-form {
      .login-form-item {
        padding: 5px 0;
      }
    }
    .login-btn-wrap {
      margin-top: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      line-height: 1.5;
      border-radius: 3px;
      overflow: hidden;
      .login-btn {
        color: #fff;
        text-transform: uppercase;
        width: 100%;
        height: 42px;
        background: #5dd5c8;
        border: 0;
        border-radius: 3px;
      }
    }
  }
}
</style>
