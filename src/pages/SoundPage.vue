<template>
  <div class="row justify-between bg-primary">
    <div class="col-2 col-md-2 my-font">
      <!-- .colLeft -->
    </div>
    <div class="col-8 col-md-8">
      <div
        class="col-2 col-md-2  my-font text-h4 text-white q-ma-xl"
      >
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Create Profile
      </div>
      <q-img
        src="~assets/penSquare.svg"
        width="116px"
        style="top:-104px;left:214px;"
      />
    </div>
    <div
      class="col-2 col-md-2 my-font"
    >
      <!-- .colRight yellow -->
    </div>
  </div>
  <div
    class="row justify-between bg-secondary"
  >
    <div class="col-2 col-md-2 my-font">
      <!-- .colLeft -->
    </div>
    <div class="col-8">
      <div class="row justify-evenly bg-secondary q-mb-lg">
        <div class="col-8 text-primary bg-secondary">
          <q-form
            ref="formName"
            autocapitalize="off"
            autocorrect="off"
            autocomplete="off"
            spellcheck="true"
          >
            <q-card
              flat
              dense
              class="my-card my-font bg-secondary"
            >
              <q-card-section>
                <div class="row items-start q-gutter-md">
                  <div class="text-h6 text-primary col-8">
                    Sounds
                  </div>
                  <div class="text-body text-primary col-2">
                    <!-- <br> Toggle Visibility on Profile -->
                  </div>
                </div>
              </q-card-section>
              <q-card-section>
                <div class="row items-start q-gutter-md">
                  <div class="text-body text-primary col-2 q-mt-lg q-gutter-md">
                    Audio Tracks
                  </div>
                  <div class="row items-start q-gutter-xs bg-secondary">
                    <q-card
                      v-for="(item, index) in credentials"
                      :key="item"
                      :ref="el => { if (el) audioOptions[item] = el}"
                      flat
                      bordered
                      dense
                      class="bg-secondary"
                      style="width:800px;"
                    >
                      <q-card-section class="bg-primary text-secondary">
                        <q-img
                          src="~assets/penHeadphones.svg"
                          width="40px"
                        />&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;{{ credentialsNames[index] }}
                      </q-card-section>
                      <q-card-section class="flex flex-start q-gutter-xs">
                        <div class="col-2 q-mr-xs">
                          <q-img
                            :src="credentialsCovers[index]"
                            width="80px"
                          />
                        </div>
                        <div
                          class="row flex flex-start q-gutter-xs"
                        >
                          <div class="col-10">
                            <!-- <div
                              id="waveform"
                              ref="mywave"
                            /> -->
                            <WaveSurferPlayer
                              :ref="(el) => (mywave[index] = el)"
                              :options="options"
                              @ready="readyHandler($event, index)"
                              @timeupdate="timeUpdateHandler($event, index)"
                              @wave-surfer="readyWaveSurferHandler(ws, index)"
                            />
                          </div>
                          <div class="col-3">
                            {{ currentTime }}
                          </div>
                          <div
                            class="col-4"
                          >
                            <q-btn
                              color="info"
                              flat
                              no-caps
                              size="24px"
                              icon="play_circle"
                            />
                          </div>
                          <div class="col-2 q-mr-lg">
                            {{ totalDuration }}
                          </div>
                        </div>
                      </q-card-section>
                    </q-card>
                  </div>

                  <div class="text-body text-primary col-8 q-mt-lg q-gutter-md">
                    <div>
                      <q-btn
                        label="Add Audio Track"
                        color="info"
                        flat
                        no-caps
                        icon="add_circle"
                        @click="audioDiag = true"
                      />
                      <q-btn
                        label="Delete Track"
                        color="info"
                        flat
                        no-caps
                        icon="delete"
                        @click="onDelete"
                      />
                    </div>
                    <div class="text-body text-primary col-2">
                      <!-- <q-toggle
                      v-model="credentials.showfullbio"
                      color="info"
                    /> -->
                    </div>
                  </div>
                </div>
              </q-card-section>

              <q-card-actions align="center">
                <q-btn
                  style="width: 212px; height: 50px;"
                  color="info"
                  align="center"
                  text-color="primary"
                  label="Continue to Equipment"
                  no-caps
                  size="md"
                  to="/equipment"
                />
              </q-card-actions>
            </q-card>
          </q-form>
        </div>
      </div>
    </div>
    <div class="col-2 col-md-2 my-font">
    <!-- .colRight yellow -->
    </div>
  </div>
  <q-dialog
    v-model="audioDiag"
    backdrop-filter="blur(30px) saturate(150%)"
  >
    <q-card
      class="col-8 mycard bg-primary"
      style="width:500px"
    >
      <q-bar>
        <q-img
          src="~assets/icon.png"
          style="width:40px;"
        />
      </q-bar>
      <q-uploader
        :url="onStartAudioUpload"
        style="width:500px;height:500px;border-width:0px;"
        label="Upload MP3 Files"
        flat
        bordered
        multiple
        auto-upload
        max-files="3"
        accept="audio/*"
        field-name="photo"
        :form-fields="[
          { name: 'profileID', value: authStore.profileID }
        ]"
        @rejected="onRejected"
        @uploaded="onUploaded"
      />
      <q-card-section>
        <!-- <div class="row items-start q-gutter-md bg-secondary q-ml-xs ">
          <div class="text-body text-primary col-11 ">
            <br><br>
          </div>
        </div> -->
      </q-card-section>
      <q-card-actions align="center">
        <q-btn
          color="info"
          align="center"
          text-color="primary"
          label="Upload Track"
          no-caps
          size="md"
          @click="submitAudio"
        />
      </q-card-actions>
      <q-card-section>
        <div class="row items-start q-gutter-md">
          <div class="text-body text-primary col-2 q-mt-lg q-gutter-md" />
          <div class="text-body text-info col-7 q-gutter-md">
            <q-chat-message
              name="DJEDDA"
              avatar="~/assets/djeddaAvatar2.png"
              :text="['Copy the track embed share link from Soundcloud and paste it in the text box above.']"
            />
          </div>
          <div class="text-body text-primary col-2" />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { ref, useTemplateRef, reactive, computed } from 'vue'
import { Notify} from 'quasar'
//import { useVuelidate } from '@vuelidate/core'
//import { required, email } from '@vuelidate/validators'
import auth from '../auth'
import { useAuthStore } from 'src/stores/auth'
//import auth from 'src/auth'
//import { useRouter } from 'vue-router'
//import { useQuasar } from 'quasar'
//import { useAuthStore } from 'src/stores/auth';
//import { VueDOMPurifyHTML } from 'dompurify-html'
//import DOMPurify   from 'dompurify'
//import { defineComponent } from 'vue'
//import { EventBus } from "../services/event-bus.js";
//import WaveSurfer from "wavesurfer.js"
import { WaveSurferPlayer } from '@meersagor/wavesurfer-vue'
const authStore = useAuthStore()
// const $q = useQuasar()
// console.log('quasar =',$q)
const audioDiag = ref(false)
const mywave = ref([])
const mywaves = useTemplateRef('mywave')
//console.log('myWave =',mywave)
// const mapErrors = {
//   accept: 'Only image files please!',
//   'max-file-size': 'File is too Large',
//   'max-total-size': 'Files are too Large'
//   //413: 'Payload Too Large'
// }
 const credentials = ref([
  'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/tracks/Groovy+Bots+in+the+Digital+Jungle.mp3',
  'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg',
  'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg'
 ])
 const credentialsCovers = ref([
  'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg',
  'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg',
  'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg'
 ])
 const credentialsNames = ref([
  'Track One',
  'Track Two',
  'Track Three'
 ])
const options = computed(() => ({
    height: 48,
    width: 400,
    waveColor: '#31CCEC',
    progressColor: '#222222',
    barGap: 2,
    barWidth: 2,
    barRadius: 8,
    cursorWidth: 0,
    url: credentials.value[0],
}))
const audioOptions = reactive({})
const currentAudio = ref(0)
console.log(currentAudio)
const wavesurfer = ref(null)
//const rightNow = Date.now()
//const rightNowFormatted = date.formatDate(rightNow,'HH:mm:ss')
//const currentTime = ref(rightNowFormatted)
const currentTime = ref('00:00')

const totalDuration = ref('00:00')

function formatTime (seconds) {
  return [seconds / 60, seconds % 60]
    .map((v) => `0${Math.floor(v)}`.slice(-2))
    .join(':');
}
async function readyHandler (duration, item) {
  console.log('duration=',duration)
  //console.log('index=',index)
  console.log('mywaveReady1=',mywaves[item].value)
  //totalDuration.value = formatTime(duration)
}
async function timeUpdateHandler (time) {
          currentTime.value = formatTime(time)
        }
       //const { waveSurfer } = useWaveSurfer({mywave, options: options.value})
async function readyWaveSurferHandler (mywaves, item) {
          wavesurfer.value = mywaves[item];
           console.log('mywaveReady=',mywaves[item].value)
 //console.log('mywave2=',mywave)
        }
//const { isPauseResume } =
//const { waveSurfer } = useWaveSurfer({myWave, options: options.value})

//const formatTime = (seconds) => [seconds / 60, seconds % 60].map((v) => `0${Math.floor(v)}`.slice(-2)).join(':')
const credentials2 = ref({
  UpdateField : "AudioArray",
  UpdateValue : "test",
  UpdateIndex: 0,
  ProfileID : authStore.profileID,

})
//const clean = DOMPurify.sanitize(dirty, {USE_PROFILES: {html: true}})
//const rawHtml = DOMPurify.sanitize('<span style="color: red">This should be red.</span>')
//const waveSurfer = ref(null)
//if (!this.wavesurfer) this.createWaveSurfer();
//createWaveSurfer()
async function onDelete () {
//   credentials.value.audio1 = ''
 }
async function onStartAudioUpload (files) {
  //console.log('options=',options)
  //console.log('currentImg=',currentImg.value)
  //console.log('count=',count.value)
  const file = files[0]
  //resizedBlob.value = await fromBlob(file, 75, 'auto', 'auto', 'webp',)
  //console.log(resizedBlob)
  //console.log("files=", files)
  credentials2.value.Files = file
  credentials2.value.FileName = files[0].name
  console.log("creds2=", credentials2)
  const profileHeaderData = auth.updateAudioTrack(credentials2).then(data => {
        console.log('s3=',data.data)
        credentials2.value.UpdateValue = data.data
        //credentials2.value.UpdateIndex = currentImg.value
        console.log("creds3=", credentials2)
        //const profileHeaderPhoto = auth.updateProfilePhoto(credentials2).then(data2 => {
        //console.log(data2.data)
        //credentials.value[currentImg.value] = data.data
        //photoDiag.value = false
        //cropImage.value = credentials.value[currentImg.value]
        Notify.create({
     // message: mapErrors[entry.failedPropValidation],
      message: 'File upload Successful',
      type: 'positive'
    })
        // uploadId.value = data.data.uploadId
        // uploadKey.value = data.data.key
        // fullPath.value = data.data.path
        })
        //console.log(profileHeaderPhoto)
        //console.log(data.data)
      //})
      console.log(profileHeaderData)
      return { ok: true}
}

</script>
<style>
.controls {
  background-color: white;
}
.audio-container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("../assets/audio.jpg") no-repeat center;
  background-size: cover;
}
</style>
