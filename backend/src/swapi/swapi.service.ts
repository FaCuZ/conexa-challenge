import { SwapiRepository } from './swapi.repository';

export abstract class SwapiService {
	abstract getRepository(): SwapiRepository;

	constructor(private readonly path: string) {}

	async findAll(page: number): Promise<any> {
		const pathquery = this.path + '?page=' + (page || 1);
		return await this.getRepository().http(pathquery);
	}

	async findOne(id: number): Promise<any> {
		return await this.getRepository().http(this.path + '/' + id);
	}
}
