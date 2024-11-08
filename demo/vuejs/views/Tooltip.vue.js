const Tooltip = Vue.component('Tooltip', {
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
          <h1>Tooltip</h1>
          This component guides the user by displaying instructions in it.
          
          <v-container>
            <v-row>
              <v-col>
                <h2>Usage</h2>
                <v-divider></v-divider>
                By hovering the mouse on a component, a tooltrip that triggered will appear on the screen.
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-card height="" outlined>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="5">
                          <v-tooltip bottom id="tooltip1">
                            <template v-slot:activator="{on, attrs}">
                              <v-container v-bind="attrs" v-on="on">
                                <v-icon>mdi-hand-pointing-up</v-icon>
                                Please hover this to show tooltip
                              </v-container>
                            </template>
                            <span>Tooltip</span>                
                          </v-tooltip>        
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
                  <h3>Tooltip Positions</h3>
                  <v-divider></v-divider>
                  Sets the position where the tooltip will appear.
                </v-col>
              </v-row>
              
              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col>
                            <v-tooltip top id="tooltip2">
                              <template v-slot:activator="{on, attrs}">
                                <v-container v-bind="attrs" v-on="on">
                                  <v-icon>mdi-hand-pointing-up</v-icon>
                                  Top
                                </v-container>
                              </template>
                              
                              <span>Tooltip</span>                
                            </v-tooltip>
                          </v-col>
                          <v-col>
                            <v-tooltip bottom id="tooltip3">
                              <template v-slot:activator="{on, attrs}">
                                <v-container v-bind="attrs" v-on="on">
                                  <v-icon>mdi-hand-pointing-up</v-icon>
                                  Bottom
                                </v-container>
                              </template>
                              
                              <span>Tooltip</span>                
                            </v-tooltip>
                          </v-col>
                          <v-col>
                            <v-tooltip left id="tooltip4">
                              <template v-slot:activator="{on, attrs}">
                                <v-container v-bind="attrs" v-on="on">
                                  <v-icon>mdi-hand-pointing-up</v-icon>
                                  Left
                                </v-container>
                              </template>
                              
                              <span>Tooltip</span>                
                            </v-tooltip>
                          </v-col>
                          <v-col>
                            <v-tooltip right id="tooltip5">
                              <template v-slot:activator="{on, attrs}">
                                <v-container v-bind="attrs" v-on="on">
                                  <v-icon>mdi-hand-pointing-up</v-icon>
                                  Right
                                </v-container>
                              </template>
                              <span>Tooltip</span>                
                            </v-tooltip>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <h3>Color</h3>
                  <v-divider></v-divider>
                  Changes the color of the component.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col>
                            <v-tooltip bottom color="orange" id="tooltip6">
                              <template v-slot:activator="{on, attrs}">
                                <v-container v-bind="attrs" v-on="on">
                                  <p style="color:orange;">
                                    <v-icon color="orange">mdi-hand-pointing-up</v-icon>
                                    Orange Tooltip
                                  </p>
                                </v-container>
                              </template>
        
                              <span>Orange</span>                
                            </v-tooltip>
                          </v-col>
                          <v-col>
                            <v-tooltip bottom color="purple" id="tooltip7">
                              <template v-slot:activator="{on, attrs}">
                                <v-container v-bind="attrs" v-on="on">
                                  <p style="color:purple;">
                                    <v-icon color="purple">mdi-hand-pointing-up</v-icon>
                                    Purple Tooltip
                                  </p>
                                </v-container>
                              </template>
                              
                              <span>Purple</span>                
                            </v-tooltip>
                          </v-col>
                          <v-col>
                            <v-tooltip bottom color="black" id="tooltip8">
                              <template v-slot:activator="{on, attrs}">
                                <v-container v-bind="attrs" v-on="on">
                                  <p style="color:black;">
                                    <v-icon color="black">mdi-hand-pointing-up</v-icon>
                                    Black Tooltip
                                  </p>
                                </v-container>
                              </template>
                              
                              <span>Black</span>                
                            </v-tooltip>
                          </v-col>
                          <v-col>
                            <v-tooltip bottom color="gray" id="tooltip9">
                              <template v-slot:activator="{on, attrs}">
                                <v-container v-bind="attrs" v-on="on">
                                  <p style="color:gray;">
                                    <v-icon color="black">mdi-hand-pointing-up</v-icon>
                                    Gray Tooltip
                                  </p>
                                </v-container>
                              </template>
                              <span>Gray</span>                
                            </v-tooltip>
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
                  Disables the component when hovered.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col>
                            <v-tooltip bottom disabled id="tooltip10">
                              <template v-slot:activator="{on, attrs}">
                                <v-container v-bind="attrs" v-on="on">
                                  <v-icon>mdi-hand-pointing-up</v-icon>
                                  Disabled tooltip
                                </v-container>
                              </template>
                              <span>Tooltip</span>                
                            </v-tooltip>
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
                  Adds an icon on the component.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col>
                            <v-tooltip bottom color="red" id="tooltip11">
                              <template v-slot:activator="{on, attrs}">
                                <v-container v-bind="attrs" v-on="on">
                                  <v-icon>mdi-hand-pointing-up</v-icon>
                                  Tooltip w/ icon
                                </v-container>
                              </template>
                              
                              <span>
                                <v-icon dark>mdi-hand-pointing-right</v-icon>
                                Tooltip
                              </span>                
                            </v-tooltip>
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
  