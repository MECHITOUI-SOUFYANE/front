export interface Product {
  id: number;
  code: string;
  name: string;
  description: string;
  image: string;
  category: string;
  price: number;
  quantity: number;
  internalReference: string;
  shellId: number;
  inventoryStatus: InventoryStatus;
  rating: number;
  createdAt: number;
  updatedAt: number;
}

export enum InventoryStatus{
  IN_STOCK="IN_STOCK",
  LOW_STOCK="LOW_STOCK",
  OUT_OF_STOCK="OUT_OF_STOCK"
}

