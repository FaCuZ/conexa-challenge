import { Injectable } from '@nestjs/common';

import { SwapiRepository } from '@swapi/swapi.repository';
import { SwapiService } from '@swapi/swapi.service';

@Injectable()
export class FilmsService extends SwapiService {
	constructor(private readonly swapi: SwapiRepository) {
		super('films');
	}

	getRepository() {
		return this.swapi;
	}
}
