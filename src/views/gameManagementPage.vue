<template>
  <div class="content-wrap main-body container-padding-left">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <gamemanagementPage />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gamemanagementPage from "../modules/gamemanagementpage";

export default {
  name: "gameManagementPage",
  components: {
    gamemanagementPage,
  },
};
</script>
