import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Vendor extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  contactDetails: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true, unique: true })
  vendorCode: string;

  @Prop({ default: 0 })
  onTimeDeliveryRate: number;

  @Prop({ default: 0 })
  qualityRatingAvg: number;

  @Prop({ default: 0 })
  averageResponseTime: number;

  @Prop({ default: 0 })
  fulfillmentRate: number;
}

export const VendorSchema = SchemaFactory.createForClass(Vendor);
