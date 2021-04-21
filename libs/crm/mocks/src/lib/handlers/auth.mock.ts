import { rest } from 'msw';
import { Credentials } from '@akva/crm/auth/util';

export const handlers = (api: string) => [
  rest.post(`${api}/login`, (req, res, ctx) => {
    const { login } = req.body as Credentials;

    if (login === 'admin') {
      return res(
        ctx.delay(1000),
        ctx.json({
          data: {
            user: {
              district: 'Луцький',
              permission: 'Admin',
              serviceProvider: 80334,
              serviceType: ['Cold', 'Hot'],
              userId: 1,
              username: 'Адміністратор',
            },
            token: 1,
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
