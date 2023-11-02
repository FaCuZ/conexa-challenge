import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/axios';

import { FilmsService } from '@src/films/films.service';

import { SwapiRepository } from '@swapi/swapi.repository';

import { AppModule } from '@app/app.module';

describe('FilmsService', () => {
	let service: FilmsService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [FilmsService, SwapiRepository],
			imports: [HttpModule, AppModule],
		}).compile();

		service = module.get<FilmsService>(FilmsService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	it('findAll should return an array of films', async () => {
		jest.setTimeout(20000);
		const films = await service.findAll();

		expect(Array.isArray(films.results)).toBeTruthy();
		expect(films.results.length).toBeGreaterThan(0);

		for (const film of films.results) {
			expect(typeof film.title).toBe('string');
			expect(typeof film.episode_id).toBe('number');
		}

		expect(films.results.every((film: any) => film.episode_id > 0)).toBe(true);
	}, 20000);

	it('findOne should return a film by ID', async () => {
		const filmId = 1;

		const film = await service.findOne(filmId);

		expect(film).toBeDefined();
		expect(film.title).toBe('A New Hope');
		expect(film.episode_id).toBe(4);
		expect(typeof film.opening_crawl).toBe('string');
		expect(film.release_date).toMatch(/\d{4}-\d{2}-\d{2}/);
	});
});
