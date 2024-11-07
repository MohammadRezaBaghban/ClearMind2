import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'data/blogs.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const blogs = JSON.parse(jsonData);

  res.status(200).json(blogs);
}
