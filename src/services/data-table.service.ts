import { defineStore } from 'pinia'
import {
    DataTableStoreType,
    tableType,
} from '../Api/DataTableAPI/DataTableAPI.Types'
import TableDataAPI from '../Api/DataTableAPI/DataTableAPI'

const tableDataAPI = TableDataAPI()
export const useDataTableStore = defineStore('dataTable', {
    state: (): DataTableStoreType => ({
        dataTable: {} as tableType,
    }),

    actions: {
        async loadDataTabel() {
            this.$state.dataTable = await tableDataAPI.getTableData()
        },
        async loadNext(){
            let temp = await tableDataAPI.getTableData()
            this.$state.dataTable.data=[...temp.data,...this.$state.dataTable.data]
    
        }
    },
})
