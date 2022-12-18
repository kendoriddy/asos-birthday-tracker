import { baseurl } from "../utils/fx";

function getStudents() {
  const endpoint = `students`;
  return baseurl.get(endpoint);
}

export { getStudents };
