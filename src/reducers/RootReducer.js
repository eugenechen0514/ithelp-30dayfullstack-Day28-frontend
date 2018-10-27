import * as actions from '../actions/LoginBoxActions';

const initState = {
  message: 'init message',
};
const reducer = (state = initState, action) => {
  const {type, payload} = action;
  switch (type) {
      case actions.identityOnClickSubmit: {
        const {message} = payload;
        return Object.assign({}, {message});
      }
      default:
          return state;
  }
};

export default reducer;
