import { dataType } from './DataTableAPI.Types'

export interface IDataTable {
    labels: string[]
    data: dataType[][]
}
export class DataTableClass implements IDataTable{

labels:string[]=[]
data:dataType[][]=[]

setData(data:IDataTable):DataTableClass{
    this.labels=data.labels
    this.data=data.data
    return this
}
copy(originalData?:IDataTable):DataTableClass{
    const tempOriginalData=originalData||this
    const newClass =new DataTableClass()
    return Object.assign(newClass , {...tempOriginalData})
}


}