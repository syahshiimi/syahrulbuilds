import { getPosts } from "../../lib/utils";

export default function handler(req, res) {
  const posts = getPosts(2); // argument will change

  res.status(200).json(posts);
}
