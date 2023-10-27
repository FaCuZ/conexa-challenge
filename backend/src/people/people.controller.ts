import { Controller, Get } from '@nestjs/common';
import { PeopleService } from './people.service';

@Controller('people')
export class PeopleController {
	constructor(private readonly peopleService: PeopleService) {}

	@Get()
	getPeople(): object {
		return this.peopleService.getPeople();
	}
}
