<template>
  <div class="row justify-between bg-primary">
    <div class="col-2 col-md-2 my-font">
      <!-- .colLeft -->
    </div>
    <div class="col-8 col-md-8">
      <div
        class="col-2 col-md-2  my-font text-h4 text-white q-ma-xl"
      >
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Action Center
      </div>
    </div>
    <div
      class="col-2 col-md-2 my-font"
    >
      <!-- .colRight yellow -->
    </div>
  </div>
  <div class="row justify-between bg-blue-grey-10">
    <div class="col-2 col-md-2 my-font">
      <!-- .colLeft -->
    </div>
    <div class="col-8 col-md-8">
      <div
        class="col-2 col-md-2  my-font text-white q-ma-sm"
      >
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
        <q-btn
          color=""
          text-color="grey-14"
          label="Messages"
          flat
          no-caps
          to="/messages"
        />
        <q-btn
          color=""
          text-color="grey-14"
          label="Events"
          flat
          no-caps
        />
        <q-btn
          color=""
          text-color="grey-14"
          label="Calendar"
          flat
          no-caps
          to="/calendar"
        />
        <q-btn
          color=""
          text-color="grey-14"
          label="Ratings & Reviews"
          flat
          no-caps
        />
        <q-btn
          color=""
          text-color="grey-14"
          label="Activity Log"
          flat
          no-caps
        />
        <q-btn
          color=""
          text-color="grey-14"
          label="Rates"
          flat
          no-caps
        />
        <q-btn
          color=""
          text-color="grey-14"
          label="Settings"
          flat
          no-caps
        />
      </div>
    </div>
    <div
      class="col-2 col-md-2 my-font"
    >
      <!-- .colRight yellow -->
    </div>
  </div>

  <div class="row justify-between bg-secondary">
    <div class="col-2 col-md-2 my-font">
      <!-- .colLeft -->
    </div>
    <div class="col-8 col-md-8">
      <div
        class="row justify-between bg-secondary"
      >
        <div class="col-2 col-md-2 my-font">
          <!-- .colLeft -->
        </div>
        <div class="col-12">
          <div class="row justify-left bg-secondary q-mb-lg">
            <div class="col-12 text-black">
              <div>
                <div style="display: flex; justify-content: left; align-items: left; flex-wrap: nowrap;" />
                <div class="row justify-left">
                  <div style="display: flex; max-width: 200px; width: 100%">
                    <q-table
                      :rows="[
                        {
                          id: 1,
                          date: '20-05-25',
                          time:'13:00',
                          from:'DJHIRE Admin',
                          Subject:'Welcome to DJHire',
                          Read:'',
                          Details:'View'
                        },
                        {
                          id: 2,
                          date: '20-05-25',
                          time:'13:30',
                          from:'DJHIRE Admin',
                          Subject:'Profile Pending Moderation',
                          Read:'New',
                          Details:'View'
                        },
                      ]"
                      title="Messages"
                    />
                  </div>
                </div>
              </div>
              <div class="q-pa-md row items-start q-gutter-md">
                <q-card
                  dark
                  bordered
                  class="bg-grey-9 my-card"
                >
                  <q-card-section>
                    <div class="text-h6">
                      Welcome to DJ Hire
                    </div>
                    <div class="text-subtitle2">
                      by Admin
                    </div>
                  </q-card-section>

                  <q-separator
                    dark
                    inset
                  />

                  <q-card-section>
                    <div class="q-pa-md row justify-center">
                      <div style="width: 100%; max-width: 400px">
                        <q-chat-message
                          name="Admin"
                          avatar="https://cdn.quasar.dev/img/avatar4.jpg"
                          :text="['hey, how are you?']"
                          sent
                          stamp="7 minutes ago"
                        />
                        <q-chat-message
                          name="Jane"
                          avatar="https://cdn.quasar.dev/img/avatar3.jpg"
                          :text="[`doing fine, how r you?`]"
                          stamp="4 minutes ago"
                        />
                        <q-chat-message
                          name="Admin"
                          avatar="https://cdn.quasar.dev/img/avatar4.jpg"
                          :text="['Fantastic! Good work on creating your account and login details. Next Step is to make a start on creating your DJ Profile. This can be a daunting task as there are lots of sections.']"
                          sent
                          stamp="3 minutes ago"
                        />
                        <q-chat-message
                          name="Admin"
                          avatar="https://cdn.quasar.dev/img/avatar4.jpg"
                          :text="['Use the AI Agent DJEDDA on the support page for ideas, or reach out to me with any questions.']"
                          sent
                          stamp="3 minutes ago"
                        />
                        <q-chat-message
                          name="Jane"
                          avatar="https://cdn.quasar.dev/img/avatar3.jpg"
                          :text="[`ok thanks, will do`]"
                          stamp="2 minutes ago"
                        />
                        <q-chat-message
                          name="Jane"
                          avatar="https://cdn.quasar.dev/img/avatar3.jpg"
                        >
                          <q-spinner-dots
                            size="2rem"
                          />
                        </q-chat-message>
                        <br><br>

                        <div class="text-body bg-secondary col-11 ">
                          <q-input
                            label-width="3"
                            helper="Your Reply"
                            outlined
                            type="textarea"
                            dense
                          />
                        </div><br>
                        <q-btn
                          color="info"
                          label="reply"
                        />
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>
          <div class="col-2 col-md-2 my-font">
          <!-- .colRight yellow -->
          </div>
        </div>
      </div>
      <div
        class="col-2 col-md-2 my-font"
      >
      <!-- .colRight yellow -->
      </div>
    </div>
  </div>
</template>

<script setup>
//
</script>
