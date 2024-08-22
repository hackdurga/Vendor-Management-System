export class CreatePurchaseOrderDto {
    readonly poNumber: string;
    readonly vendor: string;
    readonly orderDate: Date;
    readonly deliveryDate: Date;
    readonly items: any;
    readonly quantity: number;
    readonly status: string;
    readonly qualityRating?: number;
    readonly issueDate: Date;
    readonly acknowledgmentDate?: Date;
  }
  