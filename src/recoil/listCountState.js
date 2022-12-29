import { selector } from 'recoil';
import {
  newListState,

  completedListState,
} from './listState';

const listCountState = selector({
  key: 'listCount',
  get: ({ get }) => {
    const newList = get(newListState);
   
    const completedList = get(completedListState);
    const total = newList.length  + completedList.length;

    return {
      newList: {
        number: newList.length,
        percent: total !== 0 ? (newList.length / total) * 100 + '%' : '',
      },
     
      completedList: {
        number: completedList.length,
        percent: total !== 0 ? (completedList.length / total) * 100 + '%' : '',
      },
    };
  },
});

export default listCountState;
