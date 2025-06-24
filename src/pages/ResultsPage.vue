<template>
  <q-page
    padding
    class="bg-secondary
    "
  >
    <div
      class="row justify-between bg-primary"
      style="margin-left:-24px;margin-right:-24px;margin-top: -40px;padding-bottom: 10px;padding-top:20px;padding-left:40px;"
    >
      <div class="col-2 col-md-2">
      <!-- .colLeft -->
      </div>
      <div class="col-7">
        <q-card
          flat
          class="my-card my-font bg-primary"
        >
          <div
            v-if="profiles.length === 0"
            class="text-h6 my-font text-secondary"
          >
            Too Many DJs Found
            <div>
              <q-img
                src="~assets/path-320.svg"
                style="width:200px;"
              />
            </div>
          </div>
          <div
            v-else
            class="text-h6 my-font text-secondary"
          >
            &nbsp;&nbsp;&nbsp;&nbsp;{{ profiles.length }} DJs Found
            <div>
              <q-img
                src="~assets/path-320.svg"
                style="width:200px;"
              />
            </div>
          </div>
        </q-card>
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
      <div class="col-7 q-ma-md">
        <div
          class="row justify-between bg-secondary"
        >
          <div
            class="
          col-4
          col-md-3"
          >
            <q-card

              flat
              bordered
              class="my-card my-font"
            >
              <q-card-section class="text-primary text-h6">
                Filters
              </q-card-section>
              <q-card-section
                class="q-pt-none"
              >
                <div class="q-pa-none ">
                  <q-select
                    v-model="selectedRegion"
                    multiple
                    style="width: 230px"
                    :options="regions"
                    option-label="MAP_LABEL"
                    label="Location"
                    label-color="primary"
                    borderless
                    use-chips
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

                <!-- <div class="q-pa-sm text-grey">
                    Show me DJs from
                  </div> -->
              </q-card-section>
              <q-card-section class="q-pt-none">
                <div class="q-pa-sl ">
                  <q-select
                    v-model="selectedEventtype"
                    multiple
                    style="width: 230px"
                    :options="eventtypes"
                    option-label="event"
                    label="DJ/Event Type"
                    label-color="primary"
                    borderless
                    use-chips
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

                <!-- <div class="q-pa-sm text-grey">
                    Type of Event
                  </div> -->
              </q-card-section>
              <q-card-section class="q-pt-none">
                <div class="q-pa-sl ">
                  <q-select
                    v-model="selectedMusicGenres"
                    style="width: 230px"
                    :options="musicGenres"
                    option-label="Name"
                    label="Music Style"
                    label-color="primary"
                    multiple
                    borderless
                    use-chips
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
              </q-card-section>
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
                  multiline
                  outlined
                  label="Input Keywords"
                  dense
                />
              </q-card-section>
              <q-card-section align="center">
                <q-btn
                  dense
                  color="primary"
                  label="Reset"
                  no-caps

                  @click="searchProfilesClicked"
                />
&nbsp;
                <q-btn
                  dense
                  color="info"
                  label="Apply Filters"
                  no-caps
                  text-color="primary"
                  @click="handleResetClicked"
                />
              </q-card-section>
            </q-card>
          </div>
          <div class="col-8">
            <q-card
              flat
              borderless
              class="my-card my-font bg-secondary"
            >
              <div
                class="my-font text-secondary"
              >
                <q-table
                  :rows="profiles"
                  :columns="columns"
                  row-key="_id"
                  hide-header

                  flat
                  class="bg-secondary"
                  card-class="bg-secondary my-font"
                  virtual-scroll-slice-size="3"
                  style="width:700px;"
                  title=""
                  no-cap
                >
                  <!-- <template #body-cell-profileImage="props">
                    <q-td
                      style="height:180px;width:180px;border:0px;"
                      :props="props"
                    >
                      <div v-if="props.value === 'undefined'">
                        <q-img

                          class="rounded-borders q-gutter-xs"
                          style="height:180px;width:180px;"
                          src="https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg"
                        />
                      </div>
                      <div v-else>
                        <q-img

                          class="rounded-borders q-gutter-xs"
                          style="height:180px;width:180px;;border:0px;"
                          :src="props.value"
                        />
                      </div>
                    </q-td>
                  </template>
                  <template #body-cell-name="props">
                    <td
                      style="height:80px;border:0px;"
                      class="text-primary"
                      :props="props"
                    >
                      <div class="text-h5 text-primary absolute-top q-ma-sm">
                        {{ props.value }}
                      </div>
                    </td>
                  </template>
                  <template #body-cell-genres="props">
                    <td
                      style="height:80px;width:80px;left:-42px;top:-50px;border:0px;"
                      class="text-primary"
                      :props="props"
                    >
                      <div
                        v-for="(item) in props.value"
                        :key="item"
                        class="text-body text-black text-left q-ma-xs"
                        style="display:inline-block;"
                      >
                        {{ item.Name }},
                      </div>
                    </td>
                  </template>
                  <template #body-cell-years="props">
                    <td
                      style="left:-434px;top:-40px;border:0px;"
                      class="text-primary"
                      :props="props"
                    >
                      <span class="text-body text-grey text-center q-ma-none">
                        <br><br> Years of XP
                      </span>
                      <div
                        class="text-body text-primary text-center q-ma-none"
                      >
                        {{ props.value }}
                      </div>
                    </td>
                  </template>
                  <template #body-cell-age="props">
                    <td
                      style="left:-440px;top:-40px;border:0px;"
                      class="text-primary"
                      :props="props"
                    >
                      <div class="text-body text-grey text-center q-ma-none">
                        <br> <br>Age
                      </div>
                      <div class="text-body text-primary text-center q-ma-none">
                        &nbsp;&nbsp;{{ props.value }}
                      </div>
                    </td>
                  </template>
                  <template #body-cell-short="props">
                    <td
                      style="left:-650px;top:30px;border:0px;"
                      class="text-primary"
                      :props="props"
                    >
                      <div class="text-small text-grey text-left q-ma-sm">
                        {{ props.value }}
                      </div>
                    </td>
                  </template>
                  <template #body-cell-view="props">
                    <td
                      style="left:-780px;top:70px;border:0px;z-index:20;"
                      class="text-primary"
                      :props="props"
                    >
                      <div class="text-body text-grey text-left q-ma-sm">
                        <q-btn

                          color="info"
                          align="center"
                          text-color="primary"
                          label="View Profile"
                          no-caps
                          size="md"
                          @click="onViewProfile(props.value)"
                        />
                      </div>
                    </td>
                  </template> -->
                  <template
                    #body="props"
                  >
                    <q-card
                      :props="props"
                      dense
                      bordered
                      flat
                      class="bg-white q-pa-xs"
                      style="height: 200px;width:600px;"
                    >
                      <q-item :key="_id">
                        <q-item-section>
                          <q-img

                            class="rounded-borders q-gutter-xs"
                            style="height:180px;width:180px;"
                            :src="props.row.ProfileImageSelection"
                          />
                        </q-item-section>
                      </q-item>
                      <q-item style="left:200px;top:-190px;display:inline-block;">
                        <q-item-section>
                          <q-item-label class="text-h5 text-primary q-pl-sm">
                            {{ props.row.DJName }}
                          </q-item-label>
                        </q-item-section>
                        <q-item-section>
                          <q-item-label
                            caption
                            class="text-primary"
                            style="left:10px"
                          >
                            {{ props.row.EventTypes[0].event }}, {{ props.row.EventTypes[1].event }}
                          </q-item-label>
                        </q-item-section>
                        <q-item style="left:-8px;">
                          <q-item-section class="q-py-sm">
                            <q-item-label caption>
                              Years Experience:
                            </q-item-label>
                          </q-item-section>
                          <q-item-section>
                            <q-item-label class="text-body2">
                              {{ props.row.Experience }} years
                            </q-item-label>
                          </q-item-section>

                          <q-item-section>
                            <q-item-label
                              caption
                            >
                              Age:
                            </q-item-label>
                          </q-item-section>
                          <q-item-section class="q-py-none q-my-none">
                            <q-item-label class="text-body2 q-py-none">
                              {{ (2025 - parseInt(props.row.Birthday.substring(6,10))) }}
                            </q-item-label>
                          </q-item-section>
                        </q-item>
                        <q-item-section>
                          <q-item-label
                            caption
                            class="text-grey-5 q-pl-sm q-pb-sm"
                            style="width:360px;"
                          >
                            {{ props.row.SmallBio }}
                          </q-item-label>
                        </q-item-section>
                        <q-item-section style="width:120px">
                          <q-btn

                            color="info"
                            align="center"
                            text-color="primary"
                            label="View Profile"
                            no-caps
                            size="md"
                            @click="onViewProfile(props.row._id)"
                          />
                        </q-item-section>
                      </q-item>
                    </q-card>
                  </template>
                </q-table>
              </div>
            </q-card>
          </div>
        </div>
      </div>
      <div class="col-2 col-md-2 my-font">
      <!-- .colRight yellow -->
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import auth from '../auth'
import { useQuasar } from 'quasar'
import { useRouter} from 'vue-router'

//import { useAuthStore } from 'src/stores/auth'

//const authStore = useAuthStore()
const router = useRouter()
const $q = useQuasar()
const regions = ref([])
const profiles = ref([])
//const yearNow = ref(date.Now())
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
  const columns = ref([
       { name: 'profileImage', label: '', align:'left', field: 'ProfileImageSelection', format: val => `${val}`, sortable: false },
        { name: 'name', label: '', align:'left', field: 'DJName', sortable: false },
        { name: 'genres', label: '', align:'left', field: 'MusicGenres', sortable: false },
        { name: 'years', label: '', align:'left', field: 'Experience', sortable: false },
        { name: 'age', label: '', align:'left', field: 'Birthday', sortable: false },
        { name: 'short', label: '', align:'left', field: 'SmallBio', sortable: false },
        { name: 'view', label: 'View', field: '_id', format: val => `${val}` }

      ])



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

function onViewProfile ( profileID ) {
  $q.localStorage.setItem('viewProfileID', profileID)
  router.push({ path: `/view/` })
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

      const profilesData = auth.getApprovedProfiles().then(data => {
        console.log('profiles=',data.data)
        profiles.value = data.data
      //   //selectedRegion.value = ""
      //   // this.pagination = { page, rowsPerPage, rowsNumber, sortBy, descending }
      })
      console.log('data results profiles:' + profilesData)


    } catch (e) {
      //no data saved
      console.log(e)
    }
  })


</script>
