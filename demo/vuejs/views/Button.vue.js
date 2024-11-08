const Button = Vue.component('Button', {
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
          <h1>Button</h1>
          This component can trigger events within the website in just a click.
          
          <v-container>
            <v-row>
              <v-col>
                <h2>Usage</h2>
                <v-divider></v-divider>
                This component is labeled to identify its functions depending on how it was 
                meant for the user, by clicking this component, it will execute its own function/s.
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-card height="" outlined>
                  <v-card-text>
                    <v-container >
                      <v-row >
                        <v-col cols="12">
                          <v-btn id="button1">
                            Button
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
                  <h3>Icon</h3>
                  <v-divider></v-divider>
                  Applies an icon to a button with this prop.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container >
                        <v-row >
                          <v-col cols="12">
                            <v-btn icon color="blue" id="button2">
                              <v-icon>mdi-thumb-up</v-icon>
                            </v-btn>
                            <v-btn icon color="red" id="button3">
                              <v-icon>mdi-heart</v-icon>
                            </v-btn>
                            <v-btn icon color="green" id="button4">
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
                  <h3>Rounded</h3>
                  <v-divider></v-divider>
                  Changes the radius of the button to its circular shape.
                </v-col>
              </v-row>
              

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container >
                        <v-row >
                          <v-col cols="12">
                            <v-btn rounded color="red" dark id="button5">
                              Rounded button
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
                  <h3>Outlined</h3>
                  <v-divider></v-divider>
                  Applies outlined design of a button.
                </v-col>
              </v-row>
              
              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container >
                        <v-row >
                          <v-col cols="12">
                            <v-btn outlined color="blue" dark id="button6">
                              Outlined Button
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
                  <h3>Loaders</h3>
                  <v-divider></v-divider>
                  Apply load animation once the button is clicked.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container >
                        <v-row >
                          <v-col cols="12">
                            <v-btn loading id="button7">
                              Button
                            </v-btn>
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
  