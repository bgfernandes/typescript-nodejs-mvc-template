import request from 'supertest';
import app from './../../src/app';

describe('index', () => {
  it('renders the index page', async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toMatchSnapshot();
  });
});
