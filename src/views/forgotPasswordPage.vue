<template>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <ForgotPassword />
        </div>
      </div>
    </div>
</template>

<script>
import ForgotPassword from "../modules/forgotpasswordpage";

export default {
  name: "forgotPasswordPage",
  components: {
    ForgotPassword,
  },
};
</script>
