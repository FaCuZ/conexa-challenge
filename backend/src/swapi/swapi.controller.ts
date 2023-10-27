import { Get, Param } from '@nestjs/common';
import { SwapiService } from './swapi.service';

export abstract class SwapiController {
	abstract getService(): SwapiService;

	@Get('')
	async findAll() {
		return await this.getService().findAll();
	}

	@Get(':id')
	async findOne(@Param('id') id): Promise<any> {
		return await this.getService().findOne(id);
	}
}
