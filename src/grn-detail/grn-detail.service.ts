import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { GrnDetail, GrnDetailDocument } from './grn-detail.schema';
import { CreateGrnDetailDto } from './dto/create-grn-detail.dto';

@Injectable()
export class GrnDetailService {
  constructor(@InjectModel(GrnDetail.name) private model: Model<GrnDetailDocument>) {}

  create(dto: CreateGrnDetailDto) {
    const data: any = { ...dto, grnId: new Types.ObjectId(dto.grnId) };
    if (dto.poId) data.poId = new Types.ObjectId(dto.poId);
    return new this.model(data).save();
  }

  findByGrnId(grnId: string) { return this.model.find({ grnId }).lean(); }

  findAll() { return this.model.find().populate('grnId').lean(); }

  async update(id: string, payload: Partial<CreateGrnDetailDto>) {
    const updated = await this.model.findByIdAndUpdate(id, payload, { new: true });
    if (!updated) throw new NotFoundException('GRN detail not found');
    return updated;
  }

  async delete(id: string) {
    const res = await this.model.findByIdAndDelete(id);
    if (!res) throw new NotFoundException('GRN detail not found');
    return res;
  }
}
