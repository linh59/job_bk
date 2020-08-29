<template>
  <div class="content-wrap main-body container-padding-left">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <gamesettingPage />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gamesettingPage from "../modules/gamesettingpage";

export default {
  name: "gameSettingPage",
  components: {
    gamesettingPage,
  },
};
</script>
