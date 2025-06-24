<template>
  <div class="row justify-between bg-primary">
    <div class="col-2 col-md-2 my-font">
      <!-- .colLeft -->
    </div>
    <div class="col-8 col-md-8">
      <div class="col-2 col-md-2" />
      <div
        class="col-2 col-md-2  my-font text-h3 text-white q-ma-xl q-pb-xl"
        align="center"
      >
        Login
      </div>



      <!-- <div class="col-2 col-md-2" />
        <div class="col-2 col-md-2" /> -->
    </div>
    <div class="col-2 col-md-2 my-font">
      <!-- .colRight yellow -->
    </div>

    <div
      class="fixed-center bg-white"
    >
      <q-img
        src="~assets/group-22610.svg"
        width="63px"
        style="top:-10px;left:544px;"
      />
      <q-img
        src="~assets/group-22610.svg"
        width="63px"
        style="top:-58px;left:480px;transform: rotate(-20deg);"
      />
      <transition-group
        appear
        enter-active-class="animated slide-left"
        leave-active-class="animated slide-right"
      >
        <q-form
          ref="formComponent"
          autocapitalize="off"
          autocorrect="off"
          autocomplete="off"
          spellcheck="false"

          class="bg-secondary"
        >
          <q-card
            key="card"
            rounded
            class="my-card my-font q-pa-md"
            style="width: 500px;top:-50px;"
          >
            <q-card-section />
            <q-card-section>
              <q-input

                v-model="credentials.username"
                label="User Name or Email Address"
                label-width="3"
                :rules="[requiredRule]"
                helper="Enter your registered User Name or Email Address to Log in"
                error-label="Please type a valid username"
                outlined
                type="text"
                @keydown.enter.prevent="submit"
              >
                <template #prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
            </q-card-section>
            <q-card-section>
              <q-input

                v-model="credentials.password"
                label="Password"
                label-width="3"
                helper="Enter your password"
                :rules="[requiredRule]"
                error-label="Please type a valid password"
                outlined
                :type="isPwd ? 'password' : 'type'"
                @keydown.enter.prevent="submit"
              >
                <template #prepend>
                  <q-icon name="vpn_key" />
                </template>
                <template #append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
            </q-card-section>
            <q-card-actions align="right">
              <q-btn
                label="Forgot Password?"
                text-color="info"
                no-caps
                flat
                to="/forgot"
              />
            </q-card-actions>
            <q-card-actions align="center">
              <q-btn
                style="width: 212px; height: 50px;"
                color="info"
                align="center"
                text-color="primary"
                label="Login"
                no-caps
                size="md"
                @click="submit"
              />
            </q-card-actions>
            <q-card-actions align="center">
              <div class="my-font text-grey">
                Don't have an account?
                <q-btn
                  label="Sign up"
                  text-color="info"
                  no-caps
                  flat
                  to="/register"
                />
              </div>
              <!-- <q-btn color="primary" align="center" label="SSO Login" @click="submit" /> -->
              <!-- <q-btn color="primary" align="center" label="Forgot Password" @click="forgot" /> -->
            </q-card-actions>
          </q-card>
        </q-form>
      </transition-group>
    </div>
    <q-img
      src="~assets/group-23520.svg"
      width="160px"
      style="top:440px;left:520px;"
    />
  </div>
  <div class="row absolute">
    <div class="col-2 col-md-2 my-font">
      <!-- .colLeft -->
    </div>
    <div class="col-8 col-md-8">
      <div class="col-2 col-md-2" />
      <div
        class="col-2 col-md-2  my-font text-h3 text-white q-ma-xl"
      />



      <!-- <div class="col-2 col-md-2" />
        <div class="col-2 col-md-2" /> -->
    </div>
    <div class="col-2 col-md-2 my-font">
      <!-- .colRight yellow -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
//import { useVuelidate } from '@vuelidate/core'
//import { required, email } from '@vuelidate/validators'
//import auth from '../auth'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'
import { useAuthStore } from 'src/stores/auth';
const authStore = useAuthStore()


const $q = useQuasar()
const router = useRouter()
const formComponent = ref()
const credentials = ref({
  username: '',
  password: ''

})
const isPwd = ref(true)



//const router = useRouter()
//const $v = useVuelidate()

const requiredRule = val => (val && val.length > 0) || 'Please enter a value'



const submit = async() => {

  formComponent.value.validate().then(success => {
    console.log(success)
    const loggedin = authStore.login(credentials, '/').then(data => {
        console.log('login:',loggedin)
        $q.localStorage.set('id_token', data.data.AuthenticationResult.IdToken)
        $q.localStorage.set('refresh_token', data.data.AuthenticationResult.RefreshToken)
        $q.localStorage.set('access_token', data.data.AuthenticationResult.AccessToken)
       // $q.localStorage.set('user', credentials.value.username)
      //   if (authStore.isAuthenticated.value) {
      //   router.push({ path: `/` })
      //  }

    return new Promise((resolve) => {

    setTimeout(() => {
      //authStore.logout()
      console.log('accessToken: ', data.data.AuthenticationResult.IdToken)
        authStore.getuser(data.data.AuthenticationResult.IdToken)
        //check roles
       console.log('roles=',authStore.userRoles)
       if(authStore.userRoles[0] === 'Admin') {
          router.push({ path: `/roles` })
       } else {
          router.push({ path: `/profile` })
       }


      resolve()
    }, 1000)

  })

      })
      .catch(err => {
          // if (err.response.request.status === UNAUTHORIZED) {
          $q.notify({
            color:'red',
            textcolor:'primary',
            icon:'report_problem',
            message:'Username and Password combination is incorrect',
            position:'center'
          })
          console.log(err)
          //this.user.authenticated = false
          $q.localStorage.removeItem('id_token')
          $q.localStorage.removeItem('refresh_token')
          $q.localStorage.removeItem('access_token')
          $q.localStorage.removeItem('user')
          // }

        })
        .finally(() => {
          //router.push({ path: `/` })
        })

    })
  }



</script>
