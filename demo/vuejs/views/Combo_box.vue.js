const Combo_box = Vue.component('Combo_box', {
  data: function(){ 
    return {
      items: [
        'Male',
        'Female',
      ],
    }
  },
  created: function() {},
  methods: {},
  template:
  `<v-container>
    <v-row>
      <v-col>
        <div style="" class="tdash">
          <h1>Combo Box</h1>
          This component lists all choices and selects an item of choice (same as dropdown list), but with added search function.

          <v-container>
            <v-row>
              <v-col>
                <h2>How to use</h2>
                <v-divider></v-divider>
                By clicking this component, the user may select an item from the list. 
                A selected item will be the value for that component.
                The user may use this component to try how this component works.
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-card height="" outlined>
                  <v-card-text>
                    <v-container >
                      <v-row >
                        <v-col cols="5">
                          <v-combobox id="combobox1"
                          :items="items"
                          label="Gender"
                          filled
                          class="rounded-0"
                          background-color="blue lighten-5"
                          outlined
                          persistent-placeholder>
                          </v-combobox>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <h2>Other Examples</h2>
              </v-col>
            </v-row>

            <v-container>
              <v-row>
                <v-col>
                  <h3>Hide Selected</h3>
                  <v-divider></v-divider>
                  Hide a selected item with this prop.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="5">
                            <v-combobox id="combobox2"
                              :items="items"
                              label="Gender"
                              filled
                              class="rounded-0"
                              background-color="blue lighten-5"
                              hide-selected
                            outlined
                            persistent-placeholder
                            ></v-combobox>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <h3>Multiple</h3>
                  <v-divider></v-divider>
                  Select multiple items with this prop.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="5">
                            <v-combobox id="combobox3"
                            :items="items"
                            label="Gender"
                            filled
                            class="rounded-0"
                            background-color="blue lighten-5"
                            multiple
                            outlined
                            persistent-placeholder
                          ></v-combobox>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <h3>Clearable</h3>
                  <v-divider></v-divider>
                  Clears a selected item with this prop.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="5">
                            <v-combobox id="combobox4"
                              :items="items"
                              label="Gender"
                              filled
                              class="rounded-0"
                              background-color="blue lighten-5"
                              persistent-hint
                              outlined
                              clearable
                            ></v-combobox>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <h3>Small Chips</h3>
                  <v-divider></v-divider>
                  Items change and were put to small chips with this prop.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text> 
                      <v-container>
                        <v-row>
                          <v-col cols="5">
                            <v-combobox id="combobox5"
                              :items="items"
                              label="Gender"
                              filled
                              class="rounded-0"
                              background-color="blue lighten-5"
                              small-chips
                              multiple
                              outlined
                              persistent-placeholder
                            ></v-combobox>
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
