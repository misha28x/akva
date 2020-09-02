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
            user: {
              district: 'Луцький',
              permission: 1,
              serviceProvider: 80334,
              serviceType: 3,
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
