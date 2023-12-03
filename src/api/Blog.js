
import allPosts from '../data/posts.json';

const postDir = '../data/posts';

export class PostData {
    constructor({title, subtitle, snippet, date, tags, image, path, hasAffiliate}) {
        this.title = title;
        this.subtitle = subtitle;
        this.snippet = snippet;
        this.date = date;
        this.tags = tags;
        this.image = image;
        this.path = path;
        this.hasAffiliate = hasAffiliate;
    }
}

export function getPosts(input, tags) {
    return allPosts.filter(post => {
        let matches = true;

        if (input) {
            input = input.trim().toLowerCase();
            matches = (post.title && post.title.toLowerCase().includes(input))
                || (post.subtitle && post.subtitle.toLowerCase().includes(input))
                || (post.subtitle && post.snippet.toLowerCase().includes(input));
        }

        if (tags && tags.length > 0) {
            matches = matches && tags.every(tag => post.tags && post.tags.includes(tag));
        }

        return matches;
    }).sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });
}
export function getAllPosts() {
    return allPosts;
}

export function getAllTags() {
    let allTags = [];

    allPosts.forEach(post => {
        if (post.tags) {
            allTags = allTags.concat(post.tags);
        }
    });

    return [...new Set(allTags)];
}

export async function getPostContent(filename) {
    let fullPath = `${postDir}/${filename}`;

    return fetch(fullPath).then(response => {
        return response.text().then(text => {
            return stripFrontmatter(text);
        });
    });
}

const frontMatterMarker = '---';
export function stripFrontmatter(content) {
    let startPos = content.search(frontMatterMarker) + frontMatterMarker.length;
    let endPos = content.slice(startPos).search(frontMatterMarker) + startPos;

    return content.slice(endPos+frontMatterMarker.length);
  }