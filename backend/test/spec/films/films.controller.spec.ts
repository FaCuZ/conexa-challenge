import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/axios';

import { FilmsController } from '@src/films/films.controller';
import { FilmsService } from '@src/films/films.service';

import { SwapiRepository } from '@swapi/swapi.repository';

import { AppModule } from '@app/app.module';

describe('FilmsController', () => {
	let controller: FilmsController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [FilmsController],
			providers: [FilmsService, SwapiRepository],
			imports: [HttpModule, AppModule],
		}).compile();

		controller = module.get<FilmsController>(FilmsController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});

	it('GET /films should return a list of films', async () => {
		jest.setTimeout(20000);
		const films = await controller.findAll();
		expect(Array.isArray(films.results)).toBeTruthy();
	}, 20000);

	it('GET /films/:id should return a specific film', async () => {
		const filmId = 1;
		const film = await controller.findOne(filmId);
		expect(film).toBeDefined();
	});

	it('GET /films/:id should return a 404 error for an invalid ID', async () => {
		const invalidId = 9999;
		try {
			await controller.findOne(invalidId);
		} catch (error) {
			expect(error.status).toBe(404);
			expect(error.message).toBe('Film not found');
		}
	});
});
