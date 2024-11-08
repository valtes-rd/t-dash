const Floating_action_button = Vue.component('Floating_action_button', {
  data: function(){ 
    return {
      direction: 'top',
      fab: false,
    }
  },
  created: function() {},
  methods: {},
  template:
  `<v-container>
    <v-row>
      <v-col>
        <div style="" class="tdash">
          <h1>Floating Action Button</h1>
          This component is rounded and floated in appearance of a button. 
          Same as button, it also performs its functions when clicked. 

          <v-container>
            <v-row>
              <v-col>
                <h2>Usage</h2>
                <v-divider></v-divider>
                By clicking this component, it will execute its own function/s.
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-card height="" outlined>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="5">
                          <v-btn fab id="fab1">
                            <v-icon>mdi-plus</v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <h2>Examples</h2>
              </v-col>
            </v-row>

            <v-container>
              <v-row>
                <v-col>
                  <h3>Colors</h3>
                  <v-divider></v-divider>
                  Apply colors to the floating action button.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="5">
                            <v-btn fab color = "purple" dark id="fab2">
                              <v-icon>mdi-plus</v-icon>
                            </v-btn>
                            <v-btn fab color = "green" dark id="fab3">
                              <v-icon>mdi-plus</v-icon>
                            </v-btn>
                            <v-btn fab color = "pink" dark id="fab4">
                              <v-icon>mdi-plus</v-icon>
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <h3>Icon</h3>
                  <v-divider></v-divider>
                  Changes icons of the floating action button.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="5">
                            <v-btn fab id="fab5">
                              <v-icon>mdi-map-marker</v-icon>
                            </v-btn>
                            <v-btn fab id="fab6">
                              <v-icon>mdi-information-outline</v-icon>
                            </v-btn>
                            <v-btn fab id="fab7">
                              <v-icon>mdi-arrow-collapse-down</v-icon>
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <h3>Small variant</h3>
                  <v-divider></v-divider>
                  Changes the floating action button into smaller size.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="5">
                            <v-btn icon ripple id="fab8">
                              <v-icon>mdi-arrow-expand-up</v-icon>
                            </v-btn>
                            <v-btn icon ripple id="fab9">
                              <v-icon>mdi-arrow-collapse-down</v-icon>
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <h3>Speed Dial</h3>
                  <v-divider></v-divider>
                  Speed dial applies floating action buttons as menu action buttons. 
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col  id="create">
                            <v-speed-dial style="position: absolute;"
                            v-model="fab"
                            bottom
                            right
                            :direction="direction"
                            open-on-hover>
                              <template v-slot:activator>
                                <v-btn
                                  v-model="fab"
                                  color="blue darken-2"
                                  dark
                                  fab
                                >
                                  <v-icon v-if="fab">
                                    mdi-close
                                  </v-icon>
                                  <v-icon v-else>
                                    mdi-account-circle
                                  </v-icon>
                                </v-btn>
                              </template>
                              <v-btn
                                fab
                                dark
                                small
                                color="green"
                              >
                                <v-icon>mdi-pencil</v-icon>
                              </v-btn>
                              <v-btn
                                fab
                                dark
                                small
                                color="indigo"
                              >
                                <v-icon>mdi-plus</v-icon>
                              </v-btn>
                              <v-btn
                                fab
                                dark
                                small
                                color="red"
                              >
                                <v-icon>mdi-delete</v-icon>
                              </v-btn>
                            </v-speed-dial>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>



  
            </v-container>

          



          </v-container>
        </div>
      </v-col>
    </v-row>
  </v-container>`,
})
  