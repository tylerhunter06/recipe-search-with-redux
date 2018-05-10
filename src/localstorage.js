
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('savedRecipes');
    if (serializedState === null) {
      return undefined;

    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('savedRecipes', serializedState);
  } catch (err) {
    // Ignore write errors.
  }
};
