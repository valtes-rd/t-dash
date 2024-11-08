const Accordion = Vue.component('Accordion', {
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
            <h1>Accordion</h1>
            Accordion (expansion panels in vuetify) are like item lists. The difference is, it is covered
            in panels to save space for more components.
            
            <v-container>
              <v-row>
                <v-col>
                  <h2>Usage</h2>
                  <v-divider></v-divider>
                  Each panel can be expanded by clicking its panel header and will display the contents of 
                  that panel.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container >
                        <v-row >
                          <v-col cols="12">
                            <v-expansion-panels id="accordion1">
                              <v-expansion-panel>
                                <v-expansion-panel-header>
                                  Sample Header1_U
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                  Sample content1_U
                                </v-expansion-panel-content>
                              </v-expansion-panel>
                                <v-expansion-panel>
                                <v-expansion-panel-header>
                                  Sample Header2_U
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                  Sample content2_U
                                </v-expansion-panel-content>
                              </v-expansion-panel>
                                <v-expansion-panel>
                                <v-expansion-panel-header>
                                  Sample Header3_U
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                  Sample content3_U
                                </v-expansion-panel-content>
                              </v-expansion-panel>
                            </v-expansion-panels>
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
                    Expands multiple expansion panels
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <v-card height="" outlined>
                      <v-card-text>
                        <v-container >
                          <v-row >
                            <v-col cols="12">
                              <v-expansion-panels multiple id="accordion2">
                                <v-expansion-panel>
                                  <v-expansion-panel-header>
                                    Sample Header1_M
                                  </v-expansion-panel-header>
                                  <v-expansion-panel-content>
                                    Sample content1_M
                                  </v-expansion-panel-content>
                                </v-expansion-panel>
                                  <v-expansion-panel>
                                  <v-expansion-panel-header>
                                    Sample Header2_M
                                  </v-expansion-panel-header>
                                  <v-expansion-panel-content>
                                    Sample content2_M
                                  </v-expansion-panel-content>
                                </v-expansion-panel>
                                  <v-expansion-panel>
                                  <v-expansion-panel-header>
                                    Sample Header3_M
                                  </v-expansion-panel-header>
                                  <v-expansion-panel-content>
                                    Sample content3_M
                                  </v-expansion-panel-content>
                                </v-expansion-panel>
                              </v-expansion-panels>
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
                    Disables the component.
                  </v-col>
                </v-row>
                
                <v-row>
                  <v-col>
                    <v-card height="" outlined>
                      <v-card-text>
                        <v-container >
                          <v-row >
                            <v-col cols="12">
                              <v-expansion-panels multiple id="accordion3">
                                <v-expansion-panel>
                                  <v-expansion-panel-header>
                                    Sample Header1_D
                                  </v-expansion-panel-header>
                                  <v-expansion-panel-content>
                                    Sample content1_D
                                  </v-expansion-panel-content>
                                </v-expansion-panel>
                                  <v-expansion-panel disabled>
                                  <v-expansion-panel-header>
                                    Sample Header2_D
                                  </v-expansion-panel-header>
                                  <v-expansion-panel-content>
                                    Sample content2_D
                                  </v-expansion-panel-content>
                                </v-expansion-panel>
                                  <v-expansion-panel>
                                  <v-expansion-panel-header>
                                    Sample Header3_D
                                  </v-expansion-panel-header>
                                  <v-expansion-panel-content>
                                    Sample content3_D
                                  </v-expansion-panel-content>
                                </v-expansion-panel>
                              </v-expansion-panels>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <h3>Focusable</h3>
                    <v-divider></v-divider>
                    Focuses the panel so the user will easily know which panel is selected.
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <v-card height="" outlined>
                      <v-card-text>
                        <v-container >
                          <v-row >
                            <v-col cols="12">
                              <v-expansion-panels focusable id="accordion4">
                                <v-expansion-panel>
                                  <v-expansion-panel-header>
                                    Sample Header1_F
                                  </v-expansion-panel-header>
                                  <v-expansion-panel-content>
                                    Sample content1_F
                                  </v-expansion-panel-content>
                                </v-expansion-panel>
                                  <v-expansion-panel>
                                  <v-expansion-panel-header>
                                    Sample Header2_F
                                  </v-expansion-panel-header>
                                  <v-expansion-panel-content>
                                    Sample content2_F
                                  </v-expansion-panel-content>
                                </v-expansion-panel>
                                  <v-expansion-panel>
                                  <v-expansion-panel-header>
                                    Sample Header3_F
                                  </v-expansion-panel-header>
                                  <v-expansion-panel-content>
                                    Sample content3_F
                                  </v-expansion-panel-content>
                                </v-expansion-panel>
                              </v-expansion-panels>
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
                    Inset aligns the selected panel to center so the user will easily know which panel is
                    selected.
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <v-card height="" outlined>
                      <v-card-text>
                        <v-container >
                          <v-row >
                            <v-col cols="12">
                              <v-expansion-panels inset id="accordion5">
                                <v-expansion-panel>
                                  <v-expansion-panel-header>
                                    Sample Header1_I
                                  </v-expansion-panel-header>
                                  <v-expansion-panel-content>
                                    Sample content1_I
                                  </v-expansion-panel-content>
                                </v-expansion-panel>
                                  <v-expansion-panel>
                                  <v-expansion-panel-header>
                                    Sample Header2_I
                                  </v-expansion-panel-header>
                                  <v-expansion-panel-content>
                                    Sample content2_I
                                  </v-expansion-panel-content>
                                </v-expansion-panel>
                                  <v-expansion-panel>
                                  <v-expansion-panel-header>
                                    Sample content3_I
                                  </v-expansion-panel-header>
                                  <v-expansion-panel-content>
                                    Sample content3_I
                                  </v-expansion-panel-content>
                                </v-expansion-panel>
                              </v-expansion-panels>
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
  