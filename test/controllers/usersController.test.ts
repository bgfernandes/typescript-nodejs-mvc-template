import request from 'supertest';
import { Model } from 'objection';
import * as factories from './../factories';
import app from './../../src/app';
import { authenticatedApp } from '../testHelpers';

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

describe('showCurrentUser', () => {
  it('renders error page if no authenticated user', async () => {
    const response = await request(app).get('/users/me');
    expect(response.status).toBe(401);
    expect(response.text).toMatchSnapshot();
  });

  it('renders user details page for authenticated user', async () => {
    const response = await request(authenticatedApp()).get('/users/me');
    expect(response.status).toBe(200);
    expect(response.text).toMatchSnapshot();
  });
});
