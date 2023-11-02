import { Injectable } from '@nestjs/common';

import { SwapiRepository } from '@swapi/swapi.repository';
import { SwapiService } from '@swapi/swapi.service';

@Injectable()
export class PlanetsService extends SwapiService {
	constructor(private readonly swapi: SwapiRepository) {
		super('planets');
	}

	getRepository() {
		return this.swapi;
	}
}
