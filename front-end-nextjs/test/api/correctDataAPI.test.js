import request from 'supertest';
import app from '../api/page';

test('GET /api/data returns expected data', async () => {
  const response = await request(app).get('http://localhost:8000/');
  expect(response.status).toBe(200);
  expect(response.body).toEqual({ message: 'Hello, world!' });
});