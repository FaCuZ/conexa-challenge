import { Injectable } from '@nestjs/common';

import { Swapi } from '@src/swapi';

@Injectable()
export class PeopleService {
	constructor(private readonly swapi: Swapi) {}

	async getPeople(): Promise<object> {
		return {
			service: 'people',
			res: await this.swapi.people(),
		};
	}
}
