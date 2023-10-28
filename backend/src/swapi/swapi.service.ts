import { SwapiRepository } from './swapi.repository';

export abstract class SwapiService {
	abstract getRepository(): SwapiRepository;

	constructor(private readonly path: string) {}

	async findAll(): Promise<any> {
		return await this.getRepository().http(this.path);
	}

	async findOne(id: any): Promise<any> {
		return await this.getRepository().http(this.path + '/' + id);
	}
}
