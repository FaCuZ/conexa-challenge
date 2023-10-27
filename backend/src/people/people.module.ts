import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { Swapi } from '@src/swapi';
import { HttpModule } from '@nestjs/axios';

@Module({
	controllers: [PeopleController],
	providers: [PeopleService, Swapi],
	imports: [HttpModule],
})
export class PeopleModule {}
