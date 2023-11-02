import { HealthCheckService, HttpHealthIndicator } from '@nestjs/terminus';
import { MemoryHealthIndicator } from '@nestjs/terminus';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	constructor(
		private config: ConfigService,
		private health: HealthCheckService,
		private http: HttpHealthIndicator,
		private memory: MemoryHealthIndicator,
	) {}

	getRoot(): string {
		return 'Conexa - Backend Challenge';
	}

	async getCheck(): Promise<any> {
		const mem_alert = this.config.get('app.mem_alert') * 1024 * 1024;

		return await this.health.check([
			() => this.http.pingCheck('swapi', this.config.get('app.swapi')),
			() => this.memory.checkHeap('memory_heap', mem_alert),
			() => this.memory.checkRSS('memory_rss', mem_alert),
		]);
	}
}
