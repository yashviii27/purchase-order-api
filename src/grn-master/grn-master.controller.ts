import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateGrnMasterDto } from './dto/create-grn-master.dto';
import { GrnMasterService } from './grn-master.service';

@Controller('grn-master')
export class GrnMasterController {
  constructor(private readonly svc: GrnMasterService) {}

  @Post() create(@Body() dto: CreateGrnMasterDto) { return this.svc.create(dto); }

  @Get() findAll() { return this.svc.findAll(); }

  @Get(':grn_no') findOne(@Param('grn_no') grn_no: string) { return this.svc.findOne(grn_no); }
}
