import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/axios';

import { StarshipsService } from '@src/starships/starships.service';
import { SwapiRepository } from '@swapi/swapi.repository';

import { AppModule } from '@app/app.module';

describe('StarshipsService', () => {
	let service: StarshipsService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [StarshipsService, SwapiRepository],
			imports: [HttpModule, AppModule],
		}).compile();

		service = module.get<StarshipsService>(StarshipsService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	it('findAll should return an array of starships', async () => {
		jest.setTimeout(20000);
		const starships = await service.findAll();

		expect(Array.isArray(starships.results)).toBeTruthy();
		expect(starships.results.length).toBeGreaterThan(0);

		for (const starship of starships.results) {
			expect(typeof starship.name).toBe('string');
		}

		expect(
			starships.results.every((starship: any) => starship.name.length > 0),
		).toBe(true);
	}, 20000);

	it('findOne should return a starships by ID', async () => {
		const starshipId = 9;

		const starship = await service.findOne(starshipId);

		expect(starship).toBeDefined();
		expect(starship.name).toBe('Death Star');
		expect(typeof starship.manufacturer).toBe('string');
		expect(starship.created).toMatch(/\d{4}-\d{2}-\d{2}/);
	});
});
