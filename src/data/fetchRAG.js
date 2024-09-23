
import fs from "fs"
import path from "path";
import matter from "gray-matter";

const srcDir = path.join(process.cwd(), "src");
const ragDir = path.join(
    srcDir,
    "data",
    "rules-and-guidelines"
);

/*
  Returns an array of objects tht contain the data of .md file in rules-and-guidelines.
*/
// returns a list of object taht has {data, content, slug}
export default function getAllRulesAndGuidelines() {
    // Get the list of file names within rules and guidelines.
    // ex: ["cyberpunk_outfits.md", "file_name.md"]
    const fileNames = fs.readdirSync(ragDir);

    // Return an object that contains: {}
    return fileNames.map((fileName) => {
        // File names have ".md" so remove them to use as slugs for links
        const slug = fileName.replace(".md", "");

        // Read file with utf-8 to get content
        const fileContents = fs.readFileSync(
            path.join(ragDir, fileName),
            "utf-8"
        );

        // Pass through gray matter which converts the .md text to an object
        // {title: , numberOfParticipants: }
        // {content: }
        const { data, content } = matter(fileContents);


        // Return data, content, slug
        return {
            data: data, // keys
            content, // plain texts
            slug, // md file without the .md extension
        };
    });
}

