import request from 'supertest';
import app from './../../src/app';

it('stores lang query parameter into a cookie', async () => {
  const response = await request(app).get('/?lang=somelang');
  expect(response.header['set-cookie']).toContain('lang=somelang; Path=/');
});
