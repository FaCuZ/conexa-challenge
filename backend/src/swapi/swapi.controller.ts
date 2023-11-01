import { Get, Param, Query } from '@nestjs/common';
import { SwapiService } from './swapi.service';

export abstract class SwapiController {
	abstract getService(): SwapiService;

	@Get('')
	async findAll(@Query('page') page: number) {
		return await this.getService().findAll(page);
	}

	@Get(':id')
	async findOne(@Param('id') id): Promise<any> {
		return await this.getService().findOne(id);
	}
}
