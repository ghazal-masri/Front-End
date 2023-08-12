export type tableType = {
    labels: string[]

    data: dataType[][]
}
export type dataType = {
    value: string

    type: string | Date | number
}
export type DataTableStoreType={
    dataTable:tableType
}