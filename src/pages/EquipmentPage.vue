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
            spellcheck="true"
          >
            <q-card
              flat
              class="my-card my-font  bg-secondary"
            >
              <q-card-section>
                <div class="row items-start q-gutter-md">
                  <div class="text-h6 text-primary col-8">
                    Equipment
                  </div>
                  <div class="text-body text-primary col-2">
                    <!-- <br> Toggle Visibility on Profile -->
                  </div>
                </div>
              </q-card-section>
              <q-card-section>
                <div class="row items-start q-gutter-md">
                  <div class="text-body text-primary col-2 q-mt-lg q-gutter-md">
                    Equipment List<br>
                  </div>
                  <div class="text-body text-primary col-12 q-mt-lg q-gutter-md">
                    <q-table

                      :columns="columns"
                      row-key="_id"
                      :visible-columns="visibleColumns"
                      class="my-sticky-header-table my-font"
                      :rows="credentials"
                      title=""
                      no-cap
                      :loading="loading"
                    >
                      <template #body-cell-delete="props">
                        <q-td

                          :props="props"
                        >
                          <q-btn
                            color="info"
                            flat
                            dense
                            no-caps
                            icon="delete"
                            @click="onDeleteEquipment(props.key)"
                          />
                        </q-td>
                      </template>
                    </q-table>

                    <q-btn
                      label="Add Equipment"
                      color="info"
                      flat
                      no-caps
                      icon="add_circle"
                      @click="equipmentDiag = true"
                    />
                  </div>
                  <!-- <q-btn
                    label="Delete Selected Item"
                    color="info"
                    flat
                    no-caps
                    icon="delete"
                    @click="onDelete"
                  /> -->

                  <div class="text-body text-primary col-2">
                    <!-- <q-toggle
                      v-model="credentials.showfullbio"
                      color="info"
                    /> -->
                  </div>
                </div>
              </q-card-section>
              <q-card-section>
                <div class="flex flex-start q-gutter-md">
                  <div class="text-body text-primary col-2 q-mt-lg q-gutter-md">
                    Equipment Images<br>
                  </div>

                  <q-card
                    v-for="(item, index) in credentialsImages"
                    :key="item"
                    :ref="el => { if (el) options[item] = el}"
                    flat
                    dense
                    class="bg-secondary"
                    style="width:260px;"
                  >
                    <!-- {{ item }} -->
                    <q-card-section class="q-gutter-xs">
                      <div>
                        <q-img

                          :src="item"
                          style="width:240px;height:180px;"
                          fit="cover"
                          class="rounded-borders"
                        />
                        <q-btn-dropdown
                          style="top:-174px;right:-202px;z-index:1;"
                          dense
                          color="secondary"
                          text-color="primary"
                          no-caps
                        >
                          <q-list dense>
                            <q-item
                              v-close-popup
                              clickable
                              @click="currentImg = index; photoDiag = true"
                            >
                              <q-item-section avatar>
                                <q-avatar
                                  icon="add_circle"
                                />
                              </q-item-section>
                              <q-item-section>
                                <q-item-label>Edit Image</q-item-label>
                              </q-item-section>
                            </q-item>

                            <q-item
                              v-close-popup
                              clickable
                              @click="onDeleteAlbumbImage(index)"
                            >
                              <q-item-section avatar>
                                <q-avatar
                                  icon="delete"
                                />
                              </q-item-section>
                              <q-item-section>
                                <q-item-label>Delete</q-item-label>
                              </q-item-section>
                            </q-item>
                          </q-list>
                        </q-btn-dropdown>
                      </div>
                    </q-card-section>
                  </q-card>
                  <div class="text-body text-primary col-6">
                    <q-btn
                      label="Add New Image Slot"
                      color="info"
                      flat
                      no-caps
                      icon="add_circle"
                      @click="onNewImageSlot"
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
                  label="Complete Profile"
                  no-caps
                  size="md"
                  @click="onSubmitAllEquip"
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
    v-model="equipmentDiag"
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
            Category
            <q-input
              v-model="credentialsNew.category"
              label-width="3"
              helper="Audio Track Link"
              outlined
              type="text"
              dense
            />
          </div>
          <div class="text-body text-primary col-11 ">
            Name
            <q-input
              v-model="credentialsNew.Name"
              label-width="3"
              helper="Equipment Name"
              outlined
              type="text"
              dense
            />
          </div>
          <div class="text-body text-primary col-11 ">
            Description and Setup Instructions
            <q-input
              v-model="credentialsNew.Details"
              label-width="3"
              helper="Description"
              outlined
              type="textarea"
              dense
            />
          </div>
          <div class="text-body text-primary col-11 ">
            Can be Provided and Fee
            <q-input
              v-model="credentialsNew.Fee"
              label-width="3"
              helper="Hire Fee"
              outlined
              type="text"
              dense
            />
            <br>
          </div>
        </div>
      </q-card-section>
      <q-card-actions align="center">
        <q-btn
          color="info"
          align="center"
          text-color="primary"
          label="Submit"
          no-caps
          size="md"
          @click="submitEquipment"
        />
      </q-card-actions>
      <q-card-section>
        <div class="row items-start q-gutter-md">
          <div class="text-body text-primary col-2 q-mt-lg q-gutter-md" />
          <div class="text-body text-info col-7 q-gutter-md">
            <q-chat-message
              name="DJEDDA"
              avatar="~/assets/djeddaAvatar2.png"
              :text="['Make sure to select if each piece of equipment can be Lent out and what the price for that would be.']"
            />
          </div>
          <div class="text-body text-primary col-2" />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
  <q-dialog
    v-model="photoDiag"
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
        <!-- currentImg = {{ currentImg }} -->
      </q-bar>
      <!-- url="http://localhost:3000/updateProfileHeaderInit" -->
      <q-uploader
        :url="onStartComp"
        style="width:500px;height:500px;border-width:0px;"
        label="Upload Equipment Images"
        flat
        bordered
        multiple
        auto-upload
        max-files="3"
        accept="image/*"
        field-name="photo"
        :form-fields="[
          { name: 'profileID', value: authStore.profileID }
        ]"
        @rejected="onRejected"
        @uploaded="onUploaded"
      />
      <q-card-section>
        <div class="row items-start q-gutter-md">
          <!-- <q-img
            src="~assets/headerDefault.png"
            style="width:500px;"
          /> -->
          <div class="text-body text-primary col-2 q-mt-lg q-gutter-md" />

          <div class="text-body text-info col-7 q-gutter-md">
            <q-chat-message
              name="DJEDDA"
              avatar="~/assets/djeddaAvatar2.png"
              :text="['Drag and Drop image files in the box above or click the plus icon.']"
            />
          </div>
          <div class="text-body text-primary col-2" />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { ref, reactive } from 'vue'
import { Notify } from 'quasar'
//import { useVuelidate } from '@vuelidate/core'
//import { required, email } from '@vuelidate/validators'
import auth from '../auth'
import { useAuthStore } from 'src/stores/auth'
import { fromBlob } from 'image-resize-compress'
//import auth from 'src/auth'
import { useRouter } from 'vue-router'
//import { useQuasar } from 'quasar'
//import { useAuthStore } from 'src/stores/auth';
const authStore = useAuthStore()
const router = useRouter()
const loading = ref(false)
const equipmentDiag = ref(false)
const count = ref(0)
const options = reactive({})
const resizedBlob = ref(null)
const currentImg = ref(0)
const photoDiag = ref(false)
const credentials = ref([
                        {
                          id: 1,
                          category:'Speakers',
                          Name:'Sub Woofer',
                          EventTypes:'All',
                          Details:'(DEMO) Sub box for deep bass sounds',
                          CanProvide:'Yes',
                          Actions:'View'
                        },
                        {
                          id: 2,
                          category:'Speakers',
                          Name:'Main Stack',
                          EventTypes:'All',
                          Details:'(DEMO) Main box for mid-range sounds',
                          CanProvide:'Yes',
                          Actions:'View'
                        },
                        {
                          id: 3,
                          category:'DJ Decks',
                          Name:'Pioneer XDJ-RX3 Controller',
                          EventTypes:'All',
                          Details:'(DEMO) Main tool for mixing CD/USB',
                          CanProvide:'Yes',
                          Actions:'View'
                        },
                      ])
const credentialsNew= ref(
                        {
                          category:'Speakers',
                          Name:'Sub Woofer',
                          EventTypes:'All',
                          Details:'(DEMO) Sub box for deep bass sounds',
                          CanProvide:'True',
                          Fee:'$100',
                          Actions:'View'
                        }
                      )
const credentialsImages = ref([
 'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg',
 'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg',
 'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg'
])
const credentials2 = ref({
  UpdateField : "EquipmentImagesArray",
  UpdateValue : "test",
  UpdateIndex: 0,
  ProfileID : authStore.profileID,
  })
const credentials4 = ref({
    "UpdateField" : "Status",
    "UpdateValue" : 'Profile Pending Moderation',
    "ProfileID" : authStore.profileID,
    })
async function onDeleteAlbumbImage (index) {
  if (credentialsImages.value.length > 2) {
    credentialsImages.value.splice(index,1)
  } else {
  credentialsImages.value[currentImg.value] = 'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg'
  }
}
async function onDeleteEquipment (index) {

    credentials.value.splice(index,1)

}
async function onNewImageSlot () {
  credentialsImages.value.push('https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg')
}
const visibleColumns = ref(['category', 'name', 'eventtype', 'details', 'delete'])
const columns = ref([

        { name: 'category', label: 'Category', field: 'category', sortable: true },
        { name: 'name', label: 'Name', field: 'Name', sortable: true },
        { name: 'eventtypes', label: 'EventTypes', field: 'EventTypes', sortable: true },
        { name: 'details', label: 'Details', field: 'Details', sortable: true },
        { name: 'delete', label: 'Delete', field: '_id', format: val => `${val}` }
      ])
const submitEquipment = async() => {

    //credentials2.value.eventname = authStore.djname
    credentials.value.push(credentialsNew.value)
    credentialsNew.value.ProfileID = authStore.profileID
    credentials2.value.UpdateField = "EquipmentImagesArray"
    credentials2.value.UpdateValue = credentials.value

    console.log("credentials=",credentials.value)
    const profileEvent = auth.updateProfileEquip(credentialsNew).then(data => {
        console.log(data.data)
        //credentials.value.push(credentialsNew.value)
      })
      console.log(profileEvent)
      equipmentDiag.value = false
}
async function onStartComp (files) {
  console.log('options=',options)
  console.log('currentImg=',currentImg.value)
  console.log('count=',count.value)
  const file = files[0]
  resizedBlob.value = await fromBlob(file, 75, 'auto', 'auto', 'webp',)
  console.log(resizedBlob)
  console.log("files=", files)
  credentials2.value.Files = resizedBlob
  credentials2.value.FileName = files[0].name
  console.log("creds2=", credentials2)
  const profileHeaderData = auth.updateProfileHeader(credentials2).then(data => {
        console.log('s3=',data.data)
        credentials2.value.UpdateValue = data.data
        credentials2.value.UpdateIndex = currentImg.value
        credentials2.value.UpdateField = "EquipmentImages"
        console.log("creds3=", credentials2)
        const profileHeaderPhoto = auth.updateProfilePhotoEquip(credentials2).then(data2 => {
        console.log(data2.data)
        credentialsImages.value[currentImg.value] = data.data
        photoDiag.value = false
        //cropImage.value = credentialsImages.value[currentImg.value]
        Notify.create({
     // message: mapErrors[entry.failedPropValidation],
      message: 'File upload Successful',
      type: 'positive'
    })
        // uploadId.value = data.data.uploadId
        // uploadKey.value = data.data.key
        // fullPath.value = data.data.path
        })
        console.log(profileHeaderPhoto)
        console.log(data.data)
      })
      console.log(profileHeaderData)
      return { ok: true}
}
const onSubmitAllEquip = async() => {
  if(credentials.value[0].Details !== '(DEMO) Sub box for deep bass sounds') {

      authStore.setProfileStatus('Profile Pending Moderation')
      const profileStatus = auth.updateProfileStatus(credentials4).then(data => {
        console.log(data.data)


      })
      console.log(profileStatus)


  router.push({ path: `/complete/` })
  }
  else {
    Notify.create({
     // message: mapErrors[entry.failedPropValidation],
      message: 'Please delete the demo intems as a mininum to continue',
      type: 'negative',
      spinner: true
    })
  }
}
</script>
<style>
.my-sticky-header-table {
  /* height or max-height is important */
  height: 310px;
}
  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th {
    /* bg color is important for th; just specify one */
    background-color: #cccccc;
  }

  thead tr th {
    position: sticky;
    z-index: 1;
}
  thead tr:first-child th {
    top: 0;
  }

  tbody {
    /* height of all previous header rows */
    scroll-margin-top: 48px;
    text-color: #222222;
}
</style>
