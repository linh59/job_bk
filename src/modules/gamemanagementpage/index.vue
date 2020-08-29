<template>
  <div>
    <div class="section-common">
      <div class="section-header">Table name</div>
      <div class="section-body-table">
        <div class="row">
          <div class="col-12">
            <div class="d-flex my-3">
              <select id="inputState" class="form-control">
                <option selected>Select option.</option>
                <option>...</option>
              </select>
            </div>
            <div class="table-responsive">
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th>Number</th>
                    <th>Game ID</th>
                    <th>Date</th>
                    <th>Time Rich Ratio</th>
                    <th>Bonus</th>
                    <th>Reset</th>
                  </tr>
                </thead>
                <tbody>
                  <tr 
                    data-toggle="modal" 
                    data-target="#myModal"
                    v-for="(game,index) in games"
                    v-bind:key="index">
                    <td> {{ game.number }} </td>
                    <td> {{ game.gameID }} </td>
                    <td> {{ game.date }} </td>
                    <td> {{ game.timeRichRatio }} </td>
                    <td> {{ game.bonus }} </td>
                    <td> {{ game.reset }} </td>
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

<script>
export default {
  data: () => ({
    games: [
      {
        number: 1,
        gameID: "Cell",
        date: "Cell",
        timeRichRatio: "Cell",
        bonus: "Cell",
        reset: "Cell",
      },
      {
        number: 2,
        gameID: "Cell",
        date: "Cell",
        timeRichRatio: "Cell",
        bonus: "Cell",
        reset: "Cell",
      },
    ],
  }),
};
</script>
