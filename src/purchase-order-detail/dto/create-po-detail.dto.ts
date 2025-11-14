import { IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePoDetailDto {
  @IsNotEmpty() @IsMongoId() poId: string;
  @IsNotEmpty() @IsNumber() sr_no: number;
  @IsNotEmpty() @IsNumber() pro_id: number;
  @IsOptional() @IsString() make?: string;
  @IsNotEmpty() @IsNumber() qty: number;
  @IsOptional() @IsNumber() a_qty?: number;
  @IsOptional() @IsNumber() rate?: number;
  @IsOptional() @IsNumber() tax?: number;
  @IsOptional() @IsNumber() amt?: number;
}
