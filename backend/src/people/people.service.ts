import { Injectable } from '@nestjs/common';

import { SwapiRepository } from '@swapi/swapi.repository';
import { SwapiService } from '@swapi/swapi.service';

@Injectable()
export class PeopleService extends SwapiService {
	constructor(private readonly swapi: SwapiRepository) {
		super('people');
	}

	getRepository() {
		return this.swapi;
	}

	findOne(id: any): any {
		return super.findOne(id);
	}
}
