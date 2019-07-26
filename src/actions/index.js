export const selectedTerm = termId => {
  return {
    type: "select_term",
    payload: termId
  };
};
