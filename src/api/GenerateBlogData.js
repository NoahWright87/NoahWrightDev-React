// Creates JSON file with data about blog posts.
// Run before committing new posts to GitHub!

const postDataPath = '../data/posts.json';
const postDir = '../../public/data/posts';

const frontMatterMarker = '---';
function retrieveFrontMatter(content) {
    let startPos = content.search(frontMatterMarker) + frontMatterMarker.length;
    let endPos = content.slice(startPos).search(frontMatterMarker) + startPos;

    let frontMatter = content.slice(startPos, endPos);

    const yaml = require('js-yaml');
    // Parse frontMatter YAML into object
    let results = yaml.load(frontMatter);



    return results;
}
  
function generatePostData() {
    console.log("Reading post files...");
    let fs = require('fs');
    let path = require('path');

    var posts = [];
    fs.readdirSync(postDir).forEach(file => {
        console.log(`- ${file}`);

        var contents = fs.readFileSync(path.join(postDir, file), 'utf8');
        var frontMatter = retrieveFrontMatter(contents);

        if (frontMatter.tags) {
            let splitTags = frontMatter.tags.split(',').map(tag => tag.trim());
            frontMatter.tags = splitTags;
        }
        let wordCount = contents.trim().split(/\s+/).length;
        frontMatter.wordCount = wordCount;

        posts.push({
            date: file.substring(0, 10),
            path: file,
            ...frontMatter
        });
    });

    console.log(`Processed ${posts.length} files.  Beginning export...`);

    // Save post data to data/posts/posts.json
    let postsJson = JSON.stringify(posts, null, 2);
    fs.writeFile(postDataPath, postsJson, (err) => {
        if (err) throw err;
        console.log("Post data generated.");
    });
}

generatePostData();
