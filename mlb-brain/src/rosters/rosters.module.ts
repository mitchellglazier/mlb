import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { RostersController } from './rosters.controller';
import { RostersService } from './rosters.service';

@Module({
  controllers: [RostersController],
  imports: [HttpModule],
  providers: [RostersService]
})
export class RostersModule {}
