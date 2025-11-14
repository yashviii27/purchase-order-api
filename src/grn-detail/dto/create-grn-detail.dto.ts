import { IsMongoId, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateGrnDetailDto {
  @IsNotEmpty() @IsMongoId() grnId: string;
  @IsOptional() @IsMongoId() poId?: string;
  @IsNotEmpty() @IsNumber() sr_no: number;
  @IsNotEmpty() @IsNumber() pro_id: number;
  @IsNotEmpty() @IsNumber() qty: number;
  @IsOptional() @IsNumber() rate?: number;
  @IsOptional() @IsNumber() amt?: number;
}
