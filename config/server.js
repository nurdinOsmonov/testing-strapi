module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', [
      'EQfkMeWlchW/Apq5JSqALg==',
      '//lbgT4uvNSRYzjbeCT8LQ==',
      'Tx5DeIfhWjbaTQrgjVU2VQ==',
      '89t2fcTVt7LyZJH0YcQQFw=='
    ]),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
