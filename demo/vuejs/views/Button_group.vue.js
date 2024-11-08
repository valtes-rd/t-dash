const Button_group = Vue.component('Button_group', {
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
          <h1>Button Group</h1>
          This component is composed of multiple buttons combined together.

          <v-container>
            <v-row>
              <v-col>
                <h2>Usage</h2>
                <v-divider></v-divider>
                This component has the same functions like the button component, performing its functions
                once clicked.
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-card height="" outlined>
                  <v-card-text>
                    <v-container >
                      <v-row >
                        <v-col cols="12">
                          <v-btn-toggle id="buttongroup1">
                            <v-btn>
                              Start
                            </v-btn>
                            <v-btn>
                              End
                            </v-btn>
                          </v-btn-toggle>
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
                  <h3>Multiple</h3>
                  <v-divider></v-divider>
                  Button group can select multiple buttons with this prop.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container >
                        <v-row >
                          <v-col cols="12">
                            <v-btn-toggle multiple id="buttongroup2">
                              <v-btn>
                                Start
                              </v-btn>
                              <v-btn>
                                End
                              </v-btn>
                            </v-btn-toggle>
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
                  Changes the radius of the button group to its circular shape.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container >
                        <v-row >
                          <v-col cols="12">
                            <v-btn-toggle rounded id="buttongroup3">
                              <v-btn>
                                Start
                              </v-btn>
                              <v-btn>
                                End
                              </v-btn>
                            </v-btn-toggle>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <h3>Icon Options</h3>
                  <v-divider></v-divider>
                  Adds an icon to a button.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container >
                        <v-row >
                          <v-col cols="12">
                            <v-btn-toggle id="buttongroup4">
                              <v-btn>
                                <v-icon>mdi-chevron-double-left</v-icon>
                              </v-btn>
                              <v-btn>
                                <v-icon>mdi-chevron-double-right</v-icon>
                              </v-btn>
                            </v-btn-toggle>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <h3>Text and Icon Options</h3>
                  <v-divider></v-divider>
                  Adds a text and an icon to a button.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container >
                        <v-row >
                          <v-col cols="12">
                            <v-btn-toggle id="buttongroup5">
                              <v-btn>
                                <v-icon>mdi-chevron-double-left</v-icon>
                                Start
                              </v-btn>
                              <v-btn>
                                End
                                <v-icon>mdi-chevron-double-right</v-icon>
                              </v-btn>
                            </v-btn-toggle>
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
  