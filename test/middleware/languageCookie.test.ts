import request from 'supertest';
import { Model } from 'objection';
import app from './../../src/app';

afterAll(async () => {
  await Model.knex().destroy();
});

it('stores lang query parameter into a cookie', async () => {
  const response = await request(app).get('/?lang=somelang');
  expect(response.header['set-cookie']).toContain('lang=somelang; Path=/');
});
