import request from 'supertest';
import app from './../../src/app';

describe('index', () => {
  it('renders the index page', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toMatchSnapshot();
  });

  it('renders the index page localized', async () => {
    const response = await request(app).get('/?lang=pt-br');
    expect(response.status).toBe(200);
    expect(response.text).toMatchSnapshot();
  });
});
