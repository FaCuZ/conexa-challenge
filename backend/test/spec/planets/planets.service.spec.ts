import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/axios';

import { PlanetsService } from '@src/planets/planets.service';
import { AppModule } from '@app/app.module';

import { SwapiRepository } from '@swapi/swapi.repository';

describe('PlanetsService', () => {
	let service: PlanetsService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [PlanetsService, SwapiRepository],
			imports: [HttpModule, AppModule],
		}).compile();

		service = module.get<PlanetsService>(PlanetsService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	it('findAll should return an array of planets', async () => {
		jest.setTimeout(20000);
		const planets = await service.findAll();

		expect(Array.isArray(planets.results)).toBeTruthy();
		expect(planets.results.length).toBeGreaterThan(0);

		for (const planet of planets.results) {
			expect(typeof planet.name).toBe('string');
		}

		expect(planets.results.every((planet: any) => planet.name.length > 0)).toBe(
			true,
		);
	}, 20000);

	it('findOne should return a planets by ID', async () => {
		const planetId = 1;

		const planet = await service.findOne(planetId);

		expect(planet).toBeDefined();
		expect(planet.name).toBe('Tatooine');
		expect(typeof planet.climate).toBe('string');
		expect(planet.created).toMatch(/\d{4}-\d{2}-\d{2}/);
	});
});
