import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PurchaseOrderMasterDocument = PurchaseOrderMaster & Document;

@Schema({ timestamps: true })
export class PurchaseOrderMaster {
  @Prop({ required: true, unique: true })
  po_no!: string;        // e.g. "2025-26-11-25"

  @Prop()
  rev_no?: string;       // Rev.No.

  @Prop()
  po_date?: Date;        // PO date

  @Prop()
  sup_id?: number;       // supplier id

  @Prop()
  amount?: number;       // total amount

  @Prop()
  transportation?: string;

  @Prop()
  notes?: string;
}

export const PurchaseOrderMasterSchema =
  SchemaFactory.createForClass(PurchaseOrderMaster);
