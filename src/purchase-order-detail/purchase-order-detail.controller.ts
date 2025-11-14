import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePoDetailDto } from './dto/create-po-detail.dto';
import { PurchaseOrderDetailService } from './purchase-order-detail.service';

@Controller('po-detail')
export class PurchaseOrderDetailController {
  constructor(private readonly svc: PurchaseOrderDetailService) {}

  @Post() create(@Body() dto: CreatePoDetailDto) { return this.svc.create(dto); }

  @Get() findAll() { return this.svc.findAll(); }

  @Get('by-po/:poId') findByPo(@Param('poId') poId: string) { return this.svc.findByPoId(poId); }

  @Put(':id') update(@Param('id') id: string, @Body() payload: Partial<CreatePoDetailDto>) {
    return this.svc.update(id, payload);
  }

  @Delete(':id') remove(@Param('id') id: string) { return this.svc.delete(id); }
}
