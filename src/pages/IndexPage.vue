<template>
  <div class="row justify-evenly bg-primary">
    <div class="col-2 col-md-2 my-font">
      <!-- .colLeft -->
    </div>
    <div class="col-8 col-md-8">
      <div class="row justify-evenly bg-primary q-mt-md">
        <div class="col-2 col-md-2" />
        <div class="col-2 col-md-2 my-font no-margin no-padding">
          <q-btn
            stretch
            flat
            color="secondary"
            label="Find DJs"
            no-caps
            size="xl"
            class=" float-right"
          />
        </div>
        <q-separator
          dark
          vertical
          inset
        />
        <div class="col-2 col-md-2 items-center">
          <q-btn
            stretch
            flat
            color="grey-14"
            label="Get Quotes"
            no-caps
            size="xl"
            class="on-right"
          />
        </div>
        <q-separator
          dark
          vertical
          inset
        />
        <div class="col-2 col-md-2">
          <q-btn
            stretch
            flat
            color="red-9"
            label="Emergency DJs"
            no-caps
            size="xl"
            class=" float-left"
          />
        </div>
        <div class="col-2 col-md-2" />
      </div>
      <div class="row justify-evenly bg-primary">
        <div class="col-10 col-md-10">
          <div class="q-pa-xs q-gutter-xs">
            <q-card
              flat
              bordered
              class="my-card my-font"
            >
              <q-card-section horizontal>
                <q-card-section
                  class="q-pt-none"
                >
                  <div class="text-h6">
                    <div class="q-pa-none ">
                      <q-select
                        v-model="selectedRegion"
                        style="width: 260px"
                        :options="regions"
                        option-label="MAP_LABEL"
                        label="Location"
                        label-color="primary"
                        multiple
                        borderless
                        use-chips
                        hint="Show me DJs from"
                        transition-show="jump-up"
                        transition-hide="jump-down"
                        dense
                      >
                        <template #option="scope">
                          <q-item v-bind="scope.itemProps">
                            <q-item-section>
                              <q-item-label>{{ scope.opt.MAP_LABEL }}</q-item-label>
                              <q-item-label caption>
                                {{ scope.opt.STATE }} - {{ scope.opt.REGION }}
                              </q-item-label>
                            </q-item-section>
                          </q-item>
                        </template>
                      </q-select>
                    </div>
                  </div>
                  <!-- <div class="q-pa-sm text-grey">
                    Show me DJs from
                  </div> -->
                </q-card-section>
                <q-separator vertical />
                <q-card-section class="q-pt-none">
                  <div class="text-h6">
                    <div class="q-pa-sl ">
                      <q-select
                        v-model="selectedEventtype"
                        style="width: 260px"
                        :options="eventtypes"
                        option-label="event"
                        label="DJ/Event Type"
                        label-color="primary"
                        borderless
                        use-chips
                        hint="Type of Event"
                        transition-show="jump-up"
                        transition-hide="jump-down"
                        dense
                      >
                        <template #option="scope">
                          <q-item v-bind="scope.itemProps">
                            <q-item-section>
                              <q-item-label>{{ scope.opt.event }}</q-item-label>
                              <q-item-label caption>
                                {{ scope.opt.eventtype }}
                              </q-item-label>
                            </q-item-section>
                          </q-item>
                        </template>
                      </q-select>
                    </div>
                  </div>
                  <!-- <div class="q-pa-sm text-grey">
                    Type of Event
                  </div> -->
                </q-card-section>
                <q-separator vertical />
                <q-card-section class="q-pt-none">
                  <div class="text-h6">
                    <div class="q-pa-sl ">
                      <q-select
                        v-model="selectedMusicGenres"
                        style="width: 260px"
                        :options="musicGenres"
                        option-label="Name"
                        label="Music Style"
                        label-color="primary"
                        borderless
                        use-chips
                        hint="What type of music do you want played"
                        transition-show="jump-up"
                        transition-hide="jump-down"
                        dense
                      >
                        <template #option="scope">
                          <q-item v-bind="scope.itemProps">
                            <q-item-section>
                              <q-item-label>{{ scope.opt.Name }}</q-item-label>
                              <q-item-label caption>
                                {{ scope.opt.Primary }} - {{ scope.opt.Secondary }}
                              </q-item-label>
                            </q-item-section>
                          </q-item>
                        </template>
                      </q-select>
                    </div>
                  </div>
                  <!-- <div class="q-pa-sm text-grey">
                    What type of music do you want played
                  </div> -->
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>

          <div
            class="my-font text-grey-14"
            style="text-align: right;"
          >
            <q-btn-dropdown
              label="More Options"
              flat
              no-caps
            >
              <q-card
                flat
                bordered
                class="my-card my-font"
              >
                <q-card-section class="text-primary">
                  DJ Age
                  <q-range
                    v-model="chosenAge"
                    :min="0"
                    :max="50"
                    color="info"
                    label-always
                    label-color="primary"
                    switch-label-side
                    thumb-color="primary"
                  />
                </q-card-section>
                &nbsp;
                <q-card-section class="text-primary">
                  DJ Years of Experience
                  <q-range
                    v-model="chosenExp"
                    :min="0"
                    :max="30"
                    color="info"
                    label-always
                    label-color="primary"
                    switch-label-side
                    thumb-color="primary"
                  />
                </q-card-section>
                &nbsp;
                <q-card-section class="text-primary">
                  DJ Gender
                  <q-option-group
                    v-model="group"
                    :options="gender"
                    type="radio"
                    dense
                    size="xs"
                    option-label-color="grey-14"
                  />
                </q-card-section>

                <q-card-section class="text-primary">
                  Keywords
                  <q-input
                    v-model="keyword"
                    square
                    outlined
                    label="Input Keywords"
                    dense
                  />
                </q-card-section>
                <q-card-section>
                  <q-btn
                    dense
                    color="primary"
                    label="Reset"
                    @click="handleResetClicked"
                  />
                </q-card-section>
              </q-card>
            </q-btn-dropdown>
          </div>
        </div>
      </div>
      <div class="row justify-start bg-primary q-mt-md">
        <div class="col-2 col-md-2" />
        <div class="col-8 col-xl-8 my-font">
          <div align="center">
            <q-btn
              text-color="primary"
              color="info"
              label="Show me DJs"
              no-caps
              size="xl"
              icon="search"
              :loading="loading"
              @click="searchProfilesClicked"
            >
              <template #loading>
                <!-- <q-spinner-orbit
                  color="primary"
                  size="md"
                /> -->
                <q-spinner-oval
                  color="primary"
                  size="md"
                />
                <!-- <q-spinner-audio
                  color="primary"
                  size="lg"
                /> -->
              </template>
            </q-btn>
          </div>
        </div>



        <div class="col-2 col-md-2" />
      </div>
      <div class="row justify-start bg-primary q-ma-sm">
        <div class="col-2 col-md-1" />
        <div class="col-2 col-sm-3 my-font">
          <div
            class="text-secondary text-h4"
          >
            Featured DJs
          </div>
        </div>

        <div class="col-2 col-md-1">
          <q-img
            src="~assets/strageArrow2.png"
            width="160px"
            style="margin-left:-100px;"
          />
        </div>


        <div class="col-2 col-md-2" />
      </div>
      <div class="row justify-evenly bg-primary">
        <div class="col-10 col-md-10">
          <div class="q-pa-md q-gutter-y-md">
            <q-card
              flat
              class="my-card my-font"
            >
              <q-img
                src="~assets/djarena12.png"
                style="height:360px"
              >
                <div class="absolute-bottom text-subtitle2 text-white q-pa-lg">
                  {{ monthString }} Featured Artist<br>
                  <div class="text-h4 text-bold">
                    DJ Vortex
                  </div>
                  <div class="text-body">
                    Having just returned from a tour of the UK festival circuit....
                  </div>
                </div>
              </q-img>
            </q-card>
            <elevenlabs-convai agent-id="iO89RVf4das6GE7Z3MGg" />
          </div>
        </div>
      </div>
    </div>
    <div class="col-2 col-md-2 my-font">
      <!-- .colRight yellow -->
    </div>
  </div>
  <div
    class="row justify-between bg-secondary"
    style="margin-top:-160px;height:200px"
  >
    <div class="col-2 col-md-2 my-font">
      <!-- .colLeft -->
    </div>
    <div
      class="col-8 bg-secondary my-font"
      style="margin-left:-160px;margin-right:-160px"
    >
      <!-- middle -->
    </div>
    <div class="col-2 col-md-2 my-font">
      <!-- .colRight yellow -->
    </div>
  </div>

  <div
    class="row justify-between bg-secondary"
  >
    <div class="col-2 col-md-2 my-font">
      <!-- .colLeft -->
    </div>
    <div class="col-7">
      <div class="row justify-evenly bg-secondary q-mb-lg">
        <div class="col-4 col-5">
          <q-card
            flat
            class="my-card my-font items-start"
            style="width:475px"
          >
            <q-card-section>
              <q-img
                style="width:447px; height:305px;"
                src="~assets/djarena6.png"
              />
            </q-card-section>
          </q-card>
          <q-space />
        </div>
        <div class="col-4 col-5 q-man-one">
          <q-card
            flat
            class="my-card my-font no-margin"
            style="width:475px"
          >
            <q-card-section>
              <q-img
                style="width:447px; height:305px;"
                src="~assets/djarena15.png"
              />
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <div class="col-2 col-md-2 my-font">
      <!-- .colRight yellow -->
    </div>
  </div>
  <div class="row justify-between bg-secondary">
    <div class="col-2 col-md-2 my-font">
      <!-- <img
        alt="DJ Hire logo"
        src="~assets/djhireLogoNoCom1.png"
        style="width: 126px; height: 54px; vertical-align: middle; margin-top: 20px;margin-bottom: 20px;"
      >
      <q-btn
        label="hello"
      /> -->
    </div>
  </div>
  <q-dialog
    v-model="betaDiag"
    persistent
    backdrop-filter="blur(30px) saturate(150%)"
  >
    <q-card
      class="col-8 mycard bg-primary"
      style="width:700px"
    >
      <q-bar>
        <q-img
          src="~assets/icon.png"
          style="width:40px"
        />
      </q-bar>
      <q-card-section>
        <div class="row items-start q-gutter-md">
          <div class="text-body text-primary col-7 q-mt-lg q-gutter-md" />
          <div class="text-body text-info  q-gutter-md">
            <strong>This is a Pre-Release site for testing purposes only.</strong><br>
            By continuing to this site, you agree to the following conditions:
          </div>
          <div class="text-body  q-gutter-md">
            <div class="text-body text-white col-7 q-gutter-md">
              You will not share any screenshots or mention any features of the platform in the Press nor social media.<br>
              You will not screen capture any part of the platform or its images.<br>
              You will not share this link in anyway as testing is an Invite Only process.<br>
              You will not break any part of your signed NDA document.<br>
              Should you not comply with these terms, You will forfiet ownership of your soul to the lead developer of this site.<br>
            </div>
          </div>
        </div>
      </q-card-section>
      <q-card-actions>
        <q-btn
          label="Agree and Continue"
          color="info"
          to="/register"
          :disable="betaDiagLock"
        />
        <q-btn
          label="Agree and Login"
          color="info"
          :disable="betaDiagLock"
          @click="betaDiag = false"
        />
        <q-btn
          label="Request Access & NDA"
          color="primary"
          href="https://djhire.com"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import auth from '../auth'
import { useQuasar, date } from 'quasar'
import { useRouter} from 'vue-router'
import { useAuthStore } from 'src/stores/auth';
import { useMeta } from 'quasar'
// import { useScriptTag } from '@vueuse/core'
// JS tags
const meta = {
script: {
    ldJson: {
      type: 'application/javascript',
      src: 'https://elevenlabs.io/convai-widget/index.js'
    }
  }
}
useMeta(meta)
const authStore = useAuthStore()

const betaDiag = ref(true)
const betaDiagLock = ref(true)
const timestamp = Date.now()
const monthString = date.formatDate(timestamp, 'MMMM')
//const currentMonth = timestamp
const router = useRouter()
const $q = useQuasar()
const regions = ref([])
  const selectedRegion = ref()
  const eventtypes = ref([])
  const selectedEventtype = ref()
  const musicGenres = ref([])
  const selectedMusicGenres = ref()
  const chosenAge = ref({
    min:16,
    max:38
  })
  const chosenExp = ref({
    min:0,
    max:20
  })
  const keyword = ref()
  const group = ref()
  const gender = [
  {
      label:"Male", value:"male"
  },
    {
      label:"Female", value:"female"
    }
    ,
    {
      label:"Non-binary", value:"non-binary"
    }
  ]
  const loading = ref(false)

  console.log("isAuthenticated.value=",authStore.isAuthenticated)
  // const tempAuth = 'true'
  // if( !!authStore.isAuthenticated && tempAuth === authStore.isAuthenticated ) {
  //   router.push({ path: `/` })
  // }

  const locationData = auth.getAllRegions().then(data => {
        console.log(data.data)
        regions.value = data.data
        //selectedRegion.value = ""
        // this.pagination = { page, rowsPerPage, rowsNumber, sortBy, descending }
      });
      console.log('data results locations:' + locationData)


  //regions.value = locationData
  //selectedRegion.value = regions.value[0]
  // console.log('data results :' + locationData)
  const eventTypeData = auth.getAllEventTypes().then(data => {
        console.log(data.data)
        eventtypes.value = data.data
        // selectedEventtype.value = ""
        // this.pagination = { page, rowsPerPage, rowsNumber, sortBy, descending }
      });
      console.log('data results :' + eventTypeData)

  const musicGenresData = auth.getAllMusicGenres().then(data => {
        console.log(data.data)
        musicGenres.value = data.data
       // selectedMusicGenres.value = []
        // this.pagination = { page, rowsPerPage, rowsNumber, sortBy, descending }
        betaDiagLock.value = false
      });
      console.log('data results :' + musicGenresData)

      const handleResetClicked = () => {
        try {
          $q.localStorage.removeItem('selLocations')
          $q.localStorage.removeItem('selEvents')
          $q.localStorage.removeItem('selGenres')
          $q.localStorage.removeItem('selAgeRange')
          $q.localStorage.removeItem('selExpRange')
          $q.localStorage.removeItem('selGender')
          $q.localStorage.removeItem('selKeyword')
        } catch (e) {
          //no data saved
          console.log(e)
        }

        selectedRegion.value = []
        selectedEventtype.value = []
        selectedMusicGenres.value = []
        group.value = []
        chosenAge.value ={
          min:16,
          max:38
        }
        chosenExp.value = {
          min:0,
          max:20
        }
        keyword.value = []

    }

      const searchProfilesClicked = () => {
        loading.value = true
        if(selectedRegion.value === null) {
          selectedRegion.value = []
        }
        if(selectedEventtype.value === null) {
          selectedEventtype.value = []
        }
        if(selectedMusicGenres.value === null) {
          selectedMusicGenres.value = []
        }
        if(group.value === null) {
          group.value = ""
        }
        $q.localStorage.set('selLocations', selectedRegion.value)
        $q.localStorage.set('selEvents', selectedEventtype.value)
        $q.localStorage.set('selGenres', selectedMusicGenres.value)
        $q.localStorage.set('selAgeRange', chosenAge.value)
        $q.localStorage.set('selExpRange', chosenExp.value)
        $q.localStorage.set('selGender', group.value)
        $q.localStorage.set('selKeyword', keyword.value)
        loading.value = false
        // Go To Results Page
        router.push({ path: `/results/` })


      }

  onMounted(() => {
    try {
      const savedLocations = $q.localStorage.getItem('selLocations')
      selectedRegion.value = savedLocations
      const savedEvents = $q.localStorage.getItem('selEvents')
      selectedEventtype.value = savedEvents
      const savedGenres = $q.localStorage.getItem('selGenres')
      selectedMusicGenres.value = savedGenres
      //const savedAgeRange = $q.localStorage.getItem('selAgeRange')
      //chosenAge.value = savedAgeRange
     // const savedExpRange = $q.localStorage.getItem('selExpRange')
      //chosenExp.value = savedExpRange
      const savedGender = $q.localStorage.getItem('selGender')
      group.value = savedGender
      const savedKeyword = $q.localStorage.getItem('selKeyword')
      keyword.value = savedKeyword
    } catch (e) {
      //no data saved
      console.log(e)
    }
  })


</script>
<style type="css">
/* ._poweredBy_1f9vw_251 {
  display: none;
}
.__wrapper_1f9vw_18 {
    pointer-events: none;
    position: fixed;
    left: 320px;
    top: 320px;
    z-index: 1000;
    --btn-max-width: 320px;
} */
 .q-footer { z-index: 999;}
 </style>
