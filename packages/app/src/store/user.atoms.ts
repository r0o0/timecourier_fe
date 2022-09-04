import { atom } from 'recoil';

import persistStore from './persistStore';

const getInitialUser = async (): Promise<APISchema.User> => {
  try {
    const value = await persistStore.getItem<APISchema.User>('user');
    return value ?? ({} as APISchema.User);
  } catch (error) {
    throw Error(`[Persist State] user: ${error}`);
  }
};

export const userState = atom<APISchema.User>({
  key: 'user',
  default: getInitialUser(),
  effects: [
    ({ onSet }) => {
      onSet((newValue) => {
        persistStore.setItem<APISchema.User>('user', { ...newValue, token: '' });
      });
    },
  ],
});
