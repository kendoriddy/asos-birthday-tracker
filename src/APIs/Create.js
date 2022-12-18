import { baseurl } from "../utils/fx";

function createStudent() {
  const endpoint = `students`;
  return baseurl.post(endpoint);
}

export { createStudent };
