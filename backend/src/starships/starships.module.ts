import { Module } from '@nestjs/common';
import { StarshipsService } from './starships.service';
import { StarshipsController } from './starships.controller';
import { SwapiRepository } from '@swapi/swapi.repository';
import { HttpModule } from '@nestjs/axios';

@Module({
	controllers: [StarshipsController],
	providers: [StarshipsService, SwapiRepository],
	imports: [HttpModule],
})
export class StarshipsModule {}
