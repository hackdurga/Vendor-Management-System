import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PurchaseOrder } from './schemas/po.schema';
import { CreatePurchaseOrderDto } from './dto/create-po.dto';
import { UpdatePurchaseOrderDto } from './dto/update-po.dto';
import { VendorsService } from '../vendors/vendors.service';

@Injectable()
export class PurchaseOrdersService {
  constructor(
    @InjectModel(PurchaseOrder.name) private poModel: Model<PurchaseOrder>,
    private vendorsService: VendorsService,
  ) {}

  async create(createPoDto: CreatePurchaseOrderDto): Promise<PurchaseOrder> {
    const newPO = new this.poModel(createPoDto);
    return newPO.save();
  }

  async findAll(): Promise<PurchaseOrder[]> {
    return this.poModel.find().populate('vendor').exec();
  }

  async findOne(id: string): Promise<PurchaseOrder> {
    const po = await this.poModel.findById(id).populate('vendor').exec();
    if (!po) {
      throw new NotFoundException(`Purchase Order with ID ${id} not found`);
    }
    return po;
  }

  async update(id: string, updatePoDto: UpdatePurchaseOrderDto): Promise<PurchaseOrder> {
    const updatedPO = await this.poModel.findByIdAndUpdate(id, updatePoDto, { new: true });
    if (!updatedPO) {
      throw new NotFoundException(`Purchase Order with ID ${id} not found`);
    }
    return updatedPO;
  }

  async remove(id: string): Promise<void> {
    const result = await this.poModel.findByIdAndDelete(id);
    if (result === null) {
      throw new NotFoundException(`Purchase Order with ID ${id} not found`);
    }
  }
}
