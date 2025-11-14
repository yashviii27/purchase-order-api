import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PoStatusDocument = PoStatus & Document;

@Schema({ timestamps: true })
export class PoStatus {
  @Prop() sup_id: number;
  @Prop() po_no: string;
  @Prop() rev?: number;
  @Prop() pro_id: number;
  @Prop() order_qty: number;
  @Prop() rec_qty: number;
  @Prop() pending_qty: number;
}

export const PoStatusSchema = SchemaFactory.createForClass(PoStatus);
