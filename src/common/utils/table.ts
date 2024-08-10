/* eslint-disable @typescript-eslint/no-explicit-any */
import { TableColumnType } from "antd";

export const distinctTableColumnFilter = (column:TableColumnType<any>, data:any[]) => {
    // Use a Set to store unique filter values
    const uniqueValues = new Set(data.map((val) => val[column.dataIndex]));

    // Map the unique values to the desired format
    const filters = Array.from(uniqueValues).map((value) => ({
        text: value,
        value: value,
    }));

    // Return the column with the filters
    return { ...column, filters:column.onFilter?filters:undefined };
}