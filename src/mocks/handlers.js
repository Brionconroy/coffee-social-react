import { rest } from "msw";

const baseURL = 'https://coffee-social-4aee33ad3a6e.herokuapp.com/';

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        "pk": 6,
        "username": "katie2",
        "email": "",
        "first_name": "",
        "last_name": "",
        "profile_id": 6,
        "profile_image": "https://res.cloudinary.com/du4zinzmk/image/upload/v1/media/images/poeny-bunch_xp3rps"
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];