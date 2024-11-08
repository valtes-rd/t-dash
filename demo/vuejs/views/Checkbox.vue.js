const Checkbox = Vue.component('Checkbox', {
  data: function(){ 
    return {
      checkbox: true,
      includeFiles: true,
      enabled: false,
    }
  },
  created: function() {},
  methods: {},
  template:
  `<v-container>
    <v-row>
      <v-col>
        <div style="" class="tdash">
          <h1>Checkbox</h1>
          This component is composed of check-able boxes with different values in a form of choices
          for user decision making processes.

          <v-container>
            <v-row>
              <v-col>
                <h2>Usage</h2>
                <v-divider></v-divider>
                By clicking this component, a value is selected among the choices. A selected item can also be
                unselected by clicking it again.
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-card height="" outlined>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="5">
                          <v-checkbox light id="checkbox1"></v-checkbox>
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
                  Applies a color to a checkbox.
                </v-col>
              </v-row>
              
              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="5">
                            <v-checkbox color="green" label="Yes" id="checkbox2"></v-checkbox>
                            <v-checkbox color="red" label="No" id="checkbox3"></v-checkbox>
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
                  Changes the state of the checkbox when clicked.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="5">
                            <v-checkbox label="Disabled" disabled id="checkbox4"></v-checkbox>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <h3>Inline Text Field</h3>
                  <v-divider></v-divider>
                  Adds a check box to the existing text field.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="5">
                            <v-checkbox label="Enable field" v-model="enabled" id="checkbox5"></v-checkbox>
                          </v-col>
                          <v-col cols="5">
                            <v-text-field :disabled="!enabled" placeholder="Sample"></v-text-field>
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
                  Applies the label of the checkbox.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="5">
                            <v-checkbox color="green" label="Yes" id="checkbox6"></v-checkbox>
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
  </v-container>`
})
  