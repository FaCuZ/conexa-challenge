import { SwapiRepository } from './swapi.repository';

export abstract class SwapiService {
	abstract getRepository(): SwapiRepository;

	constructor(private readonly path: string) {}

	async findAll(): Promise<any> {
		return {
			clase: 'SwapiService',
			function: 'findAll',
			path: this.path,
			data: await this.getRepository().http(this.path),
		};
	}

	async findOne(id: any): Promise<any> {
		return {
			clase: 'SwapiService',
			function: 'findOne',
			path: this.path,
			id,
			data: await this.getRepository().http(this.path + '/' + id),
		};
	}
}
