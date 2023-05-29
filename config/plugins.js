module.exports = ({ env }) => ({
	'users-permissions': {
	  enabled: true,
	  config: {
		jwt: {
		  expiresIn: '15m',
		},
	  },
	},
	'duplicate-button': true,
	'strapi-plugin-populate-deep': {
		config: {
			defaultDepth: 4
		}
	},
	// email: {
	// 	config: {
	// 	  provider: 'strapi-provider-email-resend',
	// 	  providerOptions: {
	// 		apiKey: env('RESEND_API_KEY'), // Required
	// 	  },
	// 	  settings: {
	// 		defaultFrom: 'noreply@nails.ru',
	// 		defaultReplyTo: 'noreply@nails.ru',
	// 	  },
	// 	}
	//   },
	email: {
	config: {
		provider: 'mailgun',
		providerOptions: {
		key: env('MAILGUN_API_KEY'), // Required
		domain: env('MAILGUN_DOMAIN'), // Required
		url: env('MAILGUN_URL', 'https://api.mailgun.net'), //Optional. If domain region is Europe use 'https://api.eu.mailgun.net'
		},
		settings: {
		defaultFrom: 'noreply-eshop-nails@eshop.nails.ru',
		defaultReplyTo: 'noreply-eshop-nails@eshop.nails.ru',
		},
	},
	},
  });