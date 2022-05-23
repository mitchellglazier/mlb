import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';

@Module({
  controllers: [PlayersController],
  imports: [HttpModule],
  providers: [PlayersService]
})
export class PlayersModule {}
