import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PoStatus, PoStatusSchema } from './po-status.schema';
import { PoStatusController } from './po-status.controller';
import { PoStatusService } from './po-status.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: PoStatus.name, schema: PoStatusSchema }])],
  controllers: [PoStatusController],
  providers: [PoStatusService],
})
export class PoStatusModule {}
