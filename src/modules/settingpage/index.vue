<template>
  <div>
    <div class="section-common">
      <div class="section-header">My Settings</div>
      <div class="section-body p-5">
        <div class="form-group row">
          <label
            for="staticEmail"
            class="col-lg-3 col-md-4 col-12 col-form-label"
            >Language</label
          >
          <div class="col-lg-4 col-md-5 col-12">
            <select id="inputState" class="form-control">
              <option selected>Select option.</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="fullName" class="col-lg-3 col-md-4 col-12 col-form-label"
            >Full name</label
          >
          <div class="col-lg-4 col-md-5 col-12">
            <input
              type="text"
              class="form-control-plaintext"
              id="fullName"
              placeholder="Input value"
            />
          </div>
        </div>
        <div class="form-group row">
          <label
            for="emailAddress"
            class="col-lg-3 col-md-4 col-12 col-form-label"
            >Email address</label
          >
          <div class="col-lg-4 col-md-5 col-12">
            <input
              type="text"
              class="form-control-plaintext"
              id="emailAddress"
              placeholder="Input value"
            />
          </div>
        </div>
        <div class="form-group row">
          <label
            for="walletAddress"
            class="col-lg-3 col-md-4 col-12 col-form-label"
            >Wallet address</label
          >
          <div class="col-lg-4 col-md-5 col-12">
            <input
              type="text"
              class="form-control-plaintext"
              id="walletAddress"
              placeholder="Input value"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="password" class="col-lg-3 col-md-4 col-12 col-form-label"
            >Password</label
          >
          <div class="col-lg-4 col-md-5 col-12">
            <input
              type="password"
              class="form-control-plaintext"
              id="password"
            />
          </div>
          <a href="" class="col-lg-3 col-md-3 col-12">Change password</a>
        </div>
        <div class="row">
          <div class="col-lg-9 col-md-12 col-12 text-center">
            <button type="button" class="btn btn-primary-common mt-5">
              update
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
