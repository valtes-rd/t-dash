const SwitchComp = Vue.component('SwitchComp', {
  data: function(){ 
    return {}
  },
  created: function() {},
  methods: {},
  template:
  `<v-container>
    <v-row>
      <v-col>
        <div style="" class="tdash">
          <h1>Switch</h1>
          Switch component is used in toggling controls, mostly in scenarios where the user will
          decide between 2 choices (yes/no, on/of, true/false, etc.).

          <v-container>
            <v-row>
              <v-col>
                <h2>Usage</h2>
                <v-divider></v-divider>
                The user will decide which value to set on the component by clicking it. If he/she changed 
                his/her mind, he/she may click the component again to return to its default value. Leave it be
                if the user has no plans to change its value.
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-card height="" outlined>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="5">
                          <v-switch id="switch1"></v-switch>
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
                  Changes the component's color based on the user's color preference.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col >
                            <v-switch color="blue" id="switch2"></v-switch>
                          </v-col>
                          <v-col>
                            <v-switch color="orange" id="switch3"></v-switch>
                          </v-col>
                          <v-col>
                            <v-switch color="red" id="switch4"></v-switch>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <h3>Inset</h3>
                  <v-divider></v-divider>
                  Changes the appearance of the component.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="5">
                            <v-switch inset id="switch5"></v-switch>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <h3>Disabled</h3>
                  <v-divider></v-divider>
                  Disables the component whenever unecessary.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="5">
                            <v-switch disabled id="switch6"></v-switch>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <h3>Loading</h3>
                  <v-divider></v-divider>
                  Applies this prop on the component whenever the page or content is loading.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="5">
                            <v-switch loading="warning" id="switch7"></v-switch>
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