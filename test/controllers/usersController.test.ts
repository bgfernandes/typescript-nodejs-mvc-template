import request from 'supertest';
import { Model } from 'objection';
import * as factories from './../factories';
import app from './../../src/app';

afterAll(async () => {
  await Model.knex().destroy();
});

describe('index', () => {
  it('renders the index page with no users', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    expect(response.text).toMatchSnapshot();
  });

  it('renders the index page with some users', async () => {
    await factories.user.create();
    await factories.user.create();

    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    expect(response.text).toMatchSnapshot();
  });
});
