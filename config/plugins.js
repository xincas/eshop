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
	'protected-populate': {
		enabled: true,
	},
  });