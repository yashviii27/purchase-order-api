import { IsDateString, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateGrnMasterDto {
  @IsNotEmpty() @IsString() grn_no: string;
  @IsOptional() @IsDateString() date?: string;
  @IsOptional() sup_id?: number;
  @IsOptional() @IsString() pur_inv_no?: string;
  @IsOptional() @IsDateString() pur_inv_date?: string;
  @IsOptional() @IsString() poId?: string; // objectId of PO master
  @IsOptional() @IsString() remarks?: string;
}
