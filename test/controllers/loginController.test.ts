import request from 'supertest';
import { Model } from 'objection';
import app from './../../src/app';

afterAll(async () => {
  await Model.knex().destroy();
});

describe('index', () => {
  it('renders the index page', async () => {
    const response = await request(app).get('/login');
    expect(response.status).toBe(200);
    expect(response.text).toMatchSnapshot();
  });
});
