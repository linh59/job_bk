<template>
  <div class="signin-modal">
    <div class="signin-modal-header">Sign In</div>
    <div class="signin-modal-body">
      <input
        type="text"
        class="form-control-plaintext"
        id="username"
        placeholder="Username"
      />
      <input
        type="password"
        class="form-control-plaintext"
        id="password"
        placeholder="Password"
      />
    </div>
    <div class="signin-modal-footer">
      <router-link to="/forgotPassword">Forgot password?</router-link>
      <button type="button" class="btn btn-primary-common btn-small">
        Sign in
      </button>
    </div>
  </div>
</template>
