<template>
  <div class="content-wrap main-body container-padding-left">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <dashboardPage />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dashboardPage from "../modules/dashboardpage";

export default {
  name: "affiliate",
  components: {
    dashboardPage,
  },
};
</script>
