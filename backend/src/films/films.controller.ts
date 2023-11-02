import { Controller } from '@nestjs/common';
import { FilmsService } from './films.service';

import { SwapiController } from '@swapi/swapi.controller';
import { SwapiService } from '@swapi/swapi.service';

@Controller('peliculas')
export class FilmsController extends SwapiController {
	constructor(private readonly filmsService: FilmsService) {
		super();
	}

	getService(): SwapiService {
		return this.filmsService;
	}
}
