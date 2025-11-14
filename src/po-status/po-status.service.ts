import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { PurchaseOrderMaster } from '../purchase-order-master/purchase-order-master.schema';
import { PurchaseOrderDetail } from '../purchase-order-detail/purchase-order-detail.schema';
import { GrnDetail } from '../grn-detail/grn-detail.schema';

@Injectable()
export class PoStatusService {
  constructor(
    @InjectModel(PurchaseOrderMaster.name)
    private poMasterModel: Model<PurchaseOrderMaster>,

    @InjectModel(PurchaseOrderDetail.name)
    private poDetailModel: Model<PurchaseOrderDetail>,

    @InjectModel(GrnDetail.name)
    private grnDetailModel: Model<GrnDetail>,
  ) {}

  // -----------------------------
  // REUSABLE FILTERED REPORT LOGIC
  // -----------------------------
  async generateFilteredReport(filter: any) {
    const masters = await this.poMasterModel.find(filter).lean();

    const report = [];

    for (const master of masters) {
      const poId = master._id;
      const poNo = master.po_no;

      // Fetch PO detail items
      const details = await this.poDetailModel.find({ poId }).lean();

      // Fetch GRN detail entries for this PO
      const grn = await this.grnDetailModel.find({ poId }).lean();

      for (const item of details) {
        const productId = item.pro_id;

        const receivedQty = grn
          .filter(g => g.pro_id === productId)
          .reduce((sum, g) => sum + g.qty, 0);

        report.push({
          po_id: poId,
          po_no: poNo,
          sup_id: master.sup_id,
          pro_id: productId,
          ordered_qty: item.qty,
          received_qty: receivedQty,
          pending_qty: item.qty - receivedQty,
        });
      }
    }

    return report;
  }

  // -----------------------------
  // FILTER BY PO ID
  // -----------------------------
  async getReportByPoId(poId: string) {
    return this.generateFilteredReport({
      _id: new Types.ObjectId(poId),
    });
  }

  // -----------------------------
  // FILTER BY PO NUMBER
  // -----------------------------
  async getReportByPoNo(poNo: string) {
    return this.generateFilteredReport({ po_no: poNo });
  }

  // -----------------------------
  // FULL REPORT (ALL PURCHASE ORDERS)
  // -----------------------------
  async generateReport() {
    return this.generateFilteredReport({});
  }
}
