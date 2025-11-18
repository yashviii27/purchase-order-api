import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PurchaseOrderDetailDocument = PurchaseOrderDetail & Document;

@Schema({ timestamps: true })
export class PurchaseOrderDetail {
  @Prop({ type: Types.ObjectId, ref: 'PurchaseOrderMaster', required: true })
  poId!: Types.ObjectId;

  @Prop({ required: true })
  sr_no!: number;

  @Prop({ required: true })
  pro_id!: number;

  @Prop()
  make?: string;

  @Prop({ required: true })
  qty!: number;

  @Prop()
  a_qty?: number;

  @Prop()
  rate?: number;

  @Prop()
  tax?: number;

  @Prop()
  amt?: number;
}

export const PurchaseOrderDetailSchema =
  SchemaFactory.createForClass(PurchaseOrderDetail);
