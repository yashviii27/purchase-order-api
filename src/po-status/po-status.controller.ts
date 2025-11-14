import { Controller, Get, Param } from '@nestjs/common';
import { PoStatusService } from './po-status.service';

@Controller('po-status')
export class PoStatusController {
  constructor(private readonly svc: PoStatusService) {}

  // Fetch All PO Status
  @Get()
  getAllStatus() {
    return this.svc.generateReport();
  }

  // Fetch by PO ID
  @Get('by-po-id/:poId')
  getStatusByPoId(@Param('poId') poId: string) {
    return this.svc.getReportByPoId(poId);
  }

  // Fetch by PO Number
  @Get('by-po-no/:poNo')
  getStatusByPoNo(@Param('poNo') poNo: string) {
    return this.svc.getReportByPoNo(poNo);
  }
}
