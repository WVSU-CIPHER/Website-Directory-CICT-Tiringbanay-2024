import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';


const srcDir = path.join(process.cwd(), "src");
const markdownDirectory = path.join(process.cwd(), srcDir, "data", "rules-guidelines");

export async function getMarkdownData(name) {
    const fullPath = path.join(markdownDirectory, `${name}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents);

    // Use remark to convert markdown into HTML
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
        contentHtml,
        ...data,
    };
}

export function getAllMarkdownFiles() {
    const fileNames = fs.readdirSync(markdownDirectory);
    return fileNames.map(fileName => {
        const slug = fileName.replace('.md', '');
        const fileContents = fs.readFileSync(path.join(markdownDir, fileName), 'utf-8');
        const { data, content } = matter(fileContents);
        return {
            slug,
            data,
            content
        };
    });
}

export function getMarkDownBySlug(slug) {
    const files = getAllMarkdownFiles();
    return files.find(file => file.slug === slug);
}