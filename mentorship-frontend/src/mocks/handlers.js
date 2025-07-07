import { rest } from 'msw';

export const handlers = [
  rest.post('/api/auth/login', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        token: 'mock-token',
        user: { name: 'John Doe', email: 'john@example.com', role: 'mentor' }
      })
    );
  })
];
