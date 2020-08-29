<template>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <SignInPage />
        </div>
      </div>
    </div>
</template>

<script>
import SignInPage from "../modules/signinpage";

export default {
  name: "signinPage",
  components: {
    SignInPage,
  },
};
</script>
