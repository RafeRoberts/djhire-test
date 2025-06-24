import { date } from 'quasar'
import { api } from 'boot/axios'

//import { useBase64 } from '@vueuse/core'
///import { useQuasar } from 'quasar'
//import { ref } from 'vue'
//import { useRouter} from 'vue-router'


// const { SCHEME, HOSTNAME } =
// process.env.NODE_ENV === 'production'
//   ? { SCHEME: 'https', HOSTNAME: 'dev-api.aeroranger.com' }
//   : { SCHEME: 'https', HOSTNAME: 'dev-api.aeroranger.com' }

// const API_URL = `${SCHEME}://${HOSTNAME}`
const API_URL = `https://api.dev.djhire.com`
//const API_URL = `http://localhost:3000`
const SPOTIFYCLIENT_ID = 'b92170eb83124f40a55de53a32787f01'
const SPOTIFYSECRET = '1d9b4d42fd7c4194993f2f7469db76f8'
const SPOTIFY_URL = 'https://api.spotify.com/v1/search?q='
const SPOTIFYAUTH_URL = 'https://accounts.spotify.com/api/token'
//const SPOTIFYAUTH_URL = 'https://accounts.spotify.com/authorize'
const REGISTRATION_URL = `${API_URL}/signup`
//const SESSION_URL = `${API_URL}/login`
const SESSIONFORGOT_URL = `${API_URL}/forgot`
const SESSIONCONFIRM_URL = `${API_URL}/confirmforgot`
const SESSIONVERIFY_URL = `${API_URL}/signupconfirm`
const SESSIONGROUP_URL = `${API_URL}/addgroup`
// const CURRENT_USER_URL = `${API_URL}/api/v1/users`
const PROFILES_URL = `${API_URL}/profiles`
const PENDINGPROFILES_URL = `${API_URL}/getPendingProfiles`
const APPROVEDPROFILES_URL = `${API_URL}/getApprovedProfiles`
const GETSINGLEPROFILE_URL = `${API_URL}/getSingleProfile`
const REGIONS_URL = `${API_URL}/regionsnogeo`
const EVENTTYPES_URL = `${API_URL}/eventtype`
const MUSICGENRES_URL = `${API_URL}/genres`
const POSTCODES_URL = `${API_URL}/postcodes`
const UNIQUENAME_URL = `${API_URL}/uniqueProfile`
const GETEXISTINGPROFILE_URL = `${API_URL}/getExistingProfile`
const INSERTPROFILE_URL = `${API_URL}/insertProfile`
const INSERTEVENTTYPE_URL = `${API_URL}/insertEventType`
const INSERTGENRE_URL = `${API_URL}/insertGenre`
const UPDATEPROFILEBIO_URL = `${API_URL}/updateProfileBio`
const UPDATEPROFILESBIO_URL = `${API_URL}/updateProfileSBio`
const UPDATEPROFILEVIDEO_URL = `${API_URL}/updateProfileVideo`
const UPDATEPROFILEAUDIO_URL = `${API_URL}/updateProfileVideo`
const UPDATEPROFILESTATUS_URL = `${API_URL}/updateProfileStatus`
const UPDATEPROFILEPHOTO_URL = `${API_URL}/updateProfilePhoto`
const UPDATEAUDIOTRACK_URL = `${API_URL}/updateAudioTrack`
const UPDATEPROFILEPHOTOPROF_URL = `${API_URL}/updateProfilePhotoProf`
const UPDATEPROFILEPHOTOALB_URL = `${API_URL}/updateProfilePhotoAlbumbImages`
const UPDATEPROFILEPHOTOEQUIP_URL = `${API_URL}/updateProfilePhotoEquipImages`
const UPDATEPROFILEEQUIP_URL = `${API_URL}/updateEquipment`
const UPDATEPROFILEHEADERPART_URL = `${API_URL}/updateProfileHeaderPart`
const UPDATEPROFILEHEADERINIT_URL = `${API_URL}/updateProfileHeaderInit`
const UPDATEPROFILEIMAGESEL_URL = `${API_URL}/updateProfileImageSel`
const UPDATEPROFILEPROFIMAGESEL_URL = `${API_URL}/updateProfileProfImageSel`
//const router = useRouter()
//const $q = useQuasar()
// const regions = ref([])
//const idToken = ref($q.localStorage.getItem('id_token'))
const timeStamp = Date.now()
const formattedString = date.formatDate(timeStamp, 'YYYY-MM-DDTHH:mm:ss.SSSZ')
//const formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD')
console.log('date = ', timeStamp)
console.log('date = ', formattedString )

export default {
  // user: {
  //   authenticated: !!idToken.value
  // },

  // async login (creds, redirect)  {
  //   const username = creds.value.username
  //   const password = creds.value.password
  //   console.log('redirect:',redirect)

  //   const credentials = {
  //     "AuthParameters": {
  //         "USERNAME": username,
  //         "PASSWORD": password
  //      }
  //   }
  //   //console.log('credentials:',credentials)
  //   return new Promise((resolve, reject) => {
  //     api({
  //       url: SESSION_URL,
  //       responseType: 'json',
  //       responseEncoding: 'utf8',
  //       method: 'POST',
  //       data: credentials,

  //     })
  //       .then(response => {
  //         //  return response.data
  //         console.log(response)

  //         resolve(response)
  //       })
  //       .catch(error => {
  //         console.log(error)
  //         // context.errored = true
  //         reject(error)
  //       })

  //   })
  //   //router.push({ path: redirect.value })
  // },
  async forgot (creds, redirect)  {
    const username = creds.value.username
    //const password = creds.value.password
    console.log('redirect:',redirect)

    const credentials = {
      "USERNAME": username,
    }
    //console.log('credentials:',credentials)

    return new Promise((resolve, reject) => {
      api({
        url: SESSIONFORGOT_URL,
        responseType: 'json',
        responseEncoding: 'utf8',
        method: 'POST',
        data: credentials,
      })
        .then(response => {
          console.log(response)
          const mail = response.data.CodeDeliveryDetails.Destination
          // user.authenticated = true
          // this.user.authenticated = true
          // let user = JSON.parse(localStorage.getItem('user'))
          resolve(mail)
        })
        .catch(error => {
          console.log(error)
          // context.errored = true
          reject(error)
        })

    })
    //router.push({ path: redirect.value })
  },
  async confirmforgot (creds, redirect)  {
    const username = creds.value.username
    const password = creds.value.password
    const confirmcode = creds.value.code
    console.log('redirect:',redirect)

    const credentials = {
      "Username": username,
      "Password": password,
      "ConfirmCode": confirmcode,
    }
    //console.log('credentials:',credentials)

    return new Promise((resolve, reject) => {
      api({
        url: SESSIONCONFIRM_URL,
        responseType: 'json',
        responseEncoding: 'utf8',
        method: 'POST',
        data: credentials,
      })
        .then(response => {
          console.log(response)
          // const mail = response.data.CodeDeliveryDetails.Destination
          // user.authenticated = true
          // this.user.authenticated = true
          // let user = JSON.parse(localStorage.getItem('user'))
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          // context.errored = true
          reject(error)
        })

    })
    //router.push({ path: redirect.value })
  },
  async signupconfirm (creds, redirect)  {
    const username = creds.value.username
    const session = creds.value.password
    const confirmcode = creds.value.code
    console.log('redirect:',redirect)

    const credentials = {
      "Username": username,
      "Session": session,
      "ConfirmCode": confirmcode,
    }
    console.log('credentials:',credentials)

    return new Promise((resolve, reject) => {
      api({
        url: SESSIONVERIFY_URL,
        responseType: 'json',
        responseEncoding: 'utf8',
        method: 'POST',
        data: credentials,
      })
        .then(response => {
          console.log(response)
          // const mail = response.data.CodeDeliveryDetails.Destination
          // user.authenticated = true
          // this.user.authenticated = true
          // let user = JSON.parse(localStorage.getItem('user'))
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          // context.errored = true
          reject(error)
        })

    })
    //router.push({ path: redirect.value })
  },
  async signup (creds, redirect)  {
    const username = creds.value.username
    const password = creds.value.password
    //const confirmpassword = creds.value.confirmpassword
    const name = creds.value.name
    const email = creds.value.email
    const location = creds.value.location
    const accounttype = creds.value.accounttype
    console.log('redirect:',redirect)

    const credentials = {
      "Username": username,
      "Password": password,
      "Name": name,
      "Email": email,
      "AccountType": accounttype,
      "Location": location,
    }
    //console.log('credentials:',credentials)
    return new Promise((resolve, reject) => {
      api({
        url: REGISTRATION_URL,
        responseType: 'json',
        responseEncoding: 'utf8',
        method: 'POST',
        data: credentials,

      })
        .then(response => {
          //  return response.data
          console.log(response)

          resolve(response)
        })
        .catch(error => {
          console.log(error)
          // context.errored = true
          reject(error)
        })

    })
    //router.push({ path: redirect.value })
  },
  async addGroup (creds, redirect)  {
    const username = creds.value.username
    //const password = creds.value.password
    //const confirmpassword = creds.value.confirmpassword
    //const name = creds.value.name
    //const email = creds.value.email
    // const location = creds.value.location
    const accounttype = creds.value.accounttype
    console.log('redirect:',redirect)

    const credentials = {
      "Username": username,
      "AccountType": accounttype,
    }
    console.log('credentials:',credentials)
    return new Promise((resolve, reject) => {
      api({
        url:SESSIONGROUP_URL,
        responseType: 'json',
        responseEncoding: 'utf8',
        method: 'POST',
        data: credentials,

      })
        .then(response => {
          //  return response.data
          console.log(response)

          resolve(response)
        })
        .catch(error => {
          console.log(error)
          // context.errored = true
          reject(error)
        })

    })
    //router.push({ path: redirect.value })
  },
async getAllProfiles () {
   const credentials = {

    }
    return new Promise((resolve, reject) => {
      api({
        url: PROFILES_URL,
        responseType: 'json',
        responseEncoding: 'utf8',
        method: 'POST',
        data: credentials,
      })
        .then(response => {
          //  return response.data
          console.log(response)
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          // context.errored = true
          reject(error)
        })
    })
  },
  async getPendingProfiles () {
     const credentials = {

    }
    return new Promise((resolve, reject) => {
      api({
        url: PENDINGPROFILES_URL,
        responseType: 'json',
        responseEncoding: 'utf8',
        method: 'POST',
        data: credentials,
      })
        .then(response => {
          //  return response.data
          console.log(response)
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          // context.errored = true
          reject(error)
        })
    })
  },
  async getApprovedProfiles () {
    // context.$http.get(CURRENT_USER_URL, { headers: this.getAuthHeader() })
    const credentials = {

    }
    return new Promise((resolve, reject) => {
      api({
        url: APPROVEDPROFILES_URL,
         responseType: 'json',
        responseEncoding: 'utf8',
        method: 'POST',
        data: credentials,

      })
        .then(response => {
          //  return response.data
          console.log(response)
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          // context.errored = true
          reject(error)
        })
    })
  },
  async getAllRegions () {
    // context.$http.get(CURRENT_USER_URL, { headers: this.getAuthHeader() })
    return new Promise((resolve, reject) => {
      api({
        url: REGIONS_URL,
        responseType: 'json',
        responseEncoding: 'utf8',
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Origin': '*'
          //,
          //Authorization: 'Bearer ' + localStorage.getItem('id_token')
        }
      })
        .then(response => {
          //  return response.data
          // console.log(response)
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          // context.errored = true
          reject(error)
        })
    })
  },
  async getAllPostcodes () {
    // context.$http.get(CURRENT_USER_URL, { headers: this.getAuthHeader() })
    return new Promise((resolve, reject) => {
      api({
        url: POSTCODES_URL,
        responseType: 'json',
        responseEncoding: 'utf8',
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Origin': '*'
          //,
          //Authorization: 'Bearer ' + localStorage.getItem('id_token')
        }
      })
        .then(response => {
          //  return response.data
          // console.log(response)
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          // context.errored = true
          reject(error)
        })
    })
  },
  async getAllEventTypes () {
    // context.$http.get(CURRENT_USER_URL, { headers: this.getAuthHeader() })
    return new Promise((resolve, reject) => {
      api({
        url: EVENTTYPES_URL,
        responseType: 'json',
        responseEncoding: 'utf8',
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Origin': '*'
          //,
          //Authorization: 'Bearer ' + localStorage.getItem('id_token')
        }
      })
        .then(response => {
          //  return response.data
          // console.log(response)
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          // context.errored = true
          reject(error)
        })
    })
  },
  async getAllMusicGenres () {
    // context.$http.get(CURRENT_USER_URL, { headers: this.getAuthHeader() })
    return new Promise((resolve, reject) => {
      api({
        url: MUSICGENRES_URL,
        responseType: 'json',
        responseEncoding: 'utf8',
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Origin': '*'
          //,
          //Authorization: 'Bearer ' + localStorage.getItem('id_token')
        }
      })
        .then(response => {
          //  return response.data
          // console.log(response)
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          // context.errored = true
          reject(error)
        })
    })
  },
  async getSingleProfile (creds) {
    const profile = creds.value.ProfileID

    const credentials = {
      "profileID": profile,
    }
    console.log('credentials:',credentials)
    return new Promise((resolve, reject) => {
      api({
        url: GETSINGLEPROFILE_URL,
        responseType: 'json',
        responseEncoding: 'utf8',
        method: 'POST',
        data: credentials,

      })
        .then(response => {
          //  return response.data
          // console.log(response)
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          // context.errored = true
          reject(error)
        })
    })
  },

  async getExistingProfile (creds) {
    const email = creds.value.email

    const credentials = {
      "Email": email,
    }
    console.log('credentials:',credentials)
    return new Promise((resolve, reject) => {
      api({
        url: GETEXISTINGPROFILE_URL,
        responseType: 'json',
        responseEncoding: 'utf8',
        method: 'POST',
        data: credentials,

      })
        .then(response => {
          //  return response.data
          // console.log(response)
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          // context.errored = true
          reject(error)
        })
    })
  },
  async getUniqueProfile (creds) {
    const artistname = creds.value.artistname

    const credentials = {
      "Name": artistname,
    }
    console.log('credentials:',credentials)
    return new Promise((resolve, reject) => {
      api({
        url: UNIQUENAME_URL,
        responseType: 'json',
        responseEncoding: 'utf8',
        method: 'POST',
        data: credentials,

      })
        .then(response => {
          //  return response.data
          // console.log(response)
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          // context.errored = true
          reject(error)
        })
    })
  },
  async getUniqueSpotify (creds) {
    const artistname = creds.value.artistname
    const baseString = btoa(SPOTIFYCLIENT_ID + ':' + SPOTIFYSECRET)

    console.log(baseString)

    const credentials = {
      "Name": artistname,
    }
    console.log('credentials:',credentials)
    return new Promise((resolve, reject) => {
      api({
        url: SPOTIFYAUTH_URL,
        //responseType: 'code',
        //responseEncoding: 'utf8',
        method: 'POST',
       // mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          //'Access-Control-Allow-Origin': 'http://localhost:9000',
          //'Access-Control-Allow-Methods': '*',
          //'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Allow-Credentials, Access-Control-Request-Methods, Access-Control-Request-Headers',
          //'Access-Control-Allow-Credentials': 'true',
          'Authorization': 'Basic ' + baseString
          //'Authorization': 'Basic YjkyMTcwZWI4MzEyNGY0MGE1NWRlNTNhMzI3ODdmMDE6MWQ5YjRkNDJmZDdjNDE5NDk5M2YyZjc0NjlkYjc2Zjg='
        },
        body: new URLSearchParams({
          'grant_type': 'client_credentials',
        }),
        // form: {
        //   grant_type: 'client_credentials'
        // },
        // json: true

      })
        .then(response => {
          //  return response.data
          console.log(SPOTIFY_URL)
          console.log(response)
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          // context.errored = true
          reject(error)
        })
    })
  },
  async insertProfile (creds) {

    const credentials = {
    "DJName" : creds.value.artistname,
    "FullName" : creds.value.fullname,
    "ShowFullName" : creds.value.showfullname,
    "Email" : creds.value.email,
    "ShowEmail" : creds.value.showemail,
    "Location" : creds.value.location,
    "ShowLocation" : creds.value.showlocation,
    "Birthday" : creds.value.birthdate,
    "ShowBirthday" : creds.value.showbirthdate,
    "Experience" : creds.value.experience,
    "ShowExperience" : creds.value.showexperience,
    "Gender" : creds.value.gender,
    "ShowGender" : creds.value.showgender,
    "Residences" : [creds.value.residences],
    "ShowResidences" : creds.value.showresidences,
    "Specialties" : creds.value.specialties,
    "ShowSpecialties" : creds.value.showspecialties,
    "ExtraServices" : creds.value.services,
    "ShowExtraServices" : creds.value.showservices,
    "Qualifications" : creds.value.qualifications,
    "ShowQualifications" : creds.value.showqualifications,
    "MusicGenres" : creds.value.musicgenres,
    "ShowMusicGenres" : true,
    "EventTypes" : creds.value.events,
    "ShowEventTypes" : creds.value.showeventtypes,
    "PressKit" : creds.value.presskit,
    "ShowPressKit" : creds.value.showpresskit,
    "ProfileURL" : creds.value.profilelink,
    "ShowProfileURL" : creds.value.showprofilelink,
    "Reviews" : [
        { "name" : "Jimmy", "Comment": "This guy Shreds!"},
        { "name" : "Jimmy", "Comment": "This guy Sux!"}
    ],
    "ShowReviews" : true,
    "FullBio" : "this is a long origin story",
    "ShowFullBio" : true,
    "SmallBio" : "this is a long origin story",
    "ShowSmallBio" : true,
    "HeaderImageSelection" : 0,
    "ProfileImageSelection" : 0,
    "AlbumbImageSelection" : 0,
    "Albums" : [{
          "TitleImage": "https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg",
          "AlbumName" :  "Default Album",
          "AlbumbImages" : ["https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg",
            "https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg",
            "https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg"
          ]
        },
      {
          "TitleImage": "https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg",
          "AlbumName" :  "Default Album2",
          "AlbumbImages" : ["https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg",
            "https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg",
            "https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg"
          ]
        }],
    "Videos" : [
        {
          "VideoLink": "video1.mp4",
          "VideoNName" :  "Video One"
        },
        {
            "VideoLink": "video2.mp4",
            "VideoNName" :  "Video Two"
        }],
    "Songs" : [
        {
          "SongLink": "Song1.mp4",
          "SongNName" :  "Song One"
        },
        {
            "SongLink": "Song2.mp4",
            "SongNName" :  "Song Two"
        }],
    "ServiceArea" : creds.value.servicearea,
    "UserID" : creds.value.username,
    "CreatedBy" : creds.value.email,
    "CreatedDate" : timeStamp,
    "UpdatedBy" : creds.value.email,
    "UpdatedDate" : timeStamp,
    "ApprovedBy" : "",
    "ApprovedDate" : "",
    "Status": creds.value.status,
    "UniqueScore": "4"
    }
    console.log('credentials:',credentials)
    return new Promise((resolve, reject) => {
      api({
        url: INSERTPROFILE_URL,
        responseType: 'json',
        responseEncoding: 'utf8',
        method: 'POST',
        data: credentials,

      })
        .then(response => {
          //  return response.data
          // console.log(response)
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          // context.errored = true
          reject(error)
        })
    })
  },
   async updateProfileImageSel (creds) {

    const credentials = {
    "UpdateField" : creds.value.UpdateField,
    "UpdateValue" : creds.value.UpdateValue,
    "ProfileID" : creds.value.ProfileID,
    }
    console.log('credentials:',credentials)
    return new Promise((resolve, reject) => {
      api({
        url: UPDATEPROFILEIMAGESEL_URL,
        responseType: 'json',
        responseEncoding: 'utf8',
        method: 'POST',
        data: credentials,

      })
        .then(response => {
          //  return response.data
          // console.log(response)
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          // context.errored = true
          reject(error)
        })
    })
  },
   async updateProfileProfImageSel (creds) {

    const credentials = {
    "UpdateField" : creds.value.UpdateField,
    "UpdateValue" : creds.value.UpdateValue,
    "ProfileID" : creds.value.ProfileID,
    }
    console.log('credentials:',credentials)
    return new Promise((resolve, reject) => {
      api({
        url: UPDATEPROFILEPROFIMAGESEL_URL,
        responseType: 'json',
        responseEncoding: 'utf8',
        method: 'POST',
        data: credentials,

      })
        .then(response => {
          //  return response.data
          // console.log(response)
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          // context.errored = true
          reject(error)
        })
    })
  },

  async updateProfileBio (creds) {

    const credentials = {
    "UpdateField" : creds.value.UpdateField,
    "UpdateValue" : creds.value.UpdateValue,
    "ProfileID" : creds.value.ProfileID,
    }
    console.log('credentials:',credentials)
    return new Promise((resolve, reject) => {
      api({
        url: UPDATEPROFILEBIO_URL,
        responseType: 'json',
        responseEncoding: 'utf8',
        method: 'POST',
        data: credentials,

      })
        .then(response => {
          //  return response.data
          // console.log(response)
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          // context.errored = true
          reject(error)
        })
    })
  },

  async updateProfileSBio (creds) {

    const credentials = {
    "UpdateField" : creds.value.UpdateField,
    "UpdateValue" : creds.value.smallbio,
    "ProfileID" : creds.value.ProfileID,
    }
    console.log('credentials:',credentials)
    return new Promise((resolve, reject) => {
      api({
        url: UPDATEPROFILESBIO_URL,
        responseType: 'json',
        responseEncoding: 'utf8',
        method: 'POST',
        data: credentials,

      })
        .then(response => {
          //  return response.data
          // console.log(response)
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          // context.errored = true
          reject(error)
        })
    })
  },
  async updateProfileStatus (creds) {

    const credentials = {
    "UpdateValue" : creds.value.UpdateValue,
    "ProfileID" : creds.value.ProfileID,
    }
    console.log('credentials3:',credentials)
    return new Promise((resolve, reject) => {
      api({
        url: UPDATEPROFILESTATUS_URL,
        responseType: 'json',
        responseEncoding: 'utf8',
        method: 'POST',
        data: credentials,

      })
        .then(response => {
          //  return response.data
          // console.log(response)
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          // context.errored = true
          reject(error)
        })
    })
  },
  async updateProfileVideo (creds) {

    const credentials = {
    "UpdateField" : creds.value.UpdateField,
    "UpdateValue" : creds.value.video1,
    "ProfileID" : creds.value.ProfileID,
    }
    console.log('credentials:',credentials)
    return new Promise((resolve, reject) => {
      api({
        url: UPDATEPROFILEVIDEO_URL,
        responseType: 'json',
        responseEncoding: 'utf8',
        method: 'POST',
        data: credentials,

      })
        .then(response => {
          //  return response.data
          // console.log(response)
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          // context.errored = true
          reject(error)
        })
    })
  },
  async updateProfileAudio (creds) {

    const credentials = {
    "UpdateField" : creds.value.UpdateField,
    "UpdateValue" : creds.value.audio1,
    "ProfileID" : creds.value.ProfileID,
    }
    console.log('credentials:',credentials)
    return new Promise((resolve, reject) => {
      api({
        url: UPDATEPROFILEAUDIO_URL,
        responseType: 'json',
        responseEncoding: 'utf8',
        method: 'POST',
        data: credentials,

      })
        .then(response => {
          //  return response.data
          // console.log(response)
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          // context.errored = true
          reject(error)
        })
    })
  },
  async updateProfilePhoto (creds) {

    const credentials = {
    "UpdateField" : creds.value.UpdateField,
    "UpdateValue" : creds.value.UpdateValue,
    "UpdateIndex" : creds.value.UpdateIndex,
    "ProfileID" : creds.value.ProfileID,
    }
    console.log('credentials:',credentials)
    return new Promise((resolve, reject) => {
      api({
        url: UPDATEPROFILEPHOTO_URL,
        responseType: 'json',
        responseEncoding: 'utf8',
        method: 'POST',
        data: credentials,

      })
        .then(response => {
          //  return response.data
          // console.log(response)
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          // context.errored = true
          reject(error)
        })
    })
  },
   async updateProfilePhotoProf (creds) {

    const credentials = {
    "UpdateField" : creds.value.UpdateField,
    "UpdateValue" : creds.value.UpdateValue,
    "UpdateIndex" : creds.value.UpdateIndex,
    "ProfileID" : creds.value.ProfileID,
    }
    console.log('credentials:',credentials)
    return new Promise((resolve, reject) => {
      api({
        url: UPDATEPROFILEPHOTOPROF_URL,
        responseType: 'json',
        responseEncoding: 'utf8',
        method: 'POST',
        data: credentials,

      })
        .then(response => {
          //  return response.data
          // console.log(response)
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          // context.errored = true
          reject(error)
        })
    })
  },
  async updateProfilePhotoAlb (creds) {

    const credentials = {
    "UpdateField" : creds.value.UpdateField,
    "UpdateValue" : creds.value.UpdateValue,
    "UpdateIndex" : creds.value.UpdateIndex,
    "ProfileID" : creds.value.ProfileID,
    }
    console.log('credentials:',credentials)
    return new Promise((resolve, reject) => {
      api({
        url: UPDATEPROFILEPHOTOALB_URL,
        responseType: 'json',
        responseEncoding: 'utf8',
        method: 'POST',
        data: credentials,

      })
        .then(response => {
          //  return response.data
          // console.log(response)
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          // context.errored = true
          reject(error)
        })
    })
  },
  async updateProfilePhotoEquip (creds) {

    const credentials = {
    "UpdateField" : creds.value.UpdateField,
    "UpdateValue" : creds.value.UpdateValue,
    "UpdateIndex" : creds.value.UpdateIndex,
    "ProfileID" : creds.value.ProfileID,
    }
    console.log('credentials:',credentials)
    return new Promise((resolve, reject) => {
      api({
        url: UPDATEPROFILEPHOTOEQUIP_URL,
        responseType: 'json',
        responseEncoding: 'utf8',
        method: 'POST',
        data: credentials,

      })
        .then(response => {
          //  return response.data
          // console.log(response)
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          // context.errored = true
          reject(error)
        })
    })
  },
  async updateProfileEquip (creds) {

    const credentials = {
                          category: creds.value.Category,
                          Name: creds.value.Name,
                          EventTypes: creds.value.EventTypes,
                          Details:creds.value.Details,
                          CanProvide:creds.value.CanProvide,
                          Fee: creds.value.Fee,
                          Actions: creds.value.Actions,
                          ProfileID : creds.value.ProfileID,
                          CreatedBy : creds.value.email,
                          CreatedDate : timeStamp,
                          UpdatedBy : creds.value.email,
                          UpdatedDate : timeStamp
    }
    console.log('credentials:',credentials)
    return new Promise((resolve, reject) => {
      api({
        url: UPDATEPROFILEEQUIP_URL,
        responseType: 'json',
        responseEncoding: 'utf8',
        method: 'POST',
        data: credentials,

      })
        .then(response => {
          //  return response.data
          // console.log(response)
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          // context.errored = true
          reject(error)
        })
    })
  },
async updateProfileHeader (creds) {

    // const credentials = {
    // "ProfileID" : creds.value.ProfileID,
    // }
    console.log('credslast=',creds)
    // const formData = new FormData()
    // formData.append("FileName", "Fuck.jpg")
    // console.log('formData:',formData)
    return new Promise((resolve, reject) => {
      api({
        url: UPDATEPROFILEHEADERINIT_URL,
        responseType: 'json',
        responseEncoding: 'utf8',
        method: 'POST',
        headers: {
          "Content-Type": "multipart/form-data"
        },
        data:creds,

      })
        .then(response => {
          //  return response.data
          // console.log(response)
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          // context.errored = true
          reject(error)
        })
    })
  },
  async updateAudioTrack (creds) {

    // const credentials = {
    // "ProfileID" : creds.value.ProfileID,
    // }
    console.log('credslast=',creds)
    // const formData = new FormData()
    // formData.append("FileName", "Fuck.jpg")
    // console.log('formData:',formData)
    return new Promise((resolve, reject) => {
      api({
        url: UPDATEAUDIOTRACK_URL,
        responseType: 'json',
        responseEncoding: 'utf8',
        method: 'POST',
        headers: {
          "Content-Type": "multipart/form-data"
        },
        data:creds,

      })
        .then(response => {
          //  return response.data
          // console.log(response)
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          // context.errored = true
          reject(error)
        })
    })
  },
  async updateProfileHeaderPart (creds) {

    // const credentials = {
    // "ProfileID" : creds.value.ProfileID,
    // }
    console.log(creds)

    return new Promise((resolve, reject) => {
      api({
        url: UPDATEPROFILEHEADERPART_URL,
        responseType: 'json',
        responseEncoding: 'utf8',
        method: 'POST',
        headers: {
          "Content-Type": "multipart/form-data"
        },
        data:creds,

      })
        .then(response => {
          //  return response.data
          // console.log(response)
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          // context.errored = true
          reject(error)
        })
    })
  },


  async insertEventType (creds) {

    const credentials = {
    "event" : creds.value.eventname,
    "eventtype" : creds.value.eventcategory,
    "CreatedProfile" : true,
    "CreatedBy" : creds.value.email,
    "CreatedDate" : timeStamp,
    "ApprovedBy" : "",
    "ApprovedDate" : "",
    "Status": "Draft",
    }
    console.log('credentials:',credentials)
    return new Promise((resolve, reject) => {
      api({
        url: INSERTEVENTTYPE_URL,
        responseType: 'json',
        responseEncoding: 'utf8',
        method: 'POST',
        data: credentials,

      })
        .then(response => {
          //  return response.data
          // console.log(response)
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          // context.errored = true
          reject(error)
        })
    })
  },

async insertGenre (creds) {

    const credentials = {
    "Name" : creds.value.genrename,
    "Description" : creds.value.genredescription,
    "CreatedProfile" : true,
    "CreatedBy" : creds.value.email,
    "CreatedDate" : timeStamp,
    "ApprovedBy" : "",
    "ApprovedDate" : "",
    "Status": "Draft",
    }
    console.log('credentials:',credentials)
    return new Promise((resolve, reject) => {
      api({
        url: INSERTGENRE_URL,
        responseType: 'json',
        responseEncoding: 'utf8',
        method: 'POST',
        data: credentials,

      })
        .then(response => {
          //  return response.data
          // console.log(response)
          resolve(response)
        })
        .catch(error => {
          console.log(error)
          // context.errored = true
          reject(error)
        })
    })
  },


}


