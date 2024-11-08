const Table = Vue.component('Table', {
  data: function(){ 
    return {
      search: '',
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: 'Name',
          align: 'start',
          value: 'name',
        },
        { text: 'Age', value: 'calories' },
        { text: 'Email Address', value: 'fat' },
        { text: 'Country', value: 'carbs' },
        { text: 'Birthdate', value: 'protein' },
        { text: 'Remarks', value: 'iron' },
      ],
      desserts: [
        {
          name: 'Jane Doe',
          calories: 16,
          fat: 'jane.doe@example.com',
          carbs: 'Japan',
          protein: '06-14-2002',
          iron: 'N/A',
        },
        {
          name: 'Sam Smith',
          calories: 23,
          fat: 'sam.smith@example.com',
          carbs: 'Philippines',
          protein: '03-14-1998',
          iron: 'N/A',
        },
        {
          name: 'James Bond',
          calories: 25,
          fat: 'james.bond@example.com',
          carbs: 'Philippines',
          protein: '03-14-1996',
          iron: 'N/A',
        },
      
      ],
      groupHeaders: [
        {
          text: 'Name',
          align: 'start',
          value: 'name',
          groupable: false,
        },
        { text: 'Age', value: 'calories', groupable: false, },
        { text: 'Email Address', value: 'fat', groupable: false, },
        { text: 'Country', value: 'country',  },
        { text: 'Birthdate', value: 'protein', groupable: false, },
        { text: 'Remarks', value: 'iron', groupable: false, },
        { text: 'Department', value: 'department', align:'right', },

      ],
      groupData: [
        {
          name: 'Chriss Lee',
          calories: 16,
          fat: 'chriss.lee@example.com',
          country: 'Japan',
          protein: '06-14-2002',
          iron: 'N/A',
          department: 'Admin'
        },
        {
          name: 'Ralph Dee',
          calories: 23,
          fat: 'ralph.dee@example.com',
          country: 'Philippines',
          protein: '03-14-1998',
          iron: 'N/A',
          department: 'IT'
        },
        {
          name: 'Ram Bo',
          calories: 25,
          fat: 'ram.bo@example.com',
          country: 'Philippines',
          protein: '03-14-1996',
          iron: 'N/A',
          department: 'IT',
        },
      ]
    }
  },
  created: function() {},
  methods: {},
  template:
  `<v-container>
    <v-row>
      <v-col>
        <div style="" class="tdash">
          <h1>Table</h1>
          This component organizes and displays data in the page. It is composed of columns, rows,
          headers and the data stored from the database will be viewed on the page.
          
          <v-container>
            <v-row>
              <v-col>
                <h2>Usage</h2>
                <v-divider></v-divider>
                The user may view the records displayed on this component. It also has its user functions
                such as filters and actions to help the user execute certain functions in the table.
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-card height="" outlined>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col >
                          <template>
                            <v-data-table id="table1"
                              :headers="headers"
                              :items="desserts"
                              :items-per-page="5"
                            ></v-data-table>
                          </template>
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
                  <h3>Search</h3>
                  <v-divider></v-divider>
                  Searches an item from the table.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col >
                            <v-spacer></v-spacer>
                            <v-text-field append-icon="mdi-magnify" label="Search" v-model="search"></v-text-field>
                            <v-data-table id="table2"
                              :headers="headers"
                              :items="desserts"
                              :items-per-page="5"
                              :search="search"
                            ></v-data-table>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <h3>Grouping</h3>
                  <v-divider></v-divider>
                  Groups the rows depending on its column header.
                </v-col>
              </v-row>
              
              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col >
                            <v-data-table id="table3"
                              :headers="groupHeaders"
                              :items="groupData"
                              :items-per-page="5"
                              show-group-by
                            ></v-data-table>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <h3>Loading</h3>
                  <v-divider></v-divider>
                  This component is used whenever the page or the data is still loading to cover the datatable's
                  unwanted appearance while loading.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col >
                            <v-data-table id="table4"
                              loading
                              loading-text="Loading... Please wait"
                            ></v-data-table>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <h3>Row Selection</h3>
                  <v-divider></v-divider>
                  Selects a row to include in a certain task. A checkbox on the column header can be checked
                  to select all rows.
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-card height="" outlined>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col >
                            <v-data-table id="table5"
                              v-model="selected"
                              :headers="headers"
                              :items="desserts"
                              :items-per-page="5"
                              :single-select="singleSelect"
                              item-key="name"
                              show-select>
                            </v-data-table>
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
  