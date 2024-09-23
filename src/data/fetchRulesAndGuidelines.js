import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

const ragDir = path.join(process.cwd(), 'src', 'data', 'rules-guidelines');

export async function getAllRAG() {
    const fileNames = await fs.readdir(ragDir);
    return fileNames.map((fileName) => {
        const slug = fileName.replace('.md', '');
        return { slug };
    });
}

export async function getRAGBySlug(slug) {
    const fullPath = path.join(ragDir, `${slug}.md`);
    const fileContents = await fs.readFile(fullPath, 'utf-8');
    const { data, content } = matter(fileContents);
    return { data, content };
}
