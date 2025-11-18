import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePoMasterDto {
  @IsNotEmpty()
  @IsString()
  po_no!: string;

  @IsOptional()
  @IsString()
  rev_no?: string;

  @IsOptional()
  @IsDateString()
  po_date?: string;

  @IsOptional()
  @IsNumber()
  sup_id?: number;

  @IsOptional()
  @IsNumber()
  amount?: number;

  @IsOptional()
  @IsString()
  transportation?: string;

  @IsOptional()
  @IsString()
  notes?: string;
}

// import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

// export class CreatePoMasterDto {
//   @IsNotEmpty() @IsString() po_no: string;
//   @IsOptional() @IsString() rev_no?: string;
//   @IsOptional() @IsDateString() po_date?: string;
//   @IsOptional() @IsNumber() sup_id?: number;
//   @IsOptional() @IsNumber() amount?: number;
//   @IsOptional() @IsString() transportation?: string;
//   @IsOptional() @IsString() notes?: string;
// }
