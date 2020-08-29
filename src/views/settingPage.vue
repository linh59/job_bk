<template>
  <div class="content-wrap main-body container-padding-left">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <SettingPage />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SettingPage from "../modules/settingpage";

export default {
  name: "setting",
  components: {
    SettingPage,
  },
};
</script>
