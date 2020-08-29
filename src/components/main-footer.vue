<template>
  <div>
    <footer v-bind:class="{ position_bottom: !showMenu }">  
      <div class="footer-container content-wrap">
        <p>Copyright ©︎ <span>ALBOS&MARE PARTNERS</span>. All Right Reserved</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    showMenu() {
      return (
        this.$route.name !== "signinPage" &&
        this.$route.name !== "forgotPasswordPage"
      );
    },
  },
};
</script>
