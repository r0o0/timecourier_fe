import instance from './instance';

export const authAPI = {
  authenticate: (token: string) =>
    instance.get<void, APISchema.User>(`/oauth/accessToken?token=${token}`),
};

export const letterAPI = {
  addLetter: (letterPostReq: APISchema.Letter) =>
    instance.post<void, { data: APISchema.Letter[] }>('/v1/letter', letterPostReq),
  addImage: (letterPostReq: APISchema.LetterImagePostReq) =>
    instance.post<void, { data: APISchema.Letter[] }>(`/v1/letter/imageUpload`, letterPostReq, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  getImageByImageId: (imageId: string) =>
    instance.get<void, ArrayBuffer>(`/v1/letter/imageView/${imageId}`),
};
