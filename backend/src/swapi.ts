import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';

import { firstValueFrom } from 'rxjs';

@Injectable()
export class Swapi {
	constructor(
		private readonly httpService: HttpService,
		private readonly configService: ConfigService,
	) {}

	async http(path: string): Promise<any> {
		const config = this.configService.get('app');

		const url = config.swapi + path;
		const logger = new Logger('SWAPI');
		logger.debug(url);

		try {
			const { data } = await firstValueFrom(this.httpService.get(url));
			//console.log(data);

			//if (!data.encontrado) return { error: true }; // NOTE

			return data;
		} catch (error) {
			const logger = new Logger('SWAPI');
			logger.warn('No se pudo acceder a ' + url);
		}
		return { error: true }; // NOTE
	}

	async people(): Promise<any> {
		return this.http('people/');
	}
}
