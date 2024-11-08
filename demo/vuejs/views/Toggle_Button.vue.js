const Toggle_Button = Vue.component('Toggle_Button', {
  data: function(){ 
    return {
      show: false,
      sound: false,
      eye: false,
      mic: false,
      borderless_show: false,
      borderless_sound: false,
      borderless_eye: false,
      borderless_mic: false,
      disable_show: false,
      disable_sound: false,
      disable_eye: false,
      disable_mic: false,
      rounded_show: false,
      rounded_sound: false,
      rounded_eye: false,
      rounded_mic: false,
    }
  },
  created: function() {},
  methods: {},
  template:
  `<v-container>
    <v-row>
      <v-col>
        <div style="" class="tdash">
          <h1>Toggle Button</h1>
          Toggle button is a switch-like button that turns something on or off within the page.

          <v-container>
            <v-row>
              <v-col>
                <h2>Usage</h2>
                <v-divider></v-divider>
                This button component adds a toggle property and the user can select whether to enable or
                disable the button.
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-card height="" outlined>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="5">
                          <v-btn-toggle id="toggle1">
                            <v-btn @click="show = !show">
                              <v-icon>{{ !show ? 'mdi-lightbulb-outline' : 'mdi-lightbulb-off-outline' }}</v-icon>
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
                  Enables/disables multiple toggle buttons.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="5">
                            <v-btn-toggle multiple id="toggle2">
                              <v-btn @click="sound = !sound">
                                <v-icon>{{ !sound ? 'mdi-eye-outline' : 'mdi-eye-off-outline' }}</v-icon>
                              </v-btn>
            
                              <v-btn @click="eye = !eye">
                                <v-icon>{{ !eye ? 'mdi-volume-high' : 'mdi-volume-off' }}</v-icon>
                              </v-btn>
            
                              <v-btn @click="mic = !mic">
                                <v-icon>{{ !mic ? 'mdi-microphone' : 'mdi-microphone-off' }}</v-icon>
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
                  <h3>Borderless</h3>
                  <v-divider></v-divider>
                  Removes the border of the component.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="5">
                            <v-btn-toggle borderless id="toggle3">
                              <v-btn @click="borderless_sound = !borderless_sound">
                                <v-icon>{{ !borderless_sound ? 'mdi-eye-outline' : 'mdi-eye-off-outline' }}</v-icon>
                              </v-btn>
            
                              <v-btn @click="borderless_eye = !borderless_eye">
                                <v-icon>{{ !borderless_eye ? 'mdi-volume-high' : 'mdi-volume-off' }}</v-icon>
                              </v-btn>
            
                              <v-btn @click="borderless_mic = !borderless_mic">
                                <v-icon>{{ !borderless_mic ? 'mdi-microphone' : 'mdi-microphone-off' }}</v-icon>
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
                  Rounds the border of the component.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="5">
                            <v-btn-toggle rounded id="toggle4">
                              <v-btn @click="rounded_sound = !rounded_sound">
                                <v-icon>{{ !rounded_sound ? 'mdi-eye-outline' : 'mdi-eye-off-outline' }}</v-icon>
                              </v-btn>
            
                              <v-btn @click="rounded_eye = !rounded_eye">
                                <v-icon>{{ !rounded_eye ? 'mdi-volume-high' : 'mdi-volume-off' }}</v-icon>
                              </v-btn>
            
                              <v-btn @click="rounded_mic = !rounded_mic">
                                <v-icon>{{ !rounded_mic ? 'mdi-microphone' : 'mdi-microphone-off' }}</v-icon>
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
                  <h3>Disabled</h3>
                  <v-divider></v-divider>
                  Inset aligns the selected panel to center so the user will easily know which panel is
                  selected.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="5">
                            <v-btn-toggle group id="toggle5">
                              <v-btn @click="disable_sound = !disable_sound" disabled>
                                <v-icon>{{ !sound ? 'mdi-eye-outline' : 'mdi-eye-off-outline' }}</v-icon>
                              </v-btn>
            
                              <v-btn @click="disable_eye = !disable_eye">
                                <v-icon>{{ !disable_eye ? 'mdi-volume-high' : 'mdi-volume-off' }}</v-icon>
                              </v-btn>
            
                              <v-btn @click="disable_mic = !disable_mic">
                                <v-icon>{{ !disable_mic ? 'mdi-microphone' : 'mdi-microphone-off' }}</v-icon>
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
  </v-container>`,
})
  