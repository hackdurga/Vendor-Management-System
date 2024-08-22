import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PurchaseOrdersService } from './purchase-orders.service';
import { CreatePurchaseOrderDto } from './dto/create-po.dto';
import { UpdatePurchaseOrderDto } from './dto/update-po.dto';

@Controller('purchase-orders')
export class PurchaseOrdersController {
  constructor(private readonly poService: PurchaseOrdersService) {}

  @Post()
  create(@Body() createPoDto: CreatePurchaseOrderDto) {
    return this.poService.create(createPoDto);
  }

  @Get()
  findAll() {
    return this.poService.findAll();
  }

  @Get(':poId')
  findOne(@Param('poId') id: string) {
    return this.poService.findOne(id);
  }

  @Put(':poId')
  update(@Param('poId') id: string, @Body() updatePoDto: UpdatePurchaseOrderDto) {
    return this.poService.update(id, updatePoDto);
  }

  @Delete(':poId')
  remove(@Param('poId') id: string) {
    return this.poService.remove(id);
  }
}