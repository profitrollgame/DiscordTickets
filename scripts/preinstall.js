const { randomBytes } = require('crypto');
const fs = require('fs');

const env = {
	API_BIND: 8080,
	API_EXTERNAL: 'http://localhost:8080',
	DB_CONNECTION_URL: '',
	DB_PROVIDER: '', // don't default to sqlite, postinstall checks if empty
	DISCORD_SECRET: '',
	DISCORD_TOKEN: '',
	ENCRYPTION_KEY: randomBytes(24).toString('hex'),
	PORTAL: '',
	PUBLIC_BOT: false,
	SETTINGS_BIND: 80,
	SUPER: '319467558166069248',
};

// check DISCORD_TOKEN because we don't want to force use of the .env file
if (!process.env.DISCORD_TOKEN && !fs.existsSync('./.env')) {
	console.log('[preinstall] Generating ENCRYPTION_KEY');
	fs.writeFileSync('./.env', Object.entries(env).map(([k, v]) => `${k}=${v}`).join('\n'));
	console.log('[preinstall] Created .env file');
} else {
	console.log('[preinstall] Nothing to do');
}