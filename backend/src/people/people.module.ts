import { Module } from '@nestjs/common';

import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';

import { SwapiRepository } from '@swapi/swapi.repository';
import { HttpModule } from '@nestjs/axios';

@Module({
	controllers: [PeopleController],
	providers: [PeopleService, SwapiRepository],
	imports: [HttpModule],
})
export class PeopleModule {}
