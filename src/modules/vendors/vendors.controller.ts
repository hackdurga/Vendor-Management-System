import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { VendorsService } from './vendors.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';

@Controller('vendors')
export class VendorsController {
  constructor(private readonly vendorsService: VendorsService) {}

  @Post()
  create(@Body() createVendorDto: CreateVendorDto) {
    return this.vendorsService.create(createVendorDto);
  }

  @Get()
  findAll() {
    return this.vendorsService.findAll();
  }

  @Get(':vendorId')
  findOne(@Param('vendorId') id: string) {
    return this.vendorsService.findOne(id);
  }

  @Put(':vendorId')
  update(@Param('vendorId') id: string, @Body() updateVendorDto: UpdateVendorDto) {
    return this.vendorsService.update(id, updateVendorDto);
  }

  @Delete(':vendorId')
  remove(@Param('vendorId') id: string) {
    return this.vendorsService.remove(id);
  }
}
