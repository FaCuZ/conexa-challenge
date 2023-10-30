import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/axios';

import { PlanetsController } from '@src/planets/planets.controller';
import { PlanetsService } from '@src/planets/planets.service';

import { SwapiRepository } from '@swapi/swapi.repository';

import { AppModule } from '@app/app.module';

describe('PlanetsController', () => {
	let controller: PlanetsController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [PlanetsController],
			providers: [PlanetsService, SwapiRepository],
			imports: [HttpModule, AppModule],
		}).compile();

		controller = module.get<PlanetsController>(PlanetsController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});

	it('GET /planets should return a list of planets', async () => {
		jest.setTimeout(50000);
		const planets = await controller.findAll();
		expect(Array.isArray(planets.results)).toBeTruthy();
	}, 50000);

	it('GET /planets/:id should return a specific planets', async () => {
		const planetsId = 1;
		const planets = await controller.findOne(planetsId);
		expect(planets).toBeDefined();
	});

	it('GET /planets/:id should return a 404 error for an invalid ID', async () => {
		const invalidId = 9999;
		try {
			await controller.findOne(invalidId);
		} catch (error) {
			expect(error.status).toBe(404);
			expect(error.message).toBe('Planets not found');
		}
	});
});
