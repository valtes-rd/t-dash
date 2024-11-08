const Select = Vue.component('Select', {
  data: function(){ 
    return {
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }
  },
  created: function() {},
  methods: {},
  template:
  `<v-container>
    <v-row>
      <v-col>
        <div style="" class="tdash">
          <h1>Select</h1>
          This component is composed of a list of items that can be dropped down to view all of it. 
          Only one can be selected as value of that component.
          

          <v-container>
            <v-row>
              <v-col>
                <h2>Usage</h2>
                <v-divider></v-divider>
                The user can select an item by clicking the component. Default value is unselected unless
                selected value is set. Click to view all items and look for the desired item then click to
                select it.
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-card height="" outlined>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="5">
                          <v-select id="select1"></v-select>
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
                  <h3>Disabled</h3>
                  <v-divider></v-divider>
                  Disables the component whenever unnecessary.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="5">
                            <v-select id="select2"
                              :items="items"
                              label="Disabled"
                              disabled
                            ></v-select>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <h3>Icons</h3>
                  <v-divider></v-divider>
                  Adds icon on the component.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="5">
                            <v-select id="select3"
                              :items="items"
                              label="Icon"
                              prepend-icon="mdi-flag"
                            ></v-select>
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
                  Selects multiple items depending on the instruction given.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="5">
                            <v-select id="select4"
                              :items="items"
                              label="Multiple"
                              multiple
                            ></v-select>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <h3>Chips</h3>
                  <v-divider></v-divider>
                  Displays selected items in appearance of chips.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="5">
                            <v-select id="select5"
                              :items="items"
                              label="Chips"
                              multiple
                              chips
                            ></v-select>
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
  