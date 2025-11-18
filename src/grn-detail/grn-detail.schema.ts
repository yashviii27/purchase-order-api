import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type GrnDetailDocument = GrnDetail & Document;

@Schema({ timestamps: true })
export class GrnDetail {
  @Prop({ type: Types.ObjectId, ref: 'GrnMaster', required: true })
  grnId!: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'PurchaseOrderMaster' })
  poId?: Types.ObjectId;

  @Prop({ required: true })
  sr_no!: number;

  @Prop({ required: true })
  pro_id!: number;

  @Prop({ required: true })
  qty!: number;

  @Prop()
  rate?: number;

  @Prop()
  amt?: number;
}

export const GrnDetailSchema =
  SchemaFactory.createForClass(GrnDetail);
