import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PurchaseOrderMaster, PurchaseOrderMasterDocument } from './purchase-order-master.schema';
import { CreatePoMasterDto } from './dto/create-po-master.dto';

@Injectable()
export class PurchaseOrderMasterService {
  constructor(
    @InjectModel(PurchaseOrderMaster.name) private poMasterModel: Model<PurchaseOrderMasterDocument>,
  ) {}

  create(dto: CreatePoMasterDto) {
    const doc = new this.poMasterModel({
      ...dto,
      po_date: dto.po_date ? new Date(dto.po_date) : undefined,
    });
    return doc.save();
  }

  findAll() {
    return this.poMasterModel.find().lean();
  }

  findOneByPoNo(po_no: string) {
    return this.poMasterModel.findOne({ po_no }).lean();
  }

  async update(po_no: string, payload: Partial<CreatePoMasterDto>) {
    if (payload.po_date) payload.po_date = new Date(payload.po_date) as any;
    const updated = await this.poMasterModel.findOneAndUpdate({ po_no }, { $set: payload }, { new: true });
    if (!updated) throw new NotFoundException('PO master not found');
    return updated;
  }

  async delete(po_no: string) {
    const res = await this.poMasterModel.findOneAndDelete({ po_no });
    if (!res) throw new NotFoundException('PO master not found');
    return res;
  }
}
