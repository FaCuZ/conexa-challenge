import { Injectable } from '@nestjs/common';
import { SwapiRepository } from '@swapi/swapi.repository';
import { SwapiService } from '@swapi/swapi.service';

@Injectable()
export class StarshipsService extends SwapiService {
	constructor(private readonly swapi: SwapiRepository) {
		super('starships');
	}

	getRepository() {
		return this.swapi;
	}
}
