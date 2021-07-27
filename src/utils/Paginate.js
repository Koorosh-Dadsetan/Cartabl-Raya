import _ from "lodash";

export const paginate = (list, currentPage, perPage) => {
  const startIndex = (currentPage - 1) * perPage;
  return _(list).slice(startIndex).take(perPage).value();
};
