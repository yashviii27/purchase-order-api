import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateGrnDetailDto } from './dto/create-grn-detail.dto';
import { GrnDetailService } from './grn-detail.service';

@Controller('grn-detail')
export class GrnDetailController {
  constructor(private readonly svc: GrnDetailService) {}

  @Post() create(@Body() dto: CreateGrnDetailDto) { return this.svc.create(dto); }

  @Get() findAll() { return this.svc.findAll(); }

  @Get('by-grn/:grnId') findByGrn(@Param('grnId') grnId: string) { return this.svc.findByGrnId(grnId); }

  @Put(':id') update(@Param('id') id: string, @Body() payload: Partial<CreateGrnDetailDto>) {
    return this.svc.update(id, payload);
  }

  @Delete(':id') remove(@Param('id') id: string) { return this.svc.delete(id); }
}
