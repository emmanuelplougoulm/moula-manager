import { Type } from 'class-transformer';
import { IsString, IsNumber, IsNotEmptyObject } from 'class-validator';

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IMetadata {
  callsFlow: string[];
  listenerPattern: string;
  [key: string]: any;
  author: string;
}

export interface IResult {
  [key: string]: any;
}

export interface ITransferPayload {
  input?: { [key: string]: any };
  result?: IResult;
  metadata?: Partial<IMetadata>;
}

export class CreateTransactionInput {
  @IsString()
  type: string;

  @IsString()
  portfolioName: string;

  @IsString()
  date: string;

  @IsString()
  currency: string;

  @IsString()
  symbol: string;

  @IsNumber()
  amount: number;

  @IsNumber()
  price: number;

  @IsNumber()
  fees: number;
}

export class CreateTransaction implements ITransferPayload {
  @IsNotEmptyObject()
  @Type(() => CreateTransactionInput)
  input: CreateTransactionInput;
}
