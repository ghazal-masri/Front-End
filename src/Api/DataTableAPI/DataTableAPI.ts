import axios from 'axios'
import { DataTableClass } from './DataTableAPI.model'

function TableDataAPI() {
    async function getTableData() {
        const resObj = new DataTableClass()
        let response = await axios({
            method: 'get',
            url: 'http://localhost:3003/data',
            data: {
                title: 'Article title',
                body: 'Article body content',
                userId: 1,
            },
        })

        resObj.setData(response.data)
        return resObj
    }
    return { getTableData }
}
export default TableDataAPI
