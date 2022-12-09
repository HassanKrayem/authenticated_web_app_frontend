<template>
  <div class="screen-1" style="height: 500px; width: 320px; margin-bottom: 100px">
    <div class="logo-container">
      <img src="@/assets/logo.svg" class="logo-svg"><br>
      <div style="margin-top: 20px;">Devegram</div>
    </div>

    <div class="email" style="margin-top: 0px">
      <label for="email">Username</label>
      <div class="sec-2">
        <input type="text" placeholder="please type your username here..." v-model="identity" autofocus/>
      </div>
    </div>
    <div class="password">
      <label for="password">Password</label>
      <div class="sec-2">
        <input class="pas" id="accessCodeInput" type="password" name="password" placeholder="please type your password here..." v-model="passPhrase"/>
      </div>
    </div>
    <button class="login" @click="authenticate">Login</button>
    <!--<div class="footer"><span>Sign up</span><span>Forgot Password?</span></div>-->
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
export default {
  data() {
    return {
      halfOpacity: false,
      identity: null,
      passPhrase: null
    }
  },
  mounted () {
    let i = document.getElementById('accessCodeInput')
    let ctx = this
    i.addEventListener("keyup", function(event) {
      if (event.key == 'Enter') {
        event.preventDefault();
        ctx.authenticate()
      }
    });
  },
  methods: {
    authenticate() {
      console.log({
          username: this.identity,
          password: this.passPhrase
      })
      axios({
        method: 'post',
        url: _sys.microservices.backend.url + "/api/user/authenticate",
        data: {
          username: this.identity,
          password: this.passPhrase
        }
      }).then( r => {
        this.halfOpacity = true
        Swal.fire({
          icon: 'success',
          text: 'Your dashboard is ready',
          toast: true,
          position: 'top-right'
        })

        _sys.token = r.data.token

        setTimeout( () => {
          localStorage.removeItem('redirected_to_login')
          window.location = this.$router.resolve({name: 'portal-backpanel'}).resolved.fullPath;
          //$router.push({name: 'portal-cpanel-dashboard'})
        }, 900)
      }).catch( (e) => {
        Swal.fire({
          text: 'You have to check your credentials',
          toast: true,
          position: 'top-right'
        })
      });
    }
  }
}
</script>
<style scoped>
.logo-container {
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-family: Tajawal-Regular;
}

.logo-svg {
  height: 125px;
  -webkit-filter: drop-shadow(3px 3px 2px rgba(71, 11, 71, 1)) drop-shadow(-5px -2px 1px rgba(71, 11, 71, 1));
  filter: drop-shadow(3px 3px 2px rgba(71, 11, 71, 1)) drop-shadow(-5px -2px 1px rgba(71, 11, 71, 1));
}
</style>
