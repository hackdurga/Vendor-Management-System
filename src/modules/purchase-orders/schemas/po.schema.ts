import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Vendor } from '../../vendors/schemas/vendor.schema';

@Schema()
export class PurchaseOrder extends Document {
  @Prop({ required: true })
  poNumber: string;

  @Prop({ type: Types.ObjectId, ref: Vendor.name, required: true })
  vendor: Vendor;

  @Prop({ required: true })
  orderDate: Date;

  @Prop({ required: true })
  deliveryDate: Date;

  @Prop({ required: true })
  items: any;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  status: string;

  @Prop({ default: null })
  qualityRating?: number;

  @Prop({ required: true })
  issueDate: Date;

  @Prop({ default: null })
  acknowledgmentDate?: Date;
}

export const PurchaseOrderSchema = SchemaFactory.createForClass(PurchaseOrder);
