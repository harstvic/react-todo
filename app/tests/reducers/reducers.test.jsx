var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        text: 'dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Walk the dog'
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });
    
    it('should toggle uncompleted todo to completed', () => {
      var todos = [
        {
          id: 12,
          text: 'sleep',
          completed: false,
          createdAt: 1234,
          completedAt: undefined
        }
      ];
      var action = {
        type: 'TOGGLE_TODO',
        id: 12
      };
      var res = reducers.todosReducer(df(todos), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].completed).toEqual(true);
      expect(res[0].completedAt).toBeA('number');
    });

    it('should toggle completed todo to uncompleted', () => {
      var todos = [
        {
          id: 12,
          text: 'sleep',
          completed: true,
          createdAt: 1234,
          completedAt: 12345
        }
      ];
      var action = {
        type: 'TOGGLE_TODO',
        id: 12
      };
      var res = reducers.todosReducer(df(todos), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toNotExist();
    });
  });
});
