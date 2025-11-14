import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GrnMaster, GrnMasterSchema } from './grn-master.schema';
import { GrnMasterController } from './grn-master.controller';
import { GrnMasterService } from './grn-master.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: GrnMaster.name, schema: GrnMasterSchema }])],
  controllers: [GrnMasterController],
  providers: [GrnMasterService],
  exports: [GrnMasterService],
})
export class GrnMasterModule {}
