import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePoMasterDto } from './dto/create-po-master.dto';
import { PurchaseOrderMasterService } from './purchase-order-master.service';

@Controller('po-master')
export class PurchaseOrderMasterController {
  constructor(private readonly svc: PurchaseOrderMasterService) {}

  @Post() create(@Body() dto: CreatePoMasterDto) { return this.svc.create(dto); }

  @Get() findAll() { return this.svc.findAll(); }

  @Get(':po_no') findOne(@Param('po_no') po_no: string) { return this.svc.findOneByPoNo(po_no); }

  @Put(':po_no') update(@Param('po_no') po_no: string, @Body() payload: Partial<CreatePoMasterDto>) {
    return this.svc.update(po_no, payload);
  }

  @Delete(':po_no') remove(@Param('po_no') po_no: string) { return this.svc.delete(po_no); }
}
