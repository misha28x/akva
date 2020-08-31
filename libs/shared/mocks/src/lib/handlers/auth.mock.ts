import { rest } from 'msw';
import { Credentials } from '@akva/shared/auth-models';

export const handlers = (api) => [
  rest.post(`${api}/login`, (req, res, ctx) => {
    const { login } = req.body as Credentials;
    console.log(req.body);
    if (login === 'admin') {
      return res(
        ctx.delay(1000),
        ctx.json({
          data: {
            id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
            login,
            firstName: 'John',
            lastName: 'Maverick',
            token: '1111',
            permission: 1,
          },
        })
      );
    } else {
      return res(
        ctx.delay(1000),
        ctx.status(400),
        ctx.json({
          errorMsg: 'Невірна комбінація логіна і пароля',
        })
      );
    }
  }),
];
