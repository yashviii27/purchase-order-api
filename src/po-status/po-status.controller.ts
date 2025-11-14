import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePoStatusDto } from './dto/create-po-status.dto';
import { PoStatusService } from './po-status.service';

@Controller('po-status')
export class PoStatusController {
  constructor(private readonly svc: PoStatusService) {}

  @Post() create(@Body() dto: CreatePoStatusDto) { return this.svc.create(dto); }

  @Get() findAll() { return this.svc.findAll(); }

  @Get(':po_no') findByPo(@Param('po_no') po_no: string) { return this.svc.findByPoNo(po_no); }

  @Put(':id') update(@Param('id') id: string, @Body() payload: Partial<CreatePoStatusDto>) {
    return this.svc.update(id, payload);
  }

  @Delete(':id') remove(@Param('id') id: string) { return this.svc.delete(id); }
}
