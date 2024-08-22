import { PartialType } from '@nestjs/mapped-types';
import { CreatePurchaseOrderDto } from './create-po.dto';

export class UpdatePurchaseOrderDto extends PartialType(CreatePurchaseOrderDto) {}
