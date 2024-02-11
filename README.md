# Noah Wright's developer site
🚧🚧 This is a work in progress! 🚧🚧

My website that is currently at noahwright.dev was made from a template made by somebody else.  This time
I wanted to create something from scratch using React.  That way I'll know the site inside and out, and I'll be able to try various
React things in the comfort of a very small site.


## TODO

This React-based site is a little bit janky because I was "shooting from the hip" while making it.  It needs to
get cleaned up before I push it out to the web.  I'll list future work here.

### MVP

This is what needs to be done before first publishing the React-based version of the site.

- Need to scroll to top when changing pages.  
- Resume page.
    - Add Signify Health to the page itself.
    - Update resume with Signify Health info.
        - Need logo
    - Links at the top don't follow styling.
- Fill in some posts so there isn't a HUGE gap.
- Blog posts
    - Floating TOC shouldn't cover up posts.
    - Improve the code-block markdown stuff
        - TL;DR block shows a literal `- item` instead of a bullet.  Same with any other markdown.  Others may also?
        - TL;DR should have a header bar where it says "TL;DR"
        - Quote shouldn't say "quote", it should just have quotation marks in the corners.
        - Code blocks should show the language in the top-right, as smaller text.
    - Prev/next buttons at the bottom look awkward.
    - Tags section could look better.
    - "Ad" superscript should be clickable, show text that explains (and has link to Terms).
    - Main text should be bigger, easier to read.
    - Previous/next link buttons look bad.
- Layout
    - Footer doesn't stick to the bottom on short pages.
- Project page
    - Snippets should include links in the bottom-left (opposite the skill chits).
    - Each project just has "lorem ipsum" nonsense right now.
    - Maybe have more than 2 projects??
- Color scheme
    - Remove everything, make the whole site straight-up black-and-white.
    - Create color-picker component that can change color on-the-fly.  Put it in top menu and play with it.
- General clean-up
    - Put styling info into actual CSS files.


### Backlog

Features I'd like to add long-term will go here.

- Copy button in code snippets.
- Paginated blog post list.
- Animation between pages.
- Support for "asides".  Format would be: `This is an ^aside^(this text shows up on hover/click).`