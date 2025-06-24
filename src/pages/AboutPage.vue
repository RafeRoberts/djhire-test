<template>
  <!-- <q-page
    padding
    class="bg-secondary"
  > -->
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
        style="top:-104px;left:210px;"
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
        <div class="col-10 text-black bg-secondary">
          <q-form
            ref="formName"
            autocapitalize="off"
            autocorrect="off"
            autocomplete="off"
            spellcheck="false"
          >
            <q-card
              flat
              class="my-card my-font bg-secondary"
            >
              <q-card-section>
                <div class="row items-start q-gutter-md">
                  <div class="text-h6 text-primary col-8">
                    About
                  </div>
                  <div class="text-body text-primary col-2">
                    <br> Toggle Visibility on Profile
                  </div>
                </div>
              </q-card-section>
              <q-card-section>
                <div class="row items-start q-gutter-md">
                  <div class="text-body text-primary col-2 q-mt-xl q-gutter-md">
                    Artist Name
                  </div>
                  <div class="text-body text-primary col-7 q-gutter-md">
                    <q-input
                      v-model="authStore.djname"
                      :rules="[requiredRule]"
                      label-width="3"
                      helper="Enter DJ Name"
                      outlined
                      type="text"
                      dense
                      readonly
                      @keydown.enter.prevent="submit"
                    />
                  </div>
                  <div class="text-body text-primary col-2 q-gutter-md">
                    <!-- <q-toggle
                      v-model="credentials.showfullname"
                      color="info"
                    /> -->
                  </div>
                </div>
                <div class="row items-start q-gutter-md">
                  <div class="text-body text-primary col-2 q-mt-xl q-gutter-md">
                    Full Name
                  </div>
                  <div class="text-body text-primary col-7 q-gutter-md q-gutter-md">
                    <q-input
                      v-model="authStore.username"
                      :rules="[requiredRule]"
                      label-width="3"
                      helper="Enter Name"
                      outlined
                      type="text"
                      dense
                      readonly
                      @keydown.enter.prevent="submit"
                    />
                  </div>
                  <div class="text-body text-primary col-2 q-gutter-md">
                    <q-toggle
                      v-model="credentials.showfullname"
                      color="info"
                    />
                  </div>
                </div>
                <div class="row items-start q-gutter-md">
                  <div class="text-body text-primary col-2 q-mt-xl  q-gutter-md">
                    Email
                  </div>
                  <div class="text-body text-primary col-7 q-gutter-md">
                    <q-input
                      v-model="authStore.email"
                      :rules="[requiredRule]"
                      label-width="3"
                      helper="Enter Email"
                      outlined
                      type="text"
                      dense
                      readonly
                      @keydown.enter.prevent="submit"
                    />
                  </div>
                  <div class="text-body text-primary col-2 q-gutter-md">
                    <!-- <q-toggle
                      v-model="credentials.showlocation"
                      color="info"
                    /> -->
                  </div>
                </div>
                <div class="row items-start q-gutter-md">
                  <div class="text-body text-primary col-2 q-mt-xl q-gutter-md">
                    Location
                  </div>
                  <div class="text-body text-primary col-7 q-gutter-md">
                    <q-select
                      v-model="selectedRegion"
                      :options="regions"
                      option-label="suburb"
                      label="Location"
                      label-color="primary"
                      outlined
                      use-chips
                      hint="Enter Location"
                      transition-show="jump-up"
                      transition-hide="jump-down"
                      dense
                      bottom-slots
                      multiple
                    >
                      <template #option="scope">
                        <q-item v-bind="scope.itemProps">
                          <q-item-section>
                            <q-item-label>{{ scope.opt.suburb }} - {{ scope.opt.postcode }}</q-item-label>
                            <q-item-label caption>
                              {{ scope.opt.state }} - {{ scope.opt.REGION }}
                            </q-item-label>
                          </q-item-section>
                        </q-item>
                      </template>
                    </q-select>
                  </div>

                  <div class="text-body text-primary col-2 q-gutter-md">
                    <q-toggle
                      v-model="credentials.showlocation"
                      color="info"
                    />
                  </div>
                </div>
                <div class="row items-start q-gutter-md">
                  <div class="text-body text-primary col-2 q-mt-xl q-gutter-md">
                    Birthday
                  </div>
                  <div class="text-body text-primary col-7 q-gutter-md">
                    <q-input
                      v-model="credentials.birthdate"
                      :rules="[requiredRule]"
                      label-width="3"
                      helper="Enter Birthday"
                      outlined
                      type="text"
                      dense
                      hint="DD/MM/YYYY"
                      @keydown.enter.prevent="submit"
                    />
                  </div>
                  <div class="text-body text-primary col-2 q-gutter-md">
                    <q-toggle
                      v-model="credentials.showbirthdate"
                      color="info"
                    />
                  </div>
                </div>
                <div class="row items-start q-gutter-md">
                  <div class="text-body text-primary col-2 q-mt-xl q-gutter-md">
                    Years of Experience
                  </div>
                  <div class="text-body text-primary col-7 q-gutter-md">
                    <q-input
                      v-model="credentials.experience"
                      :rules="[requiredRule]"
                      label-width="3"
                      helper="Enter Years"
                      outlined
                      type="text"
                      dense
                      @keydown.enter.prevent="submit"
                    />
                  </div>
                  <div class="text-body text-primary col-2 q-gutter-md">
                    <q-toggle
                      v-model="credentials.showexperience"
                      color="info"
                    />
                  </div>
                </div>
                <div class="row items-start q-gutter-md">
                  <div class="text-body text-primary col-2 q-mt-xl q-gutter-md">
                    Gender
                  </div>
                  <div class="text-body text-primary col-7 q-gutter-md">
                    <q-option-group
                      v-model="group"
                      :options="gender"
                      type="radio"
                      dense
                      size="xs"
                      option-label-color="grey-14"
                      inline
                    />
                  </div>
                  <div class="text-body text-primary col-2 q-gutter-md">
                    <q-toggle
                      v-model="credentials.showgender"
                      color="info"
                    />
                  </div>
                </div>
                <div class="row items-start q-gutter-md">
                  <div class="text-body text-primary col-2 q-mt-xl q-gutter-md">
                    Club Residences
                  </div>
                  <div class="text-body text-primary col-7 q-gutter-md">
                    <q-input
                      v-model="credentials.residences"
                      :rules="[requiredRule]"
                      label-width="3"
                      helper="Enter any residancies"
                      outlined
                      type="text"
                      dense
                      @keydown.enter.prevent="submit"
                    />
                  </div>
                  <div class="text-body text-primary col-2 q-gutter-md">
                    <q-toggle
                      v-model="credentials.showresidences"
                      color="info"
                    />
                  </div>
                </div>
                <div class="row items-start q-gutter-md">
                  <div class="text-body text-primary col-2 q-mt-xl q-gutter-md">
                    Specialties
                  </div>
                  <div class="text-body text-primary col-7 q-gutter-md">
                    <q-input
                      v-model="credentials.specialties"
                      :rules="[requiredRule]"
                      label-width="3"
                      helper="Enter any specialties"
                      outlined
                      type="text"
                      dense
                      @keydown.enter.prevent="submit"
                    />
                  </div>
                  <div class="text-body text-primary col-2 q-gutter-md">
                    <q-toggle
                      v-model="credentials.showspecialties"
                      color="info"
                    />
                  </div>
                </div>
                <div class="row items-start q-gutter-md">
                  <div class="text-body text-primary col-2 q-mt-xl q-gutter-md">
                    Music Genres
                  </div>
                  <div class="text-body text-primary col-7 q-gutter-md">
                    <q-select
                      v-model="selectedMusicGenres"

                      :options="musicGenres"
                      option-label="Name"
                      label="Music Style"
                      label-color="primary"
                      multiple
                      outlined
                      use-chips
                      hint="What type of music do you play"
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
                  <div class="text-body text-primary col-2 q-gutter-md">
                    <q-btn
                      flat
                      color="info"
                      label="Music Style"
                      no-caps
                      icon="add_circle"
                      @click="genreDiag = true"
                    />
                  </div>
                </div>
                <div class="row items-start q-gutter-md">
                  <div class="text-body text-primary col-2 q-mt-xl q-gutter-md">
                    Extra Services
                    <q-icon
                      name="info"
                      color="info"
                      size="sm"
                      class="q-mb-xs"
                      right
                    >
                      <q-tooltip
                        class="bg-primary text-white text-body2"
                        :offset="[10,-40]"
                      >
                        Sound technician, lighting setup, MCing, event coordination, karaoke setup, video projection services.
                      </q-tooltip>
                    </q-icon>
                  </div>
                  <div class="text-body text-primary col-7 q-gutter-md">
                    <q-input
                      v-model="credentials.services"
                      :rules="[requiredRule]"
                      label-width="3"
                      helper="Enter any specialties"
                      outlined
                      type="text"
                      dense
                      @keydown.enter.prevent="submit"
                    />
                  </div>
                  <div class="text-body text-primary col-2 q-gutter-md">
                    <q-toggle
                      v-model="credentials.showservices"
                      color="info"
                    />
                  </div>
                </div>
                <div class="row items-start q-gutter-md">
                  <div class="text-body text-primary col-2 q-mt-lg q-gutter-md">
                    Extra Qualifications
                    <q-icon
                      name="info"
                      color="info"
                      size="sm"
                      class="q-mb-xs"
                      right
                    >
                      <q-tooltip
                        class="bg-primary text-white text-body2"
                        :offset="[10,-40]"
                      >
                        First Aid Certification, Bachelor of Music, Diploma of Sound Production, Event Management Certification, DJ Performance Course.
                      </q-tooltip>
                    </q-icon>
                  </div>
                  <div class="text-body text-primary col-7 q-gutter-md">
                    <q-input
                      v-model="credentials.qualifications"
                      :rules="[requiredRule]"
                      label-width="3"
                      helper="Enter any qualifications"
                      outlined
                      type="text"
                      dense
                      @keydown.enter.prevent="submit"
                    />
                  </div>
                  <div class="text-body text-primary col-2 q-gutter-md">
                    <q-toggle
                      v-model="credentials.showqualifications"
                      color="info"
                    />
                  </div>
                </div>
                <div class="row items-start q-gutter-md">
                  <div class="text-body text-primary col-2 q-mt-xl q-gutter-md">
                    Events I will DJ
                  </div>
                  <div class="text-body text-primary col-7 q-gutter-md">
                    <q-select
                      v-model="selectedEventtype"
                      multiple

                      :options="eventtypes"
                      option-label="event"
                      label="DJ/Event Type"
                      label-color="primary"
                      outlined
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
                  <div class="text-body text-primary col-2 q-gutter-md">
                    <q-btn
                      flat
                      color="info"
                      label="Event Type"
                      no-caps
                      icon="add_circle"
                      @click="eventDiag = true"
                    />
                  </div>
                </div>
                <div class="row items-start q-gutter-md">
                  <div class="text-body text-primary col-2 q-mt-xl q-gutter-md">
                    Profile Share Link
                  </div>
                  <div class="text-body text-primary col-7 q-gutter-md">
                    <q-input
                      v-model="credentials.profilelink"
                      :rules="[requiredRule]"
                      label-width="3"
                      helper="Profile Share URL"
                      outlined
                      type="text"
                      dense
                      readonly
                      @keydown.enter.prevent="submit"
                    />
                  </div>
                  <div class="text-body text-primary col-2 q-gutter-md">
                    <q-toggle
                      v-model="credentials.showprofilelink"
                      color="info"
                    />
                  </div>
                </div>
              </q-card-section>
              <q-card-actions align="center">
                <q-btn
                  style="width: 212px; height: 50px;"
                  color="info"
                  align="center"
                  text-color="primary"
                  label="Continue to Bio"
                  no-caps
                  size="md"

                  @click="submit"
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
  <!-- </q-page> -->
  <q-dialog
    v-model="eventDiag"
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
      <q-card-section>
        <div class="row items-start q-gutter-md bg-secondary q-ml-xs ">
          <div class="text-body text-primary col-11 ">
            <q-select
              v-model="selectedCatEventtype"
              filter
              :options="eventtypes"
              option-label="eventtype"
              label="Event Category"
              label-color="primary"
              outlined
              use-chips
              hint="Type Category"
              transition-show="jump-up"
              transition-hide="jump-down"
              dense
            >
              <template #option="scope">
                <q-item v-bind="scope.itemProps">
                  <q-item-section>
                    <q-item-label>
                      {{ scope.opt.eventtype }}
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
            <br>
            <q-input
              v-model="credentials2.eventname"
              label-width="3"
              helper="Event Name"
              outlined
              type="text"
              dense
            />
            <br><br>
          </div>
        </div>
      </q-card-section>
      <q-card-actions align="center">
        <q-btn
          style="width: 212px; height: 50px;"
          color="info"
          align="center"
          text-color="primary"
          label="Submit"
          no-caps
          size="md"

          @click="submitEvent"
        />
      </q-card-actions>
      <q-card-section>
        <div class="row items-start q-gutter-md">
          <div class="text-body text-primary col-2 q-mt-lg q-gutter-md" />
          <div class="text-body text-info col-7 q-gutter-md">
            <q-chat-message
              name="DJEDDA"
              avatar="~/assets/djeddaAvatar2.png"
              :text="['Please select an event type category from the dropdown, then enter the name of your event type.']"
            />
          </div>
          <div class="text-body text-primary col-2" />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
  <q-dialog
    v-model="genreDiag"
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
      <q-card-section>
        <div class="row items-start q-gutter-md bg-secondary q-ml-xs ">
          <div class="text-body text-primary col-11 ">
            <q-input
              v-model="credentials3.genrename"
              label-width="3"
              helper="Genre Name"
              outlined
              type="text"
              dense
            />
            <br>
            <q-input
              v-model="credentials3.genredescription"
              label-width="3"
              helper="Genre Description"
              outlined
              type="textarea"
              dense
              multiline="true"
            />
            <br><br>
          </div>
        </div>
      </q-card-section>
      <q-card-actions align="center">
        <q-btn
          style="width: 212px; height: 50px;"
          color="info"
          align="center"
          text-color="primary"
          label="Submit"
          no-caps
          size="md"

          @click="submitGenre"
        />
      </q-card-actions>
      <q-card-section>
        <div class="row items-start q-gutter-md">
          <div class="text-body text-primary col-2 q-mt-lg q-gutter-md" />
          <div class="text-body text-info col-7 q-gutter-md">
            <q-chat-message
              name="DJEDDA"
              avatar="~/assets/djeddaAvatar2.png"
              :text="['Please enter the name of your music genre then add a short description.']"
            />
          </div>
          <div class="text-body text-primary col-2" />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from 'vue'
//import { useVuelidate } from '@vuelidate/core'
//import { required, email } from '@vuelidate/validators'
import auth from '../auth'
import { useAuthStore } from 'src/stores/auth'
//import auth from 'src/auth'
import { useRouter } from 'vue-router'
//import { useQuasar } from 'quasar'
//import { useAuthStore } from 'src/stores/auth';
const authStore = useAuthStore()


//const $q = useQuasar()
const eventDiag = ref(false)
const genreDiag = ref(false)
const router = useRouter()
const formName = ref()
const regions = ref([])
  const selectedRegion = ref()
  const eventtypes = ref([])
  const selectedEventtype = ref()
  const selectedCatEventtype = ref()
  const musicGenres = ref([])
  const selectedMusicGenres = ref()
  const group = ref()
// const credentials = ref({
//   artistname: authStore.artistname,
//   fullname: authStore.username,
//   showfullname: true,
//   email: '',
//   location: ''
// })
const credentials = ref({
  artistname: '',
  fullname: '',
  showfullname: true,
  email: '',
  showemail: false,
  location: '',
  showlocation: true,
  servicearea: {},
  birthdate: '',
  showbirthdate: true,
  experience: '',
  showexperience: true,
  gender: '',
  showgender: true,
  musicgenres: [],
  residences: '',
  showresidences: true,
  specialties: [],
  showspecialties: true,
  services: [],
  showservices: true,
  qualifications: '',
  showqualifications: true,
  events: [],
  presskit: '',
  showpresskit: true,
  profilelink: 'https://djhire/@' + authStore.djname,
  showprofilelink: true,
  status: authStore.profileStatus

})
const credentials2 = ref({
  eventname: 'Name',
  eventcategory: '',
  profileID: '',
  addtoprofile: true,
  email: '',
  })
  const credentials3 = ref({
  genrename: 'Name',
  genredescription: 'Description',
  profileID: '',
  addtoprofile: true,
  email: '',
  })

const requiredRule = val => (val && val.length > 0) || 'Please enter a value'
console.log(authStore.username)
//credentials.fullname.value = authStore.username
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
    },
    {
      label:"Prefer Not To Say", value:"unknown"
    }
  ]
const locationData = auth.getAllPostcodes().then(data => {
        console.log(data.data)
        regions.value = data.data
        //selectedRegion.value = ""
        // this.pagination = { page, rowsPerPage, rowsNumber, sortBy, descending }
      });
      console.log('data results locations:' + locationData)

      const musicGenresData = auth.getAllMusicGenres().then(data => {
        console.log(data.data)
        musicGenres.value = data.data
       // selectedMusicGenres.value = []
        // this.pagination = { page, rowsPerPage, rowsNumber, sortBy, descending }
      });
      console.log('data results :' + musicGenresData)

      const eventTypeData = auth.getAllEventTypes().then(data => {
        console.log(data.data)
        eventtypes.value = data.data
        // selectedEventtype.value = ""
        // this.pagination = { page, rowsPerPage, rowsNumber, sortBy, descending }
      });
      console.log('data results :' + eventTypeData)


const submit = async() => {
  formName.value.validate().then(success => {
    console.log(success)
    credentials.value.artistname = authStore.djname
    credentials.value.profilelink = 'https://djhire/@' + authStore.djname
    credentials.value.fullname = authStore.username
    credentials.value.email = authStore.email
    credentials.value.gender = group.value
    credentials.value.location = selectedRegion
    const latitude = selectedRegion.value[0].latitude
    const longitude = selectedRegion.value[0].longitude
    authStore.setProfileStatus('Artist Biography Incomplete')
    credentials.value.status = authStore.profileStatus
    console.log("coordinates1=",latitude)
    credentials.value.servicearea = { type: "Point", coordinates: [ longitude + ', ' + latitude] }
    console.log("coordinatess=",credentials.value.servicearea)
    credentials.value.musicgenres = selectedMusicGenres
    credentials.value.events = selectedEventtype
    console.log("credentials=",credentials.value)
    const profileData = auth.insertProfile(credentials).then(data => {
        console.log(data.data.insertedId)
        authStore.setProfileID(data.data.insertedId)

        // profiles.value = data.data
        // if(profiles.value.length !== 0) {
        //   isDatabaseResults.value = "Search found an artist named: " + profiles.value[0].DJName
        //   authStore.setUnique(5)
        // } else {
        //   isDatabase.value = false
        //   authStore.setUnique(4)
        // }
      })
      console.log(profileData)
  router.push({ path: `/bio/` })
})
}

const submitEvent = async() => {

    //credentials2.value.eventname = authStore.djname
    //credentials2.value.profileID = authStore.profileID
    credentials2.value.email = authStore.email
    credentials2.value.eventcategory = selectedCatEventtype.value.eventtype
    console.log("credentials2=",credentials2.value)
    const profileEvent = auth.insertEventType(credentials2).then(data => {
        console.log(data.data)

      })
      console.log(profileEvent)
      eventDiag.value = false
}

const submitGenre = async() => {

    //credentials2.value.eventname = authStore.djname
    //credentials2.value.profileID = authStore.profileID
    credentials3.value.email = authStore.email
    //credentials2.value.eventcategory = selectedCatEventtype.value.eventtype
    console.log("credentials3=",credentials3.value)
    const profileEvent = auth.insertGenre(credentials3).then(data => {
        console.log(data.data)

      })
      console.log(profileEvent)
      genreDiag.value = false
}

</script>
