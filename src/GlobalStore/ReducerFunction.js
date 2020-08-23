export const ReducerFunction = (state, action) => {
  switch (action.type) {
    case "CHANGE_TEST":
      return {
        test: !state.test,
      }
    default:
      return {
        ...state,
      }
  }
}
