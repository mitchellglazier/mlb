import { Controller, Get, Param } from '@nestjs/common';
import { RostersService } from './rosters.service';

@Controller('rosters')
export class RostersController {

    constructor(private rostersService: RostersService) {}

    @Get(':teamId')
    async GetRoster(@Param('teamId') teamId) {
        const roster = await this.rostersService.getRoster(teamId);
        return roster
    }
}
