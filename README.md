# GeekWiki Blog Generator

*CONTENTS*: **[What?](#what)** | **[How?](#how)** | **[Why?](#why)** | **[Who?](#who)** | **[ToDo List](#todo-list)**

-----

## About

### What?

**GeekWiki** is a **_mostly_** statically generated blog. I say *"mostly"*, because even though the blog itself operates without being directly dependent on a database, *some* of the content is still dynamically retrieved from external resources.

### How?

Well.. Instead of relying on a database to hold the blog content, the articles are written in simple **[Markdown](https://daringfireball.net/projects/markdown/syntax)** flavored syntax, and stored in the **[source](https://github.com/geekwiki/blog/tree/master/source)** directory of our **[blog](https://github.com/geekwiki/blog)** repository. 

Whenever a new article is published and merged into the *master* branch, the un-processed articles are processed and published to our **[geekwiki.github.io.git](https://github.com/geekwiki/geekwiki.github.io.git)** repository. This process will eventually be automated with some nifty [AWS](https://aws.amazon.com) badassery.

The only elements of the blog that aren't static, would be the visitor related features, such as comments on articles, which will be accomplished via *[Facebooks API](https://developers.facebook.com/docs/plugins/comments/)*. Any other dynamic content will be queried from *[Githubs API](https://developer.github.com/v3/repos/contents/)*.

### Why?

Now hold on... I know what you're thinking... You're thinking:

> Why on earth would one create a **'static'** website that still utilizes **'dynamic'** content?!

And the reason is that none of the dynamic content is critical for the blog to operate. Meaning if the API requests **all** fail, the blog itself would still operate, albeit shy of some article comments and changelogs. Where a blog thats completely reliant on a database wouldn't be able to serve any content (typically..)

### Who?

Just a couple of *badass* geeks

 * [Justin Hyland](https://github.com/jhyland87)
 * [Geoff Hatch](https://github.com/ghatch)

---

### ToDo List

We've moved our to-do list to "Issues" section instead. View them by [clicking here](https://github.com/geekwiki/metalsmith-geekwiki.io/issues)

--- 

## Other Stuff

### Child Projects

Some of the dev tasks may not be possible (or at least reasonably accomplishable without ) with existing plugins - However, Metalsmith plugins are extremely easy to write, and can even be less than 10 lines of JS!

---

#### [Data Utility](https://github.com/geekwiki/metalsmith-data-util)

**Description**: A plugin used for converting common data serialization formats (*json*, *yaml*, *xml*, etc) as well as moving or renaming said files.

1. [metalsmith-to-json](https://github.com/hellotoby/metalsmith-to-json)
1. [metalsmith-writemetadata](https://github.com/Waxolunist/metalsmith-writemetadata)
1. [metalsmith-renamer](https://github.com/alex-ketch/metalsmith-renamer)
1. [metalsmith-paths](https://github.com/ahmadnassri/metalsmith-paths)
1. [metalsmith-packagejson](https://www.npmjs.com/package/metalsmith-packagejson)
1. [metalsmith-move-up](https://github.com/mcdonnelldean/metalsmith-move-up)
1. [metalsmith-move-remove](https://github.com/carlnordenfelt/metalsmith-move-remove)
1. [metalsmith-json-to-files](https://github.com/woodyrew/metalsmith-json-to-files)
1. [metalsmith-jekyll-dates](https://github.com/fortes/metalsmith-jekyll-dates)
1. [metalsmith-transform](https://github.com/yeojz/metalsmith-transform)
1. [metalsmith-elevate](https://github.com/tylersticka/metalsmith-elevate)
1. [metalsmith-date-in-filename](https://github.com/sanx/metalsmith-date-in-filename)
1. [metalsmith-concat-convention](https://github.com/RobLoach/metalsmith-concat-convention) **(Maybe)**
1. [metalsmith-copy](https://github.com/mattwidmann/metalsmith-copy)

---

#### Article Changelog

**Description**: A plugin to keep track of what articles gets renamed to what, and something to generate a JSON file that can be loaded by *[metalsmith-rename](https://github.com/aymericbeaumet/metalsmith-redirect)*, to redirect any old URL's to the new ones
