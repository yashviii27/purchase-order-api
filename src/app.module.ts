import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

import { PurchaseOrderMasterModule } from './purchase-order-master/purchase-order-master.module';
import { PurchaseOrderDetailModule } from './purchase-order-detail/purchase-order-detail.module';
import { GrnMasterModule } from './grn-master/grn-master.module';
import { GrnDetailModule } from './grn-detail/grn-detail.module';
import { PoStatusModule } from './po-status/po-status.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/purchase_db'),
    PurchaseOrderMasterModule,
    PurchaseOrderDetailModule,
    GrnMasterModule,
    GrnDetailModule,
    PoStatusModule,
  ],
})
export class AppModule {}
