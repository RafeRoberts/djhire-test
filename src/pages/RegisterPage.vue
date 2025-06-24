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
        Create Account
      </div>



      <!-- <div class="col-2 col-md-2" />
        <div class="col-2 col-md-2" /> -->
    </div>
    <div
      class="col-2 col-md-2 my-font"
    >
      <!-- .colRight yellow -->
      <q-img
        src="~assets/group-23520.svg"
        width="160px"
        style="top:40px;left:-280px;transform: rotate(180deg);"
      />
    </div>

    <div
      class="fixed-center bg-white"
      style="top:510px"
    >
      <q-form
        ref="formComponent"
        autocapitalize="off"
        autocorrect="off"
        autocomplete="off"
        spellcheck="false"
      >
        <q-card
          key="card"
          rounded
          class="my-card my-font q-pa-md"
          style="width: 500px;"
        >
          <q-card-section>
            <q-input

              v-model="credentials.username"
              label="Username"
              label-width="3"
              :rules="[requiredRule]"
              helper="Enter your Confirm Code we sent you"
              error-label="Please type a valid code"
              outlined
              type="text"
              @keydown.enter.prevent="submit"
            >
              <template #prepend>
                <q-icon name="person" />
              </template>
            </q-input>

            <q-input

              v-model="credentials.name"
              label="Name"
              label-width="3"
              :rules="[requiredRule]"
              helper="Enter your name"
              error-label="Please type a valid code"
              outlined
              type="text"
              @keydown.enter.prevent="submit"
            >
              <template #prepend>
                <q-icon name="person" />
              </template>
            </q-input>

            <q-input

              v-model="credentials.email"
              label="Email"
              label-width="3"
              :rules="[requiredEmailRule]"
              helper="Enter your Email Address"
              error-label="Please type a valid email"
              outlined
              type="text"
              @keydown.enter.prevent="submit"
            >
              <template #prepend>
                <q-icon name="mail" />
              </template>
            </q-input>

            <q-input

              v-model="credentials.password"
              label="Password"
              label-width="3"
              helper="Enter your password"
              :rules="[requiredRulePassword]"
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
              <q-tooltip
                class="bg-primary text-body2"
                transition-show="rotate"
                transition-hide="rotate"
              >
                <strong>Password requirements</strong><br>
                Contains at least 1 number<br>
                Contains at least 1 special character<br>
                Contains at least 1 uppercase letter<br>
                Contains at least 1 lowercase letter<br>
                Must be at least 8 characters in length<br>
              </q-tooltip>
            </q-input>

            <q-input

              v-model="credentials.confirmpassword"
              label="Confirm Password"
              label-width="3"
              helper="Enter your password"
              :rules="[requiredMatchRule]"
              error-label="Please type a valid password"
              outlined
              :type="isPwd2 ? 'password' : 'type'"
              @keydown.enter.prevent="submit"
            >
              <template #prepend>
                <q-icon name="vpn_key" />
              </template>
              <template #append>
                <q-icon
                  :name="isPwd2 ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd2 = !isPwd2"
                />
              </template>
            </q-input>


            <!-- <q-select
              v-model="selectedRegion"
              :options="regions"
              option-label="suburb"
              label="Location"

              helper="Enter your Location"
              error-label="Please select a valid suburb"
              outlined
              transition-show="jump-up"
              transition-hide="jump-down"
            >
              <template #prepend>
                <q-icon name="place" />
              </template>
              <template #option="scope">
                <q-item v-bind="scope.itemProps">
                  <q-item-section>
                    <q-item-label>{{ scope.opt.suburb }}</q-item-label>
                    <q-item-label caption>
                      {{ scope.opt.state }} - {{ scope.opt.postcode }}
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
 -->

            <div
              class="my-font text-grey"
              align="left"
            >
              Account type:
            </div>
            <q-option-group
              v-model="group"
              :options="options"
              color="primary"
              inline
            />
          </q-card-section>
          <q-card-actions align="center">
            <q-btn
              style="width: 212px; height: 50px;"
              color="info"
              align="center"
              text-color="primary"
              label="Sign Up"
              no-caps
              size="md"
              @click="submit"
            />
          </q-card-actions>
          <q-card-actions align="center">
            <div class="my-font text-grey">
              Already have an account?
              <q-btn
                label="Login"
                text-color="info"
                no-caps
                flat
                to="/login"
              />
            </div>
          </q-card-actions>
        </q-card>
      </q-form>
    </div>
  </div>
  <div class="row absolute">
    <div class="col-2 col-md-2 my-font">
      <!-- .colLeft -->
    </div>
    <div class="col-8 col-md-8">
      <div class="col-2 col-md-2" />
      <div
        class="col-2 col-md-2  my-font text-h3 text-white q-ma-xl"
      >
        <q-img
          src="~assets/group-22610.svg"
          width="63px"
          style="top:400px;left:480px;transform: rotate(180deg);"
        />
        <q-img
          src="~assets/group-22610.svg"
          width="63px"
          style="top:390px;left:480px;transform: rotate(160deg);"
        />
      </div>



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
import auth from '../auth'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'


const $q = useQuasar()
const router = useRouter()
const formComponent = ref()
const credentials = ref({
  username: '',
  password: '',
  confirmpassword: '',
  name: '',
  email: '',
  accounttype: ''
})
//const emailAddress =ref('')
//const tempemailAddress =ref('')
const isPwd = ref(true)
const isPwd2 = ref(true)
const group = ref("DJ")
const options = [
  {
    label:'DJ',value:'DJ'
  },
  {
    label:'DJ Company',value:'DJCompany'
  },
  {
    label:'Venue',value:'Venue'
  },
  {
    label:'Looking for a DJ',value:'Punter'
  }
]
//const regions = ref([])
//const selectedRegion = ref()

//tempemailAddress.value = $q.localStorage.getItem('forgotuser')
//emailAddress.value= $q.localStorage.getItem('confirmforgotuser')
//const router = useRouter()
//const $v = useVuelidate()

const requiredRule = val => (val && val.length > 0) || 'Please enter a value'
const requiredRulePassword = val => (val && val.length > 0 && val.length >= 8) || 'Password must be at least 8 characters'
const requiredEmailRule = val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)|| 'Please enter a valid email address'
const requiredMatchRule = val => (val && val.length > 0 && val === credentials.value.password) || 'Passwords do not match'

// const locationData = auth.getAllPostcodes().then(data => {
//         console.log(data.data)
//         regions.value = data.data
//         //selectedRegion.value = ""
//         // this.pagination = { page, rowsPerPage, rowsNumber, sortBy, descending }
//       });
//       console.log('data results locations:' + locationData)

const submit = async() => {
  console.log("cred=",credentials)
  //$q.localStorage.setItem('location', selectedRegion.value)
  $q.localStorage.setItem('accountType', group.value)
  // const suburb = credentials.value.location.suburb
  credentials.value.location = ''
  credentials.value.accounttype = group.value
  formComponent.value.validate().then(success => {
    console.log(success)
    const loggedin = auth.signup(credentials, '/verify').then(data => {
        console.log('created:',loggedin)
        console.log(data.data)
        $q.notify({
            color:'green',
            textcolor:'primary',
            icon:'report_problem',
            message:'Account Created',
            position:'top'
          })
          $q.localStorage.setItem('verifyemail', data.data.CodeDeliveryDetails.Destination)
          $q.localStorage.setItem('tempsession', data.data.Session)
          $q.localStorage.setItem('forgotuser', credentials.value.username)
          //router.push({ path: `/verify` })
          return auth.addGroup(credentials, '/verify')

      }).then(data2 => {
          console.log("grouped=",credentials)
          console.log("group=",data2.data)
          router.push({ path: `/verify` })
      })
      .catch(err => {
          // if (err.response.request.status === UNAUTHORIZED) {
          $q.notify({
            color:'red',
            textcolor:'primary',
            icon:'report_problem',
            message: err.response.data.error,
            position:'center'
          })
          console.log(err)
          //this.user.authenticated = false
          //$q.localStorage.removeItem('id_token')
          //$q.localStorage.removeItem('refresh_token')
          //$q.localStorage.removeItem('access_token')
          //$q.localStorage.removeItem('user')
          // }
          console.log(err)
        })
    })
  }



</script>

