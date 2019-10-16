const conversion = (state = 4.29, action) => {
  switch (action.type) {
    case 'SET_CONVERSION':
      return action.value;
    default:
      return state;
  }
}

export default conversion;
