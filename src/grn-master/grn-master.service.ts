import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { GrnMaster, GrnMasterDocument } from './grn-master.schema';
import { CreateGrnMasterDto } from './dto/create-grn-master.dto';

@Injectable()
export class GrnMasterService {
  constructor(@InjectModel(GrnMaster.name) private grnModel: Model<GrnMasterDocument>) {}

  create(dto: CreateGrnMasterDto) {
    const data: any = { ...dto };
    if (dto.date) data.date = new Date(dto.date);
    if (dto.pur_inv_date) data.pur_inv_date = new Date(dto.pur_inv_date);
    if (dto.poId) data.poId = new Types.ObjectId(dto.poId);
    return new this.grnModel(data).save();
  }

  findAll() {
    return this.grnModel.find().populate('poId').lean();
  }

  findOne(grn_no: string) {
    return this.grnModel.findOne({ grn_no }).populate('poId').lean();
  }
}
