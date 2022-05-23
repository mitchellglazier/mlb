import { Controller, Get, Param } from '@nestjs/common';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {

    constructor(private playersService: PlayersService) {}

    @Get(':playerId')
    async GetPlayer(@Param('playerId') playerId) {
        const player = await this.playersService.getPlayer(playerId);
        return player
    }
}
