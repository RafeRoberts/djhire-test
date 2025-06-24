import { defineStore } from 'pinia'
import { ref } from 'vue'
import { LocalStorage } from 'quasar'
//import { useRouter} from 'vue-router'
import { api } from 'boot/axios'
//import { data } from 'autoprefixer'
//const API_URL = `https://api.dev.djhire.com`

// export const useMyStore = defineStore('myStore', {
//   state: () => ({}),
//   getters: {},
//   actions: {}
// })

// // if (import.meta.hot) {
// //   import.meta.hot.accept(acceptHMRUpdate(useMyStore, import.meta.hot))
// // }
export const useAuthStore = defineStore('auth', () => {
  //const API_URL = `https://api.dev.djhire.com`
  const API_URL = `http://localhost:3000`
  const SESSION_URL = `${API_URL}/login`
  const USER_URL = `${API_URL}/getuser`
  const user = ref(null)
  const username = ref(null)
  const djname = ref(null)
  const token = ref(null)
  const accessToken = ref(null)
  const email = ref(null)
  const userRoles = ref([])
  const isAuthenticated = ref(false)
  const uniqueScore = ref(5)
  const eventCount = ref(0)
  const profileStatus = ref('incomplete')
  const profileID = ref(null)
  const profileImage = ref('~assets/avatar.jpg')

token.value = LocalStorage.getItem("id_token")
accessToken.value = LocalStorage.getItem("access_token")
 if (token.value) {
    isAuthenticated.value = true
 }

 function login (creds, redirect)  {
  const username = creds.value.username
  const password = creds.value.password
  console.log('redirect:',redirect)

  const credentials = {
    "AuthParameters": {
        "USERNAME": username,
        "PASSWORD": password
     }
  }
  //console.log('credentials:',credentials)
  return new Promise((resolve, reject) => {
    api({
      url: SESSION_URL,
      responseType: 'json',
      responseEncoding: 'utf8',
      method: 'POST',
      data: credentials,

    })
      .then(response => {
        //  return response.data
        console.log(response)
        isAuthenticated.value = true
        //username.value = username
        resolve(response)
      })
      .catch(error => {
        console.log(error)
        // context.errored = true
        reject(error)
      })

  })
  //router.push({ path: redirect.value })
}

async function logout() {
  //const router = useRouter()
  //user.value = null
  //userRoles.value = []
  //Revoke Token
  //Empty Storage

  return new Promise((resolve) => {

    LocalStorage.removeItem("id_token")
    LocalStorage.removeItem("accessToken")
    LocalStorage.removeItem("refresh_token")
    LocalStorage.removeItem("token")
    LocalStorage.removeItem("tempsession")
    LocalStorage.removeItem("user")
    LocalStorage.removeItem("forgotuser")
    // LocalStorage.removeItem("username")
    LocalStorage.removeItem("userRoles")
    // LocalStorage.removeItem("uniqueScore")
    // LocalStorage.removeItem("email")
    // LocalStorage.removeItem("eventCount")
    // LocalStorage.removeItem("djname")
    // LocalStorage.removeItem("profileStatus")
    isAuthenticated.value = false
      resolve()
      //console.log(reject)
    // })
    // .catch(error => {
    //   console.log(error)
    //   // context.errored = true
    //   reject(error)
    // })


  })
}

async function getuser (token)  {
  //const access = creds.value.access
  //const password = creds.value.password
  //check if logged in
  //isAuthenticated.value = !!localStorage.getItem('id_token')
  // if( isAuthenticated.value == true ) {
    console.log('accessToken2: ', token)

    const credentials = {
      "AccessToken": token
    }
    //console.log('credentials: ', credentials.value)
    return new Promise((resolve, reject) => {
      api({
        url: USER_URL,
        responseType: 'json',
        responseEncoding: 'utf8',
        method: 'POST',
        data: credentials,

      })
        .then(response => {
          //return response.data
          console.log(response)
          username.value = response.data.name
          djname.value = response.data["cognito:username"]
          email.value = response.data.email
          userRoles.value = response.data["cognito:groups"]
          user.value = response.data.sub

          resolve(response)
        })
        .catch(error => {
          console.log(error)
          // context.errored = true
          reject(error)
        })

    })
  //  }
  // else {
  //   return new Promise((resolve) => {
  //     resolve( 777 )
  //   })
  // }

}

function setDjname (creds)  {
  djname.value = creds

}

function setUnique (creds)  {
  uniqueScore.value = creds

}

function setProfileID (creds)  {
  profileID.value = creds

}

function setProfileImage (creds)  {
  profileImage.value = creds

}
function setProfileStatus (creds)  {
  profileStatus.value = creds

}
  return { user, isAuthenticated, username, djname, token, accessToken, userRoles, email, uniqueScore, eventCount, profileStatus, profileID, logout, login, getuser, setDjname, setUnique, setProfileID, setProfileStatus, setProfileImage }
})
