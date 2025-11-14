import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PurchaseOrderMasterDocument = PurchaseOrderMaster & Document;

@Schema({ timestamps: true })
export class PurchaseOrderMaster {
  @Prop({ required: true, unique: true }) po_no: string;        // e.g. "2025-26-11-25"
  @Prop() rev_no: string;                                       // Rev.No.
  @Prop() po_date: Date;                                        // po-date
  @Prop() sup_id: number;                                       // supplier id
  @Prop() amount: number;                                       // amount total
  @Prop() transportation?: string;                              // optional transportation
  @Prop() notes?: string;
}

export const PurchaseOrderMasterSchema = SchemaFactory.createForClass(PurchaseOrderMaster);
