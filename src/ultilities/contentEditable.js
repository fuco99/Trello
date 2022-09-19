export const saveContent = (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    e.target.blur();
  }
};
// select input when click
export const selectAllInlineText = (e) => {
  e.target.focus();
  e.target.select();
};
