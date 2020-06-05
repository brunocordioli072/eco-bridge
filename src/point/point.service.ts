import { Injectable } from '@nestjs/common';
import { Point } from './point.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PointService {
  constructor(
    @InjectRepository(Point) private readonly repo: Repository<Point>,
  ) {}

  public async getAll(): Promise<any> {
    return await this.repo.find();
  }

  public async create(point: Point): Promise<Point> {
    return this.repo.save(point);
  }
}
