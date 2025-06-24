<template>
  <div class="row justify-between bg-primary">
    <div class="col-2 col-md-2 my-font">
      <!-- .colLeft -->
    </div>
    <div class="col-8 col-md-8">
      <div
        class="col-2 col-md-2  my-font text-h4 text-white q-ma-xl"
      >
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Create Profile
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
            spellcheck="true"
          >
            <q-card
              flat
              class="my-card my-font bg-secondary q-gutter-md"
            >
              <div class="row items-start q-gutter-md">
                <div class="text-h6 text-primary col-8">
                  Photos
                </div>

                <div class="text-body text-primary col-2">
                  <!-- <br> Toggle Visibility on Profile -->
                </div>
                <div class="row text-primary col-2 q-mt-lg q-gutter-md">
                  Header Images 0/3
                </div>
              </div>

              <div class="flex flex-start q-gutter-md">
                <!-- <transition name="q-transition--scale"> -->
                <!-- :ref="el => { if (el) options[item] = el }" -->
                <q-card
                  v-for="(item, index) in credentials"
                  :key="item"
                  :ref="el => { if (el) options[item] = el}"
                  flat
                  dense
                  class="bg-secondary"
                  style="width:260px;"
                >
                  <q-card-section class="q-gutter-xs">
                    <div>
                      <q-img
                        v-if="selHeader === index"
                        :src="item"
                        style="width:240px;height:180px;"
                        fit="cover"
                        class="rounded-borders"
                      >
                        <div class="absolute-top text-caption">
                          Image Selected
                        </div>
                      </q-img>

                      <q-img
                        v-else
                        :src="item"
                        style="width:240px;height:180px"
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
                            @click="currentImg = index; cropDiag = true"
                          >
                            <q-item-section avatar>
                              <q-avatar
                                icon="crop_free"
                              />
                            </q-item-section>
                            <q-item-section>
                              <q-item-label>Crop Image</q-item-label>
                            </q-item-section>
                          </q-item>
                          <q-item
                            v-close-popup
                            clickable
                            @click="currentImg = index; onSelHeader(index, item)"
                          >
                            <q-item-section avatar>
                              <q-avatar
                                icon="select_all"
                              />
                            </q-item-section>
                            <q-item-section>
                              <q-item-label>Select Image</q-item-label>
                            </q-item-section>
                          </q-item>
                          <q-item
                            v-close-popup
                            clickable
                            @click="onDelete"
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
                <!-- </transition> -->
              </div>
              <div class="row items-start q-gutter-md">
                <div class="row text-primary col-2 q-mt-lg q-gutter-md">
                  Profile Images 0/3
                </div>
              </div>
              <div class="flex flex-start q-gutter-md">
                <q-card
                  v-for="(item, index) in credentials3"
                  :key="item"
                  :ref="el => { if (el) options[item] = el}"
                  flat
                  dense
                  class="bg-secondary"
                  style="width:260px;"
                >
                  <q-card-section class="q-gutter-xs">
                    <div>
                      <q-img
                        v-if="selProfile === index"
                        :src="item"
                        style="width:240px;height:180px;"
                        fit="cover"
                        class="rounded-borders"
                      >
                        <div class="absolute-top text-body">
                          Selected
                        </div>
                      </q-img>
                      <q-img
                        v-else
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
                            @click="currentImg = index; photoProfileDiag = true"
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
                            @click="currentImg = index; cropProfileDiag = true"
                          >
                            <q-item-section avatar>
                              <q-avatar
                                icon="crop_free"
                              />
                            </q-item-section>
                            <q-item-section>
                              <q-item-label>Crop Image</q-item-label>
                            </q-item-section>
                          </q-item>
                          <q-item
                            v-close-popup
                            clickable
                            @click="currentImg = index; onSelProfile(index, item)"
                          >
                            <q-item-section avatar>
                              <q-avatar
                                icon="select_all"
                              />
                            </q-item-section>
                            <q-item-section>
                              <q-item-label>Select Image</q-item-label>
                            </q-item-section>
                          </q-item>
                          <q-item
                            v-close-popup
                            clickable
                            @click="onDeleteProfile"
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
                      <!-- <q-btn
                        label="Add Header Image"
                        color="info"
                        flat
                        no-caps
                        icon="add_circle"
                        @click="currentImg = index; photoProfileDiag = true"
                      /><br>
                      <q-btn
                        label="Delete Image"
                        color="info"
                        flat
                        no-caps
                        icon="delete"
                        @click="onDeleteProfile"
                      /><br>
                      <q-btn
                        label="Crop"
                        color="info"
                        flat
                        no-caps
                        icon="crop_free"
                        @click="currentImg = index; cropProfileDiag = true"
                      /><br>
                      <q-btn
                        label="Select Image"
                        color="info"
                        flat
                        no-caps
                        icon="select_all"
                        @click="onSelProfile(index)"
                      /> -->
                    </div>
                  </q-card-section>
                </q-card>
              </div>
              <div class="row items-start q-gutter-md">
                <div class="text-h6 text-primary col-1">
                  Albums
                </div>

                <div class="text-body text-primary col-6">
                  <q-btn
                    label="Add New Album"
                    color="info"
                    flat
                    no-caps
                    icon="add_circle"
                    disable
                    @click="currentImg = index; photoDiag = true"
                  />
                </div>
              </div>
              <div
                v-for="(item) in credentialsAlbumbs"
                :key="item"
                class="row items-start q-gutter-md"
              >
                <div class="row text-primary col-1 q-mt-lg q-gutter-md">
                  {{ item.title }}
                </div>
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
              <div class="flex flex-start q-gutter-md">
                <q-card
                  v-for="(item, index) in credentialsAlbumbImages"
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
                            @click="currentImg = index; photoProfileAlbumDiag = true"
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
                      <!-- <q-btn
                        label="Add Album Image"
                        color="info"
                        flat
                        no-caps
                        icon="add_circle"
                        @click="currentImg = index; photoProfileAlbumDiag = true"
                      /><br>
                      <q-btn
                        label="Delete Image"
                        color="info"
                        flat
                        no-caps
                        icon="delete"
                        @click="onDeleteAlbumbImage(index)"
                      /><br> -->
                      <!-- <q-btn
                        label="Crop"
                        color="info"
                        flat
                        no-caps
                        icon="crop_free"

                        @click="currentImg = index; cropDiag = true"
                      /> -->
                    </div>
                  </q-card-section>
                </q-card>
              </div>

              <q-card-actions align="center">
                <q-btn
                  style="width: 212px; height: 50px;"
                  color="info"
                  align="center"
                  text-color="primary"
                  label="Continue to Videos"
                  no-caps
                  size="md"
                  @click="onSubmitPhotos"
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
        label="Upload Header Images"
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
          <q-img
            src="~assets/headerDefault.png"
            style="width:500px;"
          />
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
  <q-dialog
    v-model="photoProfileDiag"
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
      <!-- url="http://localhost:3000/updateProfileHeaderInit" -->
      <q-uploader
        :url="onStartProfileComp"
        style="width:500px;height:500px;border-width:0px;"
        label="Upload Profile Images"
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
          <q-img
            src="~assets/profileDefault.png"
            style="width:500px;"
          />
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
  <q-dialog
    v-model="photoProfileAlbumDiag"
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
      <!-- url="http://localhost:3000/updateProfileHeaderInit" -->
      <q-uploader
        :url="onStartProfileAlbumbPhotoComp"
        style="width:500px;height:500px;border-width:0px;"
        label="Upload Albumb Images"
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
            src="~assets/profileDefault.png"
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
  <q-dialog
    v-model="cropDiag"
    backdrop-filter="blur(30px) saturate(150%)"
  >
    <q-card
      align="center"
      class="col-8 mycard bg-primary"
      style="width:500px"
    >
      <q-bar>
        <q-img
          src="~assets/icon.png"
          style="width:40px;"
        />
      </q-bar>
      <div class="row block q-gutter-md">
        <!--   <div class="text-body text-primary col-0 q-mt-lg q-gutter-md" />-->
        <!-- <div class="position-relative"> -->
        <cropper
          ref="cropper"
          :src="cropImage"
          :auto-zoom="true"
          :canvas="canvasSize"
          :stencil-props="{
            handlers: {
              eastNorth: true,
              north: false,
              westNorth: true,
              west: false,
              westSouth: true,
              south: false,
              eastSouth: true,
              east: false,
            },
            moveable: true,
            resizable: true,
            rotate: true,
            aspectRatio: 2.6,
          }"
          :stencil-size="stencilSize.value"
          :resize-image="{ adjustStencil: true}"
          image-restriction="stencil"
          class="upload-cropper"
        />
      <!-- </div>-->
      </div>
      <q-card-actions
        align="center"
        style="width:400px"
      >
        <q-list dense>
          <q-item>
            <q-item-section side>
              <q-icon
                name="zoom_out"
                color="white"
              />
            </q-item-section>
            <q-item-section style="width:300px">
              <q-slider
                v-model="zoomLevel"
                :min="0"
                :max="10"
                color="white"
                @change="onZoom()"
              />
            </q-item-section>
            <q-item-section side>
              <q-icon
                name="zoom_in"
                color="white"
              />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-actions>
      <q-card-actions align="center">
        <q-btn
          icon="rotate_right"
          label="Rotate Right"
          color="white"
          flat

          style="background: rgba(0, 0, 0, .3)"
          @click="onRotate(90)"
        />
        <q-btn
          icon="rotate_left"
          label="Rotate Left"
          color="white"
          flat
          style="background: rgba(0, 0, 0, .3)"
          @click="onRotate(-90)"
        />
      </q-card-actions>
      <q-card-actions align="center">
        <q-btn
          style="width: 212px; height: 50px;"
          color="info"
          align="center"
          text-color="primary"
          label="Crop and Save"
          no-caps
          size="md"
          @click="onCroppedHeader()"
        />
      </q-card-actions>
      <q-card-section>
        <div class="row items-start q-gutter-md">
          <div class="text-body text-primary col-2 q-mt-lg q-gutter-md" />

          <div class="text-body text-info col-7 q-gutter-md">
            <q-chat-message
              name="DJEDDA"
              avatar="~/assets/djeddaAvatar2.png"
              :text="['Move the select rectangle to crop the image. You can also zoom and rotate the image.']"
            />
          </div>
          <div class="text-body text-primary col-2" />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
  <q-dialog
    v-model="cropProfileDiag"
    backdrop-filter="blur(30px) saturate(150%)"
  >
    <q-card
      align="center"
      class="col-8 mycard bg-primary"
      style="width:500px"
    >
      <q-bar>
        <q-img
          src="~assets/icon.png"
          style="width:40px;"
        />
      </q-bar>
      <div class="row block q-gutter-md">
        <!--   <div class="text-body text-primary col-0 q-mt-lg q-gutter-md" />-->
        <!-- <div class="position-relative"> -->
        <cropper
          ref="cropperp"
          :src="cropProfileImage"
          :auto-zoom="true"
          :canvas="canvasSize"
          :stencil-props="{
            handlers: {
              eastNorth: true,
              north: false,
              westNorth: true,
              west: false,
              westSouth: true,
              south: false,
              eastSouth: true,
              east: false,
            },
            moveable: true,
            resizable: true,
            rotate: true,
            aspectRatio: 1,
          }"
          :stencil-size="stencilSize.value"
          :resize-image="{ adjustStencil: true}"
          image-restriction="stencil"
          class="upload-cropper"
        />
      <!-- </div>-->
      </div>
      <q-card-actions
        align="center"
        style="width:400px"
      >
        <q-list dense>
          <q-item>
            <q-item-section side>
              <q-icon
                name="zoom_out"
                color="white"
              />
            </q-item-section>
            <q-item-section style="width:300px">
              <q-slider
                v-model="zoomLevel"
                :min="0"
                :max="10"
                color="white"
                @change="onZoomp()"
              />
            </q-item-section>
            <q-item-section side>
              <q-icon
                name="zoom_in"
                color="white"
              />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-actions>
      <q-card-actions align="center">
        <q-btn
          icon="rotate_right"
          label="Rotate Right"
          color="white"
          flat

          style="background: rgba(0, 0, 0, .3)"
          @click="onRotatep(90)"
        />
        <q-btn
          icon="rotate_left"
          label="Rotate Left"
          color="white"
          flat
          style="background: rgba(0, 0, 0, .3)"
          @click="onRotatep(-90)"
        />
      </q-card-actions>
      <q-card-actions align="center">
        <q-btn
          style="width: 212px; height: 50px;"
          color="info"
          align="center"
          text-color="primary"
          label="Crop and Save"
          no-caps
          size="md"
          @click="onCroppedProfile()"
        />
      </q-card-actions>
      <q-card-section>
        <div class="row items-start q-gutter-md">
          <div class="text-body text-primary col-2 q-mt-lg q-gutter-md" />

          <div class="text-body text-info col-7 q-gutter-md">
            <q-chat-message
              name="DJEDDA"
              avatar="~/assets/djeddaAvatar2.png"
              :text="['Move the select rectangle to crop the image. You can also zoom and rotate the image.']"
            />
          </div>
          <div class="text-body text-primary col-2" />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { ref, reactive, useTemplateRef } from 'vue'
import { Notify } from 'quasar'
//import { useVuelidate } from '@vuelidate/core'
//import { required, email } from '@vuelidate/validators'
//import auth from '../auth'
import { useAuthStore } from 'src/stores/auth'
import auth from 'src/auth'
import { useRouter } from 'vue-router'
//import { useQuasar } from 'quasar'
//import { useAuthStore } from 'src/stores/auth';
import { fromBlob } from 'image-resize-compress'
//import Cropper from 'cropperjs'
//import 'cropperjs/dist/cropper.css'
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css'
const authStore = useAuthStore()
const router = useRouter()

const photoDiag = ref(false)
const photoProfileDiag = ref(false)
//const photoAlbumDiag = ref(false)
const photoProfileAlbumDiag = ref(false)
const cropDiag = ref(false)
const cropProfileDiag = ref(false)

const canvasSize = {
  minHeight:600,
  minWidth:600,
  maxHeight:600,
  maxWidth:600
}
const stencilSize = {
  minHeight:600,
  minWidth:200,
  maxHeight:600,
  maxWidth:200
}
// const stencilProfileSize = {
//   maxHeight:200,
//   maxWidth:200
// }
const resizedBlob = ref(null)
// const chunkSize = 500000
// const numberOfParts = ref(0)
// const uploadId = ref('')
// const uploadKey = ref('')
// const fullPath = ref('')
// const signedUrls = ref([])
// const filePart = ref()
// const fileParts = ref([])
// const currentPart = ref(0)
// const currentChunk = ref(0)
const mapErrors = {
  accept: 'Only image files please!',
  'max-file-size': 'File is too Large',
  'max-total-size': 'Files are too Large'
  //413: 'Payload Too Large'
}
const credentialsAlbumbs = ref([
  {
  title: 'Default',
  titleImage:'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg',
   albumImages: [
 'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg',
 'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg',
 'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg'
 ] },
])
const credentialsAlbumbImages = ref([
 'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg',
 'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg',
 'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg'
])
// const credentialsHeaderRow = ref([
//   { id: 1,
//     chosen: true,
//     image:'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg' },
//   { id: 2,
//     chosen: false,
//     image:'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg' },
//   { id: 3,
//     chosen: false,
//     image:'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg' },
// ])
// const credentials = ref({
//   header1: 'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg',
//   header2: 'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg',
//   header3: 'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg',

// })
const credentials = ref([
 'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg',
 'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg',
 'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg'
])
const credentials3 = ref([
 'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg',
 'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg',
 'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg'
])

const credentials2 = ref({
  UpdateField : "HeaderImagesArray",
  UpdateValue : "test",
  UpdateIndex: 0,
  ProfileID : authStore.profileID,

})
const credentials4 = ref({
    "UpdateField" : "Status",
    "UpdateValue" : 'Artist Videos Incomplete',
    "ProfileID" : authStore.profileID,
    })
const credentials5 = ref({
  UpdateField : "",
  UpdateValue : "test",
  UpdateIndex: 0,
  ProfileID : "",

})
console.log("vreds2=", credentials2)
const myCropper = useTemplateRef('cropper')
const myCropperp = useTemplateRef('cropperp')
const count = ref(0)
//const obj = reactive({ count })
//const imgArray = ref({})
const options = reactive({})
const currentImg = ref(0)
const zoomLevel = ref(0)
const croppedBlob = ref(null)
const cropImage = ref(null)
const cropProfileImage = ref(null)
const selHeader = ref(90)
const selProfile = ref(90)
async function onDelete () {
  credentials.value[currentImg.value] = 'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg'
}
async function onDeleteProfile () {
  credentials3.value[currentImg.value] = 'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg'
}
async function onDeleteAlbumbImage (index) {
  if (credentialsAlbumbImages.value.length > 2) {
    credentialsAlbumbImages.value.splice(index,1)
  } else {
  credentialsAlbumbImages.value[currentImg.value] = 'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg'
  }
}
async function onNewImageSlot () {
  credentialsAlbumbImages.value.push('https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg')
}
async function onSelHeader (index, item) {
  selHeader.value = index
  credentials5.value.UpdateValue = item
  credentials5.value.UpdateValue = credentials.value[currentImg.value]
        credentials5.value.UpdateField = "HeaderImageSelection"
        credentials5.value.ProfileID = authStore.profileID
        console.log("creds5=", credentials5)
        const profileHeaderPhoto = auth.updateProfileImageSel(credentials5).then(data2 => {
        console.log(data2.data)
        //credentials.value[currentImg.value] = data.data

    })
    console.log("profileHeaderPhoto", profileHeaderPhoto)
}
async function onSelProfile (index, item) {
  selProfile.value = index
  authStore.setProfileImage = credentials3.value[currentImg.value]
  credentials5.value.UpdateValue = item
  credentials5.value.UpdateValue = credentials3.value[currentImg.value]
        credentials5.value.UpdateField = "ProfileImageSelection"
        credentials5.value.ProfileID = authStore.profileID
        console.log("creds5=", credentials5)
        const profileHeaderPhoto = auth.updateProfileProfImageSel(credentials5).then(data2 => {
        console.log(data2.data)
        //credentials.value[currentImg.value] = data.data

    })
    console.log("profileHeaderPhoto", profileHeaderPhoto)
}
// async function onCropperHederChange() {
//   cropImage.value = credentials.value[currentImg.value]
//  console.log(cropImage)


// }
async function onStartComp (files) {
  console.log('options=',options)
  console.log('currentImg=',currentImg.value)
  console.log('count=',count.value)
  const file = files[0]
  resizedBlob.value = await fromBlob(file, 80, 'auto', 'auto', 'webp',)
  console.log(resizedBlob)
  console.log("files=", files)
  credentials2.value.Files = resizedBlob
  credentials2.value.FileName = files[0].name
  console.log("creds2=", credentials2)
  const profileHeaderData = auth.updateProfileHeader(credentials2).then(data => {
        console.log('s3=',data.data)
        credentials2.value.UpdateValue = data.data
        credentials2.value.UpdateIndex = currentImg.value
        console.log("creds3=", credentials2)
        const profileHeaderPhoto = auth.updateProfilePhoto(credentials2).then(data2 => {
        console.log(data2.data)
        credentials.value[currentImg.value] = data.data
        photoDiag.value = false
        cropImage.value = credentials.value[currentImg.value]
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
async function onStartProfileComp (files) {
  const file = files[0]
  const resizedBlob = await fromBlob(file, 80, 'auto', 'auto', 'webp',)
  console.log(resizedBlob)
  console.log("files=", files)
  credentials2.value.Files = resizedBlob
  credentials2.value.FileName = files[0].name
  // console.log("creds2=", credentials2)
  const profileHeaderData = auth.updateProfileHeader(credentials2).then(data => {
        console.log('s3=',data.data)
        credentials2.value.UpdateValue = data.data
        credentials2.value.UpdateIndex = currentImg.value
        credentials2.value.UpdateField = "ProfileImagesArray"
        console.log("creds3=", credentials2)
        const profileHeaderPhoto = auth.updateProfilePhotoProf(credentials2).then(data2 => {
        console.log(data2.data)
        credentials3.value[currentImg.value] = data.data
        photoProfileDiag.value = false
        cropProfileImage.value = credentials3.value[currentImg.value]
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
async function onStartProfileAlbumbPhotoComp (files) {
  const file = files[0]
  const resizedBlob = await fromBlob(file, 80, 'auto', 'auto', 'webp',)
  console.log(resizedBlob)
  console.log("files=", files)
  credentials2.value.Files = resizedBlob
  credentials2.value.FileName = files[0].name
  // console.log("creds2=", credentials2)
  const profileHeaderData = auth.updateProfileHeader(credentials2).then(data => {
        console.log('s3=',data.data)
        credentials2.value.UpdateValue = data.data
        credentials2.value.UpdateIndex = currentImg.value
        credentials2.value.UpdateField = "DefaultAlbumbImagesArray"
        console.log("creds3=", credentials2)
        const profileHeaderPhoto = auth.updateProfilePhotoAlb(credentials2).then(data2 => {
        console.log(data2.data)
        credentialsAlbumbImages.value[currentImg.value] = data.data
        photoProfileAlbumDiag.value = false
        cropProfileImage.value = credentials3.value[currentImg.value]
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
async function onCroppedHeader () {
  const { canvas } = myCropper.value.getResult()
  console.log(canvas)
  const form = new FormData()
  canvas.toBlob(blob => {
    form.append('file', blob)
    croppedBlob.value = blob
    console.log('blob=',blob)

  }, 'image/png')
  //const file =  canvas.toDataURL()
  credentials.value[currentImg.value] = canvas.toDataURL()
  const  files = canvas.toDataURL()
  console.log(files)
  //const resizedBlob = await fromBlob(files, 100, 'auto', 'auto', 'webp',)
  const resizedBlob = files
  credentials2.value.files = resizedBlob
  credentials2.value.FileName = "cropped"
  console.log("creds2=", credentials2)
  const profileHeaderData = auth.updateProfileHeader(credentials2).then(data => {
        console.log('s3=',data.data)
        credentials2.value.UpdateValue = data.data
        credentials2.value.UpdateIndex = currentImg.value
        console.log("creds3=", credentials2)
        const profileHeaderPhoto = auth.updateProfilePhoto(credentials2).then(data2 => {
        console.log("data2=",data2.data)
        //credentials.value[currentImg.value] = data.data
        cropDiag.value = false
        cropImage.value = credentials.value[currentImg.value]
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
async function onCroppedProfile () {
  const { canvas } = myCropperp.value.getResult()
  console.log(canvas)
  const form = new FormData()
  canvas.toBlob(blob => {
    form.append('file', blob)
    croppedBlob.value = blob
    console.log('blob=',blob)

  }, 'image/png')
  //const file =  canvas.toDataURL()
  credentials3.value[currentImg.value] = canvas.toDataURL()
  const  files = canvas.toDataURL()
  console.log(files)
  //const resizedBlob = await fromBlob(files, 100, 'auto', 'auto', 'webp',)
  const resizedBlob = files
  credentials2.value.files = resizedBlob
  credentials2.value.FileName = "cropped"
  console.log("creds2=", credentials2)
  const profileHeaderData = auth.updateProfileHeader(credentials2).then(data => {
        console.log('s3=',data.data)
        credentials2.value.UpdateValue = data.data
        credentials2.value.UpdateIndex = currentImg.value
        console.log("creds3=", credentials2)
        const profileHeaderPhoto = auth.updateProfilePhotoProf(credentials2).then(data2 => {
        console.log(data2.data)
        //credentials.value[currentImg.value] = data.data
        cropProfileDiag.value = false
        cropProfileImage.value = credentials3.value[currentImg.value]
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
function onRejected ( rejectedEntries ) {
  rejectedEntries.forEach(entry => {
    Notify.create({
     // message: mapErrors[entry.failedPropValidation],
      message: 'Error file did not upload ' + mapErrors[entry.failedPropValidation],
      type: 'negative'
    })
  })
  console.log(rejectedEntries)
}
function onUploaded ( acceptedEntries ) {
  credentials.value.header1 = 'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/' + acceptedEntries.files[0].name
  //credentials.value.header1 = 'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/6818589755ad5feff4d7fb2e_djhireLogoNoCom.png'
 // acceptedEntries.forEach(entry => {
    Notify.create({
     // message: mapErrors[entry.failedPropValidation],
      message: 'File upload Successful',
      type: 'positive'
    })
 // })
  console.log(credentials.value.header1)
}
const onSubmitPhotos = async() => {
  if(credentials.value[0] !== 'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg' &&
    credentials3.value[0] !== 'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg' &&
    credentialsAlbumbImages.value[0] !== 'https://s3.ap-southeast-2.amazonaws.com/uploads.dev.djhire.com/avatar.jpg' &&
    selHeader.value !== 90 && selProfile.value !== 90 ) {

      authStore.setProfileStatus('Artist Videos Incomplete')
      const profileStatus = auth.updateProfileStatus(credentials4).then(data => {
        console.log(data.data)


      })
      console.log(profileStatus)


  router.push({ path: `/videos/` })
  }
  else {
    Notify.create({
     // message: mapErrors[entry.failedPropValidation],
      message: 'Please add a header, a profile image and a an album picture as a mininum to continue. Make sure to select which one you want to be used on your profile.',
      type: 'negative',
      spinner: true
    })
  }
}
function onRotate (angle) {
  myCropper.value.rotate(angle)
}
function onZoom () {
  //console.log(zoomLevel)
  //this.Cropper.rotate(angle)
  //this.$refs.cropper.rotate(angle)
  //const  { canvas } = this.Cropper.value.getResult()
  //const  { canvas } = this.Cropper.getResult()
  console.log('croppedImage',myCropper.value)
  console.log('zoomImage',zoomLevel.value)
  myCropper.value.zoom(zoomLevel.value)

}
function onRotatep (angle) {
  myCropperp.value.rotate(angle)
}
function onZoomp () {
  myCropperp.value.zoom(zoomLevel.value)

}

</script>
<style lang="scss" scoped>
  .upload-cropper {
    max-height: 400px;
    min-height: 300px;
    width:400px;
    border: solid 1px #eee
  }
  .q-img__content > div {
    pointer-events: all;
    position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    height: 100%;
    width:100%;
    padding: 16px;
    color: #fff;
    background: rgb(29 163 229 / 47%);
    border:3px solid #31CCEC;
}
</style>
