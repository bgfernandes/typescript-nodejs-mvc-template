import request from 'supertest';
import app from './../../src/app';
import User from './../../src/models/User';

describe('index', () => {
  it('renders the index page with no users', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    expect(response.text).toMatchSnapshot();
  });

  it('renders the index page with some users', async () => {
    await User.query().insert({
      created_at: new Date('1995-12-17T03:24:00').toISOString(),
      updated_at: new Date('1995-12-17T03:24:00').toISOString(),
    });

    await User.query().insert({
      created_at: new Date('1997-12-17T03:24:00').toISOString(),
      updated_at: new Date('1997-12-17T03:24:00').toISOString(),
    });

    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    expect(response.text).toMatchSnapshot();
  });
});
