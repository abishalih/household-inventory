import { TableColumnsType } from "antd";

export const INVENTORY_TABLE_COLUMNS:TableColumnsType = [
    {
        dataIndex: "itemId",
        fixed:'left',
        onFilter: (value, record) => record.itemId.toString().indexOf(value as string) === 0,
        showSorterTooltip: { "target": "full-header" },
        sortDirections: ["descend"],
        sorter: (a, b) => a.itemId - b.itemId,
        title: "Item ID",
        width:100
    },
    {
        "dataIndex": "name",
        fixed:'left',
        "showSorterTooltip": { "target": "full-header" },
        "onFilter": (value, record) => record.name.indexOf(value as string) === 0,
        "sorter": (a, b) => a.name.length - b.name.length,
        "sortDirections": ["descend"],
        "title": "Name",
        width:100
    },
    {
      "title": "Category",
      "dataIndex": "category",
      "onFilter": (value, record) => record.category.indexOf(value as string) === 0,
      "sorter": (a, b) => a.category.length - b.category.length
    },
    {
      "title": "Quantity",
      "dataIndex": "quantity",
      "defaultSortOrder": "descend",
      "sorter": (a, b) => a.quantity - b.quantity
    },
    {
      "title": "Location",
      "dataIndex": "location",
      "onFilter": (value, record) => record.location.indexOf(value as string) === 0
    },
    {
      "title": "Condition",
      "dataIndex": "condition",
      "onFilter": (value, record) => record.condition.indexOf(value as string) === 0
    },
    {
      "title": "Purchase Date",
      "dataIndex": "purchaseDate",
      "sorter": (a, b) => new Date(a.purchaseDate).getTime() - new Date(b.purchaseDate).getTime(),
      "sortDirections": ["descend"]
    },
    {
      "title": "Price",
      "dataIndex": "price",
      "defaultSortOrder": "descend",
      "sorter": (a, b) => a.price - b.price
    },
    {
      "title": "Supplier",
      "dataIndex": "supplier",
      "onFilter": (value, record) => record.supplier.indexOf(value as string) === 0
    },
    {
      "title": "Warranty Expiry",
      "dataIndex": "warrantyExpiry",
      "sorter": (a, b) => new Date(a.warrantyExpiry).getTime() - new Date(b.warrantyExpiry).getTime(),
      "sortDirections": ["descend"]
    },
    {
      "title": "Last Updated",
      "dataIndex": "lastUpdated",
      "sorter": (a, b) => new Date(a.lastUpdated).getTime() - new Date(b.lastUpdated).getTime(),
      "sortDirections": ["descend"]
    },
    {
      "title": "Notes",
      "dataIndex": "notes",
      "onFilter": (value, record) => record.notes.indexOf(value as string) === 0
    },
    {
      "title": "Barcode",
      "dataIndex": "barcode",
      "onFilter": (value, record) => record.barcode.indexOf(value as string) === 0
    },
    {
      "title": "Image URL",
      "dataIndex": "imageUrl"
    },
    {
      "title": "Expiration Date",
      "dataIndex": "expirationDate",
      "sorter": (a, b) => new Date(a.expirationDate).getTime() - new Date(b.expirationDate).getTime(),
      "sortDirections": ["descend"]
    },
    {
      "title": "Storage Conditions",
      "dataIndex": "storageConditions",
      "onFilter": (value, record) => record.storageConditions.indexOf(value as string) === 0
    },
    {
      "title": "Reorder Level",
      "dataIndex": "reorderLevel",
      "defaultSortOrder": "descend",
      "sorter": (a, b) => a.reorderLevel - b.reorderLevel
    },
    {
      "title": "Disposal Status",
      "dataIndex": "disposalStatus",
      "onFilter": (value, record) => record.disposalStatus.indexOf(value as string) === 0
    }
  ]
  