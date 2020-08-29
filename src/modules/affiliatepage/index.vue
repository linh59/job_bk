<template>
  <div>
    <div class="section-common">
      <div class="section-header">My affiliate info</div>
      <div class="section-body">
        <div class="row">
          <div class="col-section-block col-lg-3 col-md-6 col-12">
            <div class="section-block">
              <div class="block-title">Affiliate Type</div>
              <div class="block-info">Normal</div>
            </div>
          </div>
          <div class="col-section-block col-lg-3 col-md-6 col-12">
            <div class="section-block">
              <div class="block-title">Affiliate Code</div>
              <div class="block-info">UILIH34345JZ</div>
            </div>
          </div>
          <div class="col-section-block col-lg-3 col-md-6 col-12">
            <div class="section-block">
              <div class="block-title">Affiliate Fee</div>
              <div class="block-info">100 Points</div>
            </div>
          </div>
          <div class="col-section-block col-lg-3 col-md-6 col-12">
            <div class="section-block">
              <div class="block-title">Paid Affiliate Fee</div>
              <div class="block-info">80 Points</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-common">
      <div class="section-header">Details of my affiliate</div>
      <div class="section-body-table">
        <div class="row">
          <div class="col-12">
            <div class="table-responsive">
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th>Tier</th>
                    <th>Referred user</th>
                    <th>Affilitate fee</th>
                    <th>Affilitate fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr data-toggle="modal" data-target="#myModal">
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>656</td>
                    <td>@656</td>
                  </tr>
                  <tr>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>656</td>
                    <td>@656</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- The Modal -->
      <div class="modal" id="myModal">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <!-- Modal Header -->
            <div class="modal-header">
              <h4 class="modal-title">Modal</h4>
              <button type="button" class="close" data-dismiss="modal">
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.176 7.982l6.632-6.614a.796.796 0 00-.042-1.084.802.802 0 00-1.086-.041L8.048 6.857 1.416.235a.805.805 0 00-1.136 0 .8.8 0 000 1.133l6.64 6.614-6.64 6.614a.797.797 0 00.333 1.382c.292.07.6-.03.795-.257l6.64-6.614 6.632 6.614a.802.802 0 001.086-.042.796.796 0 00.042-1.083L9.176 7.982z"
                    fill="#ADBBC4"
                  />
                </svg>
              </button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
              <div class="table-responsive">
                <table class="table">
                  <thead class="thead-dark">
                    <tr>
                      <th>N0</th>
                      <th>User</th>
                      <th>Phone number</th>
                      <th>Joined date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr data-toggle="modal" data-target="#myModal">
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>656</td>
                      <td>@656</td>
                    </tr>
                    <tr>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>656</td>
                      <td>@656</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
