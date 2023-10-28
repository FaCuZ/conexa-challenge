import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/axios';

import { PeopleService } from '@src/people/people.service';

import { SwapiRepository } from '@swapi/swapi.repository';

import { AppModule } from '@app/app.module';

describe('PeopleService', () => {
	let service: PeopleService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [PeopleService, SwapiRepository],
			imports: [HttpModule, AppModule],
		}).compile();

		service = module.get<PeopleService>(PeopleService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	it('findAll should return an array of people', async () => {
		jest.setTimeout(20000);
		const people = await service.findAll();

		expect(Array.isArray(people.results)).toBeTruthy();
		expect(people.results.length).toBeGreaterThan(0);

		for (const person of people.results) {
			expect(typeof person.name).toBe('string');
		}

		expect(people.results.every((person: any) => person.name.length > 0)).toBe(
			true,
		);
	}, 20000);

	it('findOne should return a people by ID', async () => {
		const peopleId = 1;

		const people = await service.findOne(peopleId);

		expect(people).toBeDefined();
		expect(people.name).toBe('Luke Skywalker');
		expect(typeof people.gender).toBe('string');
		expect(people.created).toMatch(/\d{4}-\d{2}-\d{2}/);
	});
});
