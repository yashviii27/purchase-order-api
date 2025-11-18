import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePoStatusDto {
  @IsOptional()
  sup_id?: number;

  @IsNotEmpty()
  @IsString()
  po_no!: string;

  @IsOptional()
  @IsNumber()
  rev?: number;

  @IsNotEmpty()
  @IsNumber()
  pro_id!: number;

  @IsNotEmpty()
  @IsNumber()
  order_qty!: number;

  @IsNotEmpty()
  @IsNumber()
  rec_qty!: number;

  @IsNotEmpty()
  @IsNumber()
  pending_qty!: number;
}
// import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

// export class CreatePoStatusDto {
//   @IsOptional() sup_id?: number;
//   @IsNotEmpty() @IsString() po_no!: string;
//   @IsOptional() @IsNumber() rev?: number;
//   @IsNotEmpty() @IsNumber() pro_id: number;
//   @IsNotEmpty() @IsNumber() order_qty: number;
//   @IsNotEmpty() @IsNumber() rec_qty: number;
//   @IsNotEmpty() @IsNumber() pending_qty: number;
// }
