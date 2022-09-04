import instance from './instance';

export const authAPI = {
  authenticate: (token: string) =>
    instance.get<void, APISchema.User>(`/oauth/accessToken?token=${token}`),
};

export const letterAPI = {
  addLetter: (letterPostRequest: APISchema.Letter) =>
    instance.post('/v1/letter', letterPostRequest),
};
