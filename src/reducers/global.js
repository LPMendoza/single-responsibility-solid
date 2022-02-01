// COMPLEX STATE MANAGEMENT
export default function globalState (state, action) {
  switch (action.type) {
    case "LOADING":
      return { isLoading: true };
    case "FINISHED":
      return { isLoading: false };
    default:
      return state;
  }
}