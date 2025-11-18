import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type GrnMasterDocument = GrnMaster & Document;

@Schema({ timestamps: true })
export class GrnMaster {
  @Prop({ required: true, unique: true })
  grn_no!: string;

  @Prop()
  date?: Date;

  @Prop()
  sup_id?: number;

  @Prop()
  pur_inv_no?: string;

  @Prop()
  pur_inv_date?: Date;

  @Prop({ type: Types.ObjectId, ref: 'PurchaseOrderMaster' })
  poId?: Types.ObjectId; // reference PO

  @Prop()
  remarks?: string;
}

export const GrnMasterSchema =
  SchemaFactory.createForClass(GrnMaster);
