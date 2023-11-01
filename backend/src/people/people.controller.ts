import { Controller } from '@nestjs/common';

import { PeopleService } from './people.service';

import { SwapiController } from '@swapi/swapi.controller';
import { SwapiService } from '@swapi/swapi.service';

@Controller('personajes')
export class PeopleController extends SwapiController {
	constructor(private readonly peopleService: PeopleService) {
		super();
	}

	getService(): SwapiService {
		return this.peopleService;
	}
}
