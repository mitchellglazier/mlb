import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PlayersService {
    options = {
        headers: {
            'api-key': '0ca80ddc-63f6-476e-b548-e5fb0934fc4b'
        }
    }

    constructor(private httpService: HttpService) {}

    async getPlayer(playerId: number): Promise<any> {
        let resp = await firstValueFrom(this.httpService.get(`http://brew-roster-svc.us-e2.cloudhub.io/api/player/${playerId}`, this.options))
        return resp.data
    }
}
