import { Type } from 'class-transformer';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';
import { ITransferPayload } from 'src/types';


export class CreateTransactionInput {
  @IsString() @IsNotEmpty()
  type: string;

  @IsString()
  portfolioId: string;

  @IsString()
  date: string;

  @IsString()
  currency: string;

  @IsString()
  asset: string;

  @IsNumber()
  amount: number;

  @IsNumber()
  price: number;

  @IsNumber()
  fees: number;
}

export class createTransaction implements ITransferPayload {
  @IsNotEmpty()
  @Type(() => CreateTransactionInput)
  input: CreateTransactionInput;
}