import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GrnDetail, GrnDetailSchema } from './grn-detail.schema';
import { GrnDetailController } from './grn-detail.controller';
import { GrnDetailService } from './grn-detail.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: GrnDetail.name, schema: GrnDetailSchema }])],
  controllers: [GrnDetailController],
  providers: [GrnDetailService],
})
export class GrnDetailModule {}
