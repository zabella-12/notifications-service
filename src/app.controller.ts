import { Controller, Get } from '@nestjs/common';
import { Post } from '@nestjs/common/decorators';
import { randomUUID } from 'crypto';
import { AppService } from './app.service';
import { PrismaService } from './prisma.services';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create() {
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content: 'Me faz um pix!',
        category: 'social',
        recipientId: randomUUID(),
               
      },
        
      
    });
  }

}
