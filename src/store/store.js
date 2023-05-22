import { create } from 'zustand';

import { UserSlice } from './UserSlice';
import { AppSlice } from './AppSlice';

const store = (set) => ({
  ...UserSlice(set),
  ...AppSlice(set),
});

const useStore = create(store);

export default useStore;
