import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/axios';

import { StarshipsController } from '@src/starships/starships.controller';
import { StarshipsService } from '@src/starships/starships.service';

import { AppModule } from '@app/app.module';

import { SwapiRepository } from '@swapi/swapi.repository';

describe('StarshipsController', () => {
	let controller: StarshipsController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [StarshipsController],
			providers: [StarshipsService, SwapiRepository],
			imports: [HttpModule, AppModule],
		}).compile();

		controller = module.get<StarshipsController>(StarshipsController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});

	it('GET /starships should return a list of starships', async () => {
		jest.setTimeout(20000);
		const starships = await controller.findAll();
		expect(Array.isArray(starships.results)).toBeTruthy();
	}, 20000);

	it('GET /starships/:id should return a specific starships', async () => {
		const starshipsId = 1;
		const starships = await controller.findOne(starshipsId);
		expect(starships).toBeDefined();
	});

	it('GET /starships/:id should return a 404 error for an invalid ID', async () => {
		const invalidId = 9999;
		try {
			await controller.findOne(invalidId);
		} catch (error) {
			expect(error.status).toBe(404);
			expect(error.message).toBe('Starships not found');
		}
	});
});
