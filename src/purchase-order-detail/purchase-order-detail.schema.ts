import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PurchaseOrderDetailDocument = PurchaseOrderDetail & Document;

@Schema({ timestamps: true })
export class PurchaseOrderDetail {
  @Prop({ type: Types.ObjectId, ref: 'PurchaseOrderMaster', required: true }) poId: Types.ObjectId;
  @Prop() sr_no: number;
  @Prop() pro_id: number;
  @Prop() make?: string;
  @Prop() qty: number;
  @Prop() a_qty?: number; // accepted / adjusted qty
  @Prop() rate?: number;
  @Prop() tax?: number;
  @Prop() amt?: number;
}

export const PurchaseOrderDetailSchema = SchemaFactory.createForClass(PurchaseOrderDetail);
