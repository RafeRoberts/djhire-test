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
</template>

<script setup>
//
</script>
