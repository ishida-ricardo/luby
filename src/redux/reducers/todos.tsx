import { setItem, getItem } from '../repositories/localStorageRepository';

const todos = (state = [], action: { type: any; id: any; text: any; }) => {
    let list;
    switch (action.type) {
      case 'ADD_TODO':
        list = [
          ...state,
          {
            id: action.id,
            text: action.text
          }
        ]
        setItem('@luby::todos', list);
        return list;
      case 'ORDER_TODOS':
        list = getItem('@luby::todos');
        list.sort(function(a: any, b: any){
          return a.text.localeCompare(b.text);
        })
        setItem('@luby::todos', list);
        return list;
      default:
        return getItem('@luby::todos');
    }
}

export default todos;