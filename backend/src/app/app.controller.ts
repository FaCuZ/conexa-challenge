import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { HealthCheck } from '@nestjs/terminus';
import { CacheTTL } from '@nestjs/cache-manager';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	getRoot(): string {
		return this.appService.getRoot();
	}

	@Get('health')
	@HealthCheck()
	@CacheTTL(20)
	getCheck() {
		return this.appService.getCheck();
	}
}
