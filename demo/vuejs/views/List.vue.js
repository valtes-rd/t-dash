const List = Vue.component('List', {
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
          <h1>List</h1>
          Views all items in the page.
          
          <v-container>            
            <v-row>
              <v-col>
                <h2>Usage</h2>
                <v-divider></v-divider>
                Each item is consists of title and subtitle. Each will be viewed if titles and subtitles are not null.
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-card height="" outlined>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="5">
                          <v-list id="list1">
                            <v-list-item>
                              <v-list-item-content>
                                <v-list-item-title>
                                  Sample Header1_U
                                </v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                              <v-list-item-content>
                                <v-list-item-title>
                                  Sample Header2_U
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                  Sample subheader2_U
                                </v-list-item-subtitle>
                              </v-list-item-content>
                            </v-list-item>
                            <v-list-item>
                              <v-list-item-content>
                                <v-list-item-title>
                                  Sample Header3_U
                                </v-list-item-title>
                                <v-list-item-subtitle>
                                  Sample subheader3-1_U
                                </v-list-item-subtitle>
                                <v-list-item-subtitle>
                                  Sample subheader3-2_U
                                </v-list-item-subtitle>
                              </v-list-item-content>
                            </v-list-item>
                          </v-list>
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
                  <h3>Avatar</h3>
                  <v-divider></v-divider>
                  Adds an avatar to an item. It can be in images or icons.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="5">
                            <v-list id="list2">
                              <v-list-item>
                                <v-list-item-avatar>
                                  <v-icon>mdi-account</v-icon>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                  <v-list-item-title>
                                    Sample Header1_M
                                  </v-list-item-title>
                                </v-list-item-content>
                              </v-list-item>
                              <v-list-item>
                                <v-list-item-avatar>
                                  <v-icon>mdi-account</v-icon>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                  <v-list-item-title>
                                    Sample Header2_M
                                  </v-list-item-title>
                                  <v-list-item-subtitle>
                                    Sample subheader2_M
                                  </v-list-item-subtitle>
                                </v-list-item-content>
                              </v-list-item>
                              <v-list-item>
                                <v-list-item-avatar>
                                  <v-icon>mdi-account</v-icon>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                  <v-list-item-title>
                                    Sample Header3_M
                                  </v-list-item-title>
                                  <v-list-item-subtitle>
                                    Sample subheader3-1_M
                                  </v-list-item-subtitle>
                                  <v-list-item-subtitle>
                                    Sample subheader3-2_M
                                  </v-list-item-subtitle>
                                </v-list-item-content>
                              </v-list-item>
                            </v-list>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <h3>Action</h3>
                  <v-divider></v-divider>
                  Adds action buttons as tools for each item.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="5">
                            <v-list id="list3">
                              <v-list-item>
                                <v-list-item-avatar>
                                  <v-img src="assets/user.png"></v-img>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                  <v-list-item-title>
                                    Sample Header1_D
                                  </v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-action>
                                  <v-btn icon>
                                    <v-icon>mdi-account-eye</v-icon>
                                  </v-btn>
                                </v-list-item-action>
                              </v-list-item>
                              <v-list-item>
                                <v-list-item-avatar>
                                  <v-img src="assets/user.png"></v-img>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                  <v-list-item-title>
                                    Sample Header2_D
                                  </v-list-item-title>
                                  <v-list-item-subtitle>
                                    Sample subheader2_D
                                  </v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-item-action>
                                  <v-btn icon>
                                    <v-icon>mdi-account-eye</v-icon>
                                  </v-btn>
                                </v-list-item-action>
                              </v-list-item>
                              <v-list-item>
                                <v-list-item-avatar>
                                  <v-img src="assets/user.png"></v-img>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                  <v-list-item-title>
                                    Sample Header3_D
                                  </v-list-item-title>
                                  <v-list-item-subtitle>
                                    Sample subheader3-1_D
                                  </v-list-item-subtitle>
                                  <v-list-item-subtitle>
                                    Sample subheader3-2_D
                                  </v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-item-action>
                                  <v-btn icon>
                                    <v-icon>mdi-account-eye</v-icon>
                                  </v-btn>
                                </v-list-item-action>
                              </v-list-item>
                            </v-list>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <h3>List item group</h3>
                  <v-divider></v-divider>
                  Groups items on the list. This component has a selection function which can be used for
                  navigation, viewing information and other selection purposes.
                </v-col>
              </v-row>
              
              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="5">
                            <v-list id="list4">
                              <v-list-item-group>
                                <v-list-item>
                                  <v-list-item-icon>
                                    <v-icon>mdi-home</v-icon>
                                  </v-list-item-icon>
                                  <v-list-item-content>
                                    <v-list-item-title>
                                      Sample Header1_F
                                    </v-list-item-title>
                                  </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                  <v-list-item-icon>
                                    <v-icon>mdi-account</v-icon>
                                  </v-list-item-icon>
                                  <v-list-item-content>
                                    <v-list-item-title>
                                      Sample Header2_F
                                    </v-list-item-title>
                                  </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                  <v-list-item-icon>
                                    <v-icon>mdi-cog</v-icon>
                                  </v-list-item-icon>
                                  <v-list-item-content>
                                    <v-list-item-title>
                                      Sample Header3_F
                                    </v-list-item-title>
                                  </v-list-item-content>
                                </v-list-item>
                              </v-list-item-group>
                            </v-list>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <h3>Sub group</h3>
                  <v-divider></v-divider>
                  Adds an icon before or after the component.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="5">
                            <v-list id="list5">
                              <v-list-item-group>
                                <v-list-item>
                                  <v-list-item-icon>
                                    <v-icon>mdi-home</v-icon>
                                  </v-list-item-icon>
                                  <v-list-item-content>
                                    <v-list-item-title>
                                      Sample Header1_I
                                    </v-list-item-title>
                                  </v-list-item-content>
                                </v-list-item>
                                <v-list-group prepend-icon="mdi-account">
                                  <template v-slot:activator>
                                    <v-list-item-content>
                                        <v-list-item-title>
                                          Sample Header2_I
                                        </v-list-item-title>
                                    </v-list-item-content>
                                  </template>
            
            
                                  <v-list-item sub-group >
                                    <v-list-item-avatar>
                                      <v-img src='assets/user.png'></v-img>
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                      <v-list-item-title>
                                        Sample subgroup header2-1_I
                                      </v-list-item-title>
                                    </v-list-item-content>
                                  </v-list-item>
            
                                  <v-list-item sub-group >
                                    <v-list-item-avatar>
                                      <v-img src='assets/user.png'></v-img>
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                      <v-list-item-title>
                                        Sample subgroup header2-2_I
                                      </v-list-item-title>
                                    </v-list-item-content>
                                  </v-list-item>
            
                                  <v-list-item sub-group >
                                    <v-list-item-avatar>
                                      <v-img src='assets/user.png'></v-img>
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                      <v-list-item-title>
                                        Sample subgroup header2-3_I
                                      </v-list-item-title>
                                    </v-list-item-content>
                                  </v-list-item>
                                  
                                  
                                </v-list-group>
                                <v-list-group prepend-icon="mdi-cog">
                                  <template v-slot:activator>
                                    <v-list-item-content>
                                        <v-list-item-title>
                                          Sample Header3_I
                                        </v-list-item-title>
                                    </v-list-item-content>
                                  </template>
                                  
                                  <v-list-item sub-group >
                                    <v-list-item-avatar>
                                      <v-icon>mdi-account</v-icon>
                                    </v-list-item-avatar>
                                    <v-list-item-content>
                                      <v-list-item-title>
                                        Sample subgroup header3-1_I
                                      </v-list-item-title>
                                    </v-list-item-content>
                                  </v-list-item>
                                
                                </v-list-group>
                              </v-list-item-group>
                            </v-list>
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
  