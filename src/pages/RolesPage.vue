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
        Choose A Role
      </div>



      <!-- <div class="col-2 col-md-2" />
        <div class="col-2 col-md-2" /> -->
    </div>
    <div class="col-2 col-md-2 my-font">
      <!-- .colRight yellow -->
      <q-img
        src="~assets/group-22610.svg"
        width="63px"
        style="top:100px;left:-18vw;"
      />
      <q-img
        src="~assets/group-22610.svg"
        width="63px"
        style="top:80px;left:-22vw;transform: rotate(-20deg);"
      />
    </div>

    <div
      class="fixed-center bg-white"
    >
      <transition-group
        appear
        enter-active-class="animated slide-left"
        leave-active-class="animated slide-right"
      >
        <q-form
          ref="formComponent"
          autocapitalize="off"
          autocorrect="off"
          autocomplete="off"
          spellcheck="false"
          class="bg-secondary"
        >
          <q-card
            key="card"
            rounded
            class="my-card my-font q-pa-md"
            style="width: 500px;top:-50px;"
          >
            <q-card-section />
            <q-card-section>
              Congratulations your account has multiple roles.<br><br>
              <br><br>
              Please choose a Role for this Session.<br>
            </q-card-section>
            <q-card-actions align="center">
              <q-btn
                style="width: 212px; height: 50px;"
                color="info"
                align="center"
                text-color="primary"
                label="DJ / Artist"
                no-caps
                size="md"
                to="/profile"
              />
            </q-card-actions>
            <q-card-actions align="center">
              <q-btn
                style="width: 212px; height: 50px;"
                color="info"
                align="center"
                text-color="primary"
                label="Admin"
                no-caps
                size="md"
                to="/admin"
              />
            </q-card-actions>
            <q-card-actions align="center">
              <div class="my-font text-grey">
                Don't have an account?
                <q-btn
                  label="Sign up"
                  text-color="info"
                  no-caps
                  flat
                  to="/register"
                />
              </div>
              <!-- <q-btn color="primary" align="center" label="SSO Login" @click="submit" /> -->
              <!-- <q-btn color="primary" align="center" label="Forgot Password" @click="forgot" /> -->
            </q-card-actions>
          </q-card>
        </q-form>
      </transition-group>
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
          src="~assets/group-23520.svg"
          width="160px"
          style="top:340px;left:24vw;"
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



</script>
