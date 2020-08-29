<template>
  <div>
    <div class="section-common">
      <div class="section-header d-flex justify-content-between">
        <p>Game setting</p>
        <button type="button" class="btn btn-primary-common">
            update
        </button>  
      </div>
      <div class="section-body p-5">
        <div class="form-group row">
          <label for="profit" class="col-lg-4 col-md-4 col-12 col-form-label"
            >Profit (%)</label
          >
          <div class="col-lg-4 col-md-5 col-12">
            <input
              type="text"
              class="form-control-plaintext"
              id="profit"
              placeholder="Input value"
            />
          </div>
        </div>
        <div class="form-group row">
          <label
            for="instancePoolRate"
            class="col-lg-4 col-md-4 col-12 col-form-label"
            >Instance pool rate (%)</label
          >
          <div class="col-lg-4 col-md-5 col-12">
            <input
              type="text"
              class="form-control-plaintext"
              id="instancePoolRate"
              placeholder="Input value"
            />
          </div>
        </div>
        <div class="form-group row">
          <label
            for="bonusPoolRate"
            class="col-lg-4 col-md-4 col-12 col-form-label"
            >Bonus Pool rate (%)</label
          >
          <div class="col-lg-4 col-md-5 col-12">
            <input
              type="text"
              class="form-control-plaintext"
              id="bonusPoolRate"
              placeholder="Input value"
            />
          </div>
        </div>
        <div class="form-group row">
          <label
            for="minimunPlayer"
            class="col-lg-4 col-md-4 col-12 col-form-label"
            >Minimun Player</label
          >
          <div class="col-lg-4 col-md-5 col-12">
            <input
              type="text"
              class="form-control-plaintext"
              id="minimunPlayer"
              placeholder="Input value"
            />
          </div>
        </div>
        <div class="form-group row">
          <label
            for="maximumChargeAmount"
            class="col-lg-4 col-md-4 col-12 col-form-label"
            >Maximum Charge Amount</label
          >
          <div class="col-lg-4 col-md-5 col-12">
            <input
              type="text"
              class="form-control-plaintext"
              id="maximumChargeAmount"
              placeholder="Input value"
            />
          </div>
        </div>
        <div class="form-group row">
          <label
            for="exchangeRage"
            class="col-lg-4 col-md-4 col-12 col-form-label"
            >Exchange Rage (Charge)</label
          >
          <div class="col-lg-4 col-md-5 col-12">
            <input
              type="text"
              class="form-control-plaintext"
              id="exchangeRage"
              placeholder="Input value"
            />
          </div>
        </div>
        <div class="form-group row">
          <label
            for="exchangeRate"
            class="col-lg-4 col-md-4 col-12 col-form-label"
            >Exchange Rate (Withdraw)</label
          >
          <div class="col-lg-4 col-md-5 col-12">
            <input
              type="text"
              class="form-control-plaintext"
              id="exchangeRate"
              placeholder="Input value"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
