import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/axios';

import { PeopleController } from '@src/people/people.controller';
import { PeopleService } from '@src/people/people.service';

import { SwapiRepository } from '@swapi/swapi.repository';

import { AppModule } from '@app/app.module';

describe('PeopleController', () => {
	let controller: PeopleController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [PeopleController],
			providers: [PeopleService, SwapiRepository],
			imports: [HttpModule, AppModule],
		}).compile();

		controller = module.get<PeopleController>(PeopleController);
	});

	it('should be defined', () => {
		expect(controller).toBeDefined();
	});

	it('GET /people should return a list of people', async () => {
		jest.setTimeout(20000);
		const people = await controller.findAll();
		expect(Array.isArray(people.results)).toBeTruthy();
	}, 20000);

	it('GET /people/:id should return a specific people', async () => {
		const peopleId = 1;
		const people = await controller.findOne(peopleId);
		expect(people).toBeDefined();
	});

	it('GET /people/:id should return a 404 error for an invalid ID', async () => {
		const invalidId = 9999;
		try {
			await controller.findOne(invalidId);
		} catch (error) {
			expect(error.status).toBe(404);
			expect(error.message).toBe('People not found');
		}
	});
});
