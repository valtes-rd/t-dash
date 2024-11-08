const mockData5 = [];
for (let i = 0; i < 20; i++) {
    mockData5.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
    });
}

const originTargetKeys = mockData5.filter(item => +item.key % 3 > 1).map(item => item.key);

const leftTableColumns = [
    {
        dataIndex: 'title',
        title: 'Name',
    },
    {
        dataIndex: 'description',
        title: 'Description',
    },
];

const rightTableColumns = [
    {
        dataIndex: 'title',
        title: 'Name',
    },
];

const Transfer_List = Vue.component('Transfer_List', {
    data: function(){ 
        return {
            mockData: [],
            targetKeys: [],

            mockData2: [],
            targetKeys2: [],

            mockData3: [],
            targetKeys3: [],

            mockData4: [],
            targetKeys4: [],
            
            mockData5,
            targetKeys5: originTargetKeys,
            disabled: false,
            showSearch: false,
            leftColumns: leftTableColumns,
            rightColumns: rightTableColumns,
         
        }
    },
    mounted: function(){
        this.getMock();
        this.getMock2();
        this.getMock3();
        this.getMock4();
    },
    created: function() {},
    methods: {
        getMock() {
            const targetKeys = [];
            const mockData = [];
            for (let i = 0; i < 20; i++) {
            const data = {
                key: i.toString(),
                title: `content${i + 1}`,
                description: `description of content${i + 1}`,
                chosen: Math.random() * 2 > 1,
            };
            if (data.chosen) {
                targetKeys.push(data.key);
            }
            mockData.push(data);
            }
            this.mockData = mockData;
            this.targetKeys = targetKeys;
        },
        filterOption(inputValue, option) {
            return option.description.indexOf(inputValue) > -1;
        },
        handleChange(targetKeys, direction, moveKeys) {
            // console.log(targetKeys, direction, moveKeys);
            this.targetKeys = targetKeys;
        },
        handleSearch(dir, value) {
            // console.log('search:', dir, value);
        },
        getMock2() {
            const targetKeys2 = [];
            const mockData2 = [];
            for (let i = 0; i < 20; i++) {
            const data2 = {
                key: i.toString(),
                title: `content${i + 1}`,
                description: `description of content${i + 1}`,
                chosen: Math.random() * 2 > 1,
            };
            if (data2.chosen) {
                targetKeys2.push(data2.key);
            }
            mockData2.push(data2);
            }
            this.mockData2 = mockData2;
            this.targetKeys2 = targetKeys2;
        },
        filterOption2(inputValue2, option2) {
            return option2.description.indexOf(inputValue2) > -1;
        },
        handleChange2(targetKeys2, direction2, moveKeys2) {
            // console.log(targetKeys, direction, moveKeys);
            this.targetKeys2 = targetKeys2;
        },
        handleSearch2(dir2, value2) {
            // console.log('search:', dir, value);
        },
        getMock3() {
            const targetKeys3 = [];
            const mockData3 = [];
            for (let i = 0; i < 20; i++) {
            const data3 = {
                key: i.toString(),
                title: `content${i + 1}`,
                description: `description of content${i + 1}`,
                chosen: Math.random() * 2 > 1,
            };
            if (data3.chosen) {
                targetKeys3.push(data3.key);
            }
            mockData3.push(data3);
            }
            this.mockData3 = mockData3;
            this.targetKeys3 = targetKeys3;
        },
        filterOption3(inputValue3, option3) {
            return option3.description.indexOf(inputValue3) > -1;
        },
        handleChange3(targetKeys3, direction3, moveKeys3) {
            // console.log(targetKeys, direction, moveKeys);
            this.targetKeys3 = targetKeys3;
        },
        handleSearch3(dir3, value3) {
            // console.log('search:', dir, value);
        },
        getMock4() {
            const targetKeys4 = [];
            const mockData4 = [];
            for (let i = 0; i < 20; i++) {
            const data4 = {
                key: i.toString(),
                title: `content${i + 1}`,
                description: `description of content${i + 1}`,
                chosen: Math.random() * 2 > 1,
            };
            if (data4.chosen) {
                targetKeys4.push(data4.key);
            }
            mockData4.push(data4);
            }
            this.mockData4 = mockData4;
            this.targetKeys4 = targetKeys4;
        },
        filterOption4(inputValue4, option4) {
            return option4.description.indexOf(inputValue4) > -1;
        },
        handleChange4(targetKeys4, direction4, moveKeys4) {
            // console.log(targetKeys, direction, moveKeys);
            this.targetKeys4 = targetKeys4;
        },
        handleSearch4(dir4, value4) {
            // console.log('search:', dir, value);
        },
        
        onChange(nextTargetKeys) {
            this.targetKeys5 = nextTargetKeys;
        },
    
        triggerDisable(disabled) {
            this.disabled = disabled;
        },
    
        triggerShowSearch(showSearch) {
            this.showSearch = showSearch;
        },
        getRowSelection({ disabled, selectedKeys, itemSelectAll, itemSelect }) {
            return {
                getCheckboxProps: item => ({ props: { disabled: disabled || item.disabled } }),
                onSelectAll(selected, selectedRows) {
                    const treeSelectedKeys = selectedRows
                    .filter(item => !item.disabled)
                    .map(({ key }) => key);
                    const diffKeys = selected
                    ? _.difference(treeSelectedKeys, selectedKeys)
                    : _.difference(selectedKeys, treeSelectedKeys);
                    itemSelectAll(diffKeys, selected);
                },
                onSelect({ key }, selected) {
                    itemSelect(key, selected);
                },
                selectedRowKeys: selectedKeys,
            };
        },
    },
    template:
    `<v-container>
        <v-row>
            <v-col>
                <div style="" class="tdash">
                    <h1>Transfer List</h1>
                    This component transfers an item/items to another list.
                    
                    <v-container>
                        <v-row>
                            <v-col>
                                <h2>Usage</h2>
                                <v-divider></v-divider>
                                To transfer an item/items, clicking the checkbox will select an item to be transfered to another
                                list and vice versa and click the arrow buttons to transfer the item.
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col>
                                <v-card height="" outlined>
                                    <v-card-text>
                                        <v-container>
                                            <v-row>
                                                <v-col cols="5">
                                                    <a-transfer id="transfer1"
                                                    :data-source="mockData"
                                                    :filter-option="filterOption"
                                                    :target-keys="targetKeys"
                                                    :render="item => item.title"
                                                    @change="handleChange"
                                                    @search="handleSearch"/>
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
                                    Disables the component.
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col>
                                    <v-card height="" outlined>
                                        <v-card-text>
                                            <v-container>
                                                <v-row>
                                                    <v-col cols="5">
                                                        <a-transfer id="transfer2"
                                                        :data-source="mockData2"
                                                        :filter-option="filterOption2"
                                                        :target-keys="targetKeys2"
                                                        :render="item => item.title"
                                                        @change="handleChange2"
                                                        @search="handleSearch2"
                                                        disabled/>
                                                    </v-col>
                                                </v-row>
                                            </v-container>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col>
                                    <h3>Search</h3>
                                    <v-divider></v-divider>
                                    Searches an item from the list.
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col>
                                    <v-card height="" outlined>
                                        <v-card-text>
                                            <v-container>
                                                <v-row>
                                                    <v-col cols="5">
                                                        <a-transfer id="transfer3"
                                                        :data-source="mockData3"
                                                        show-search
                                                        :filter-option="filterOption3"
                                                        :target-keys="targetKeys3"
                                                        :render="item => item.title"
                                                        @change="handleChange3"
                                                        @search="handleSearch3"/>
                                                    </v-col>
                                                </v-row>
                                            </v-container>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col>
                                    <h3>Reload</h3>
                                    <v-divider></v-divider>
                                    Returns an item back to its original list.
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col>
                                    <v-card height="" outlined>
                                        <v-card-text>
                                            <v-container>
                                                <v-row>
                                                    <v-col cols="5">
                                                        <a-transfer id="transfer4"
                                                        :data-source="mockData4"
                                                        :filter-option="filterOption4"
                                                        :target-keys="targetKeys4"
                                                        :render="item => item.title"
                                                        @change="handleChange4"
                                                        @search="handleSearch4">
                                                            <a-button
                                                                slot="footer"
                                                                slot-scope="props"
                                                                size="small"
                                                                style="float:right;margin: 5px"
                                                                @click="getMock4"
                                                            >
                                                                reload
                                                            </a-button>
                                                        
                                                        </a-transfer>
                                                    </v-col>
                                                </v-row>
                                            </v-container>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col>
                                    <h3>Table Transfer</h3>
                                    <v-divider></v-divider>
                                    Transfer items in table format.
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col>
                                    <v-card height="" outlined>
                                        <v-card-text>
                                            <v-container>
                                                <v-row>
                                                    <v-col>
                                                        <div>
                                                            <a-transfer id="transfer5"
                                                            :data-source="mockData5"
                                                            :target-keys="targetKeys5"
                                                            :disabled="disabled"
                                                            :show-search="showSearch"
                                                            :filter-option="(inputValue, item) => item.title.indexOf(inputValue) !== -1"
                                                            :show-select-all="false"
                                                            @change="onChange"
                                                            >
                                                                <template
                                                                slot="children"
                                                                slot-scope=
                                                                "{
                                                                    props: { direction, filteredItems, selectedKeys, disabled: listDisabled },
                                                                    on: { itemSelectAll, itemSelect },
                                                                }">
                                                                    <a-table
                                                                    :row-selection="getRowSelection({ disabled: listDisabled, selectedKeys, itemSelectAll, itemSelect })"
                                                                    :columns="direction === 'left' ? leftColumns : rightColumns"
                                                                    :data-source="filteredItems"
                                                                    size="small"
                                                                    :style="{ pointerEvents: listDisabled ? 'none' : null }"
                                                                    :custom-row="
                                                                        ({ key, disabled: itemDisabled }) => ({
                                                                            on: {
                                                                                click: () => {
                                                                                if (itemDisabled || listDisabled) return;
                                                                                itemSelect(key, !selectedKeys.includes(key));
                                                                                },
                                                                            },
                                                                        })
                                                                    "
                                                                    />
                                                                </template>
                                                            </a-transfer>
                                                            <a-switch
                                                            un-checked-children="disabled"
                                                            checked-children="disabled"
                                                            :checked="disabled"
                                                            style="margin-top: 16px"
                                                            @change="triggerDisable"/>
                                                            <a-switch
                                                            un-checked-children="showSearch"
                                                            checked-children="showSearch"
                                                            :checked="showSearch"
                                                            style="margin-top: 16px"
                                                            @change="triggerShowSearch"/>
                                                        </div>
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
  