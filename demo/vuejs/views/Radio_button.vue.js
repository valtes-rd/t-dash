const Radio_button = Vue.component('Radio_button', {
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
          <h1>Radio Button</h1>
          This component is listed to represent choices. The user can select one among the list of 
          choices.

          <v-container>
            <v-row>
              <v-col>
                <h2>Usage</h2>
                <v-divider></v-divider>
                The user can select a choice by clicking the component itself. Only one item can be selected.
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-card height="" outlined>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="5">
                          <v-radio-group id="radio1">
                            <v-radio label="Yes" value="yes"></v-radio>
                            <v-radio label="No" value="no"></v-radio>
                          </v-radio-group>
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
                  Apply colors to the radio button.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="5">
                            <v-radio-group id="radio2">
                              <v-radio color="green" label="Yes" value="yes"></v-radio>
                              <v-radio color="red" label="No" value="no"></v-radio>
                            </v-radio-group>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <h3>Direction</h3>
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
                            <v-radio-group row id="radio3">
                              <v-radio color="green" label="Yes" value="yes"></v-radio>
                              <v-radio color="red" label="No" value="no"></v-radio>
                            </v-radio-group>
          
                            <v-radio-group column id="radio4">
                              <v-radio color="green" label="Yes" value="yes"></v-radio>
                              <v-radio color="red" label="No" value="no"></v-radio>
                            </v-radio-group>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <h3>Mandatory</h3>
                  <v-divider></v-divider>
                  Automatically enables the first radio of the radio group.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="5">
                            <v-radio-group mandatory id="radio5">
                              <v-radio color="green" label="Yes" value="yes"></v-radio>
                              <v-radio color="red" label="No" value="no"></v-radio>
                            </v-radio-group>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <h3>Label</h3>
                  <v-divider></v-divider>
                  Applies a label on the radiobutton component.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="5">
                            <v-radio-group id="radio6">
                              <v-radio color="orange" label="Hey! Click me!" value="yes"></v-radio>
                            </v-radio-group>
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
  