import { Controller, Get, Post, Body } from '@nestjs/common';
import { PointService } from './point.service';
import { Point } from './point.entity';

@Controller('point')
export class PointController {
  constructor(private serv: PointService) {}

  @Get()
  public async getAll(): Promise<any> {
    return await this.serv.getAll();
  }

  @Post()
  public async post(@Body() point: Point): Promise<Point> {
    return this.serv.create(point);
  }
}
