<template>
  <div class="content-wrap main-body container-padding-left">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <AffiliatePage />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AffiliatePage from "../modules/affiliatepage";

export default {
  name: "affiliate",
  components: {
    AffiliatePage,
  },
};
</script>
