const parseBool = (value: string): boolean => /true/i.test(value);
const parseArray = (value: string): string[] => (value ? value.split(',') : []);
const ttlActivo = (value: string): number =>
	parseBool(process.env.THROTTLE_ACTIVE) ? parseInt(value, 10) ?? 60000 : 0;

export default () => ({
	app: {
		port: parseInt(process.env.APP_PORT, 10) || 8080,
		host: process.env.APP_HOST || '0.0.0.0',
		root_path: process.env.ROOT_PATH || 'api',
		trust_proxy: process.env.TRUST_PROXY ?? 0,
		mem_alert: process.env.MEMORY_ALERT ?? 300,
		swapi: process.env.SWAPI_URL || '',
		cors: {
			origin: parseArray(process.env.APP_CORS) || '*',
			methods: 'GET,OPTIONS',
		},
	},
	cache: {
		store: 'memory',
		isGlobal: true,
		ttl: parseInt(process.env.CACHE_TTL, 10) ?? 5000,
		max: parseInt(process.env.CACHE_MAX, 10) ?? 50,
	},
	throttle: {
		active: parseBool(process.env.THROTTLE_ACTIVE) || false,
		list: [
			{
				ttl: ttlActivo(process.env.THROTTLE_TTL),
				limit: parseInt(process.env.THROTTLE_LIMIT, 10) ?? 100,
			},
		],
	},
});
