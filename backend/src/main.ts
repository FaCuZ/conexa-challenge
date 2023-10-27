import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';

import { AppModule } from './app/app.module';
import helmet from 'helmet';

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);
	const config = app.get(ConfigService);
	const logger = new Logger('Main');

	app.enableCors(config.get('app.cors'));

	app.use(helmet());

	app.setGlobalPrefix(config.get('app.root_path'));

	app.set('trust proxy', 2);

	await app.listen(config.get('app.port'), config.get('app.host'));

	logger.log('App started on ' + (await app.getUrl()));
}
bootstrap();
