/* eslint-disable @typescript-eslint/no-explicit-any */
import type { TableProps } from 'antd';
import { Table } from 'antd';
import React from 'react';
import { distinctTableColumnFilter } from '../../common/utils/table';
import { INVENTORY_TABLE_COLUMNS } from '../common/constants';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const data = [
    {
      "itemId": 1,
      "name": "Laptop",
      "category": "Electronics",
      "quantity": 10,
      "location": "Office Desk",
      "condition": "Good",
      "purchaseDate": "2022-05-15",
      "price": 1200.50,
      "supplier": "TechSupply Co.",
      "warrantyExpiry": "2024-05-15",
      "lastUpdated": "2024-08-10T12:30:00Z",
      "notes": "Main work laptop",
      "barcode": "123456789012",
      "imageUrl": "http://example.com/images/laptop.jpg",
      "expirationDate": null,
      "storageConditions": "Keep dry",
      "reorderLevel": 2,
      "disposalStatus": "In Use"
    },
    {
      "itemId": 2,
      "name": "Office Chair",
      "category": "Furniture",
      "quantity": 5,
      "location": "Office",
      "condition": "Fair",
      "purchaseDate": "2021-07-20",
      "price": 150.00,
      "supplier": "FurnitureWorld",
      "warrantyExpiry": "2023-07-20",
      "lastUpdated": "2024-08-05T09:15:00Z",
      "notes": "Ergonomic chair",
      "barcode": "987654321098",
      "imageUrl": "http://example.com/images/office-chair.jpg",
      "expirationDate": null,
      "storageConditions": "Room temperature",
      "reorderLevel": 1,
      "disposalStatus": "For Sale"
    },
    {
      "itemId": 3,
      "name": "Printer Ink Cartridge",
      "category": "Electronics",
      "quantity": 20,
      "location": "Supply Cabinet",
      "condition": "New",
      "purchaseDate": "2024-01-10",
      "price": 45.75,
      "supplier": "OfficeSupplies Inc.",
      "warrantyExpiry": null,
      "lastUpdated": "2024-08-07T11:00:00Z",
      "notes": "Black ink cartridge",
      "barcode": "567890123456",
      "imageUrl": "http://example.com/images/ink-cartridge.jpg",
      "expirationDate": "2025-01-10",
      "storageConditions": "Cool and dry",
      "reorderLevel": 5,
      "disposalStatus": "To Be Recycled"
    },
    {
      "itemId": 4,
      "name": "Desk Lamp",
      "category": "Furniture",
      "quantity": 8,
      "location": "Office",
      "condition": "Good",
      "purchaseDate": "2023-03-25",
      "price": 75.00,
      "supplier": "LightingSolutions",
      "warrantyExpiry": "2025-03-25",
      "lastUpdated": "2024-08-09T14:45:00Z",
      "notes": "Adjustable desk lamp",
      "barcode": "112233445566",
      "imageUrl": "http://example.com/images/desk-lamp.jpg",
      "expirationDate": null,
      "storageConditions": "Room temperature",
      "reorderLevel": 3,
      "disposalStatus": "In Use"
    },
    {
      "itemId": 5,
      "name": "Whiteboard Marker",
      "category": "Stationery",
      "quantity": 50,
      "location": "Meeting Room",
      "condition": "Good",
      "purchaseDate": "2023-12-01",
      "price": 3.50,
      "supplier": "StationeryCentral",
      "warrantyExpiry": null,
      "lastUpdated": "2024-08-06T10:30:00Z",
      "notes": "Pack of 10 markers",
      "barcode": "223344556677",
      "imageUrl": "http://example.com/images/marker.jpg",
      "expirationDate": "2025-12-01",
      "storageConditions": "Cool place",
      "reorderLevel": 10,
      "disposalStatus": "In Use"
    }
  ]
  

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const InventoryTable: React.FC = () => {
    const columnsWithFilter = INVENTORY_TABLE_COLUMNS.map((column) => distinctTableColumnFilter(column, data)).map((col)=>({
        ...col, 
        render:(record:any)=><div style={{minWidth:'100px'}}>{record}</div>
    }));
    
    return(
        <Table
            bordered
            columns={columnsWithFilter}
            dataSource={data}
            footer={()=>"End of Table"}
            onChange={onChange}
            scroll={{ x: 500, y: 500 }}
            showSorterTooltip={{ target: 'sorter-icon' }}
            title={()=>"Inventory Management"}
        />
    );
}

export default InventoryTable;