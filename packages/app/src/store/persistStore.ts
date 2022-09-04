import localforage from 'localforage';

const persistStore = localforage.createInstance({ name: 'persistState' });

export default persistStore;
