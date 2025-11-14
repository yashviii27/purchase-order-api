import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PoStatus, PoStatusDocument } from './po-status.schema';
import { CreatePoStatusDto } from './dto/create-po-status.dto';

@Injectable()
export class PoStatusService {
  constructor(@InjectModel(PoStatus.name) private model: Model<PoStatusDocument>) {}

  create(dto: CreatePoStatusDto) { return new this.model(dto).save(); }

  findAll() { return this.model.find().lean(); }

  findByPoNo(po_no: string) { return this.model.find({ po_no }).lean(); }

  async update(id: string, payload: Partial<CreatePoStatusDto>) {
    const updated = await this.model.findByIdAndUpdate(id, payload, { new: true });
    if (!updated) throw new NotFoundException('PO status not found');
    return updated;
  }

  async delete(id: string) {
    const res = await this.model.findByIdAndDelete(id);
    if (!res) throw new NotFoundException('PO status not found');
    return res;
  }
}
