import { Controller, Get, Body, Post } from '@nestjs/common';
import { ItemService } from './item.service';
import { Item } from './item.entity';

@Controller('item')
export class ItemController {
  constructor(private serv: ItemService) { }

  @Get()
  public async getAll(): Promise<any> {
    return await this.serv.getAll();
  }

  @Post()
  public async post(@Body() item: Item): Promise<Item> {
    return this.serv.create(item);
  }
}