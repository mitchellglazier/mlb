import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';

@Module({
  controllers: [TeamsController],
  imports: [HttpModule],
  providers: [TeamsService]
})
export class TeamsModule {}
