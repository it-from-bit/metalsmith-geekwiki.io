---
title: "Documentation Index"
layout: "articles/article-page.pug"
summary: "Documentation Index"
author: false
tags: false
share: false
---

# Documentation

## Article Source Format

### Metadata 

The article *MetaData* is placed in the very top of the `.md` file, with three hyphens above and below it.

Key | Req | Type | Desc | Default
--- | :-: | :--: | ---- | --------
`title` | **Y** | *string* | The articles title | Parsed version of URL
`summary` | _N_ | *string* | The articles summary | `undefined`
`layout` | **Y** | *string* | The layout/template to use | *None*
`author` | _N_ | *string*,*object* | Author data | Github Username of initial committer
`author.username` | _N_ | *string* | Authors Github username | Github Username of initial committer
`author.firstname` | _N_ | *string* | Authors *first* name | `undefined`
`author.lastname` | _N_ | *string* | Authors *last* name | `undefined`
`author.href` | _N_ | *string*,*object* | Address to hyperlink to (`string`), or `false` to remove hyperlink | Github URL of authors account
`author.prefix` | _N_ | *string*,*object* | Prefix of the Author thingy | "By"
`share` | _N_ | *object*,*boolean* | Sharing Settings | 
`share.title` | _N_ | *string* | The articles title (to override the articles `title` value) | Articles primary `title`
`share.summary` | _N_ | *string* | The articles summary (to override the articles `summary` value) | Articles primary `summary`
`share.href` | _N_ | *string* | The articles href (to override the articles `href` value) | Articles primary `href`
`github` | _N_ | *object*,*boolean* | Determines if/what data should be retrieved from Githubs API and populated | `true`

An example of the metadata section from an existing .md file:

    ---
    title: "Article Title"
    layout: "articles/article-page.pug"
    summary: "This is the summary of the article"
    author:
      firstname: "Justin"
      lastname: "Hyland"
      username: "jhyland87"
      prefix: "By"
      href: "http://www.jhyland.pro"
    tags: 
      - "Tag 1"
      - "Tag 2"
      - "Tag 3"
    share:
      title: "Checkout This Article!"
      summary: "Short summary for shared link"
      href: "http://geekwiki.local/posts/foo.html"
    export: [ "pdf", "docx" ]
    ---

blah blah


### Full Source

    ---
    title: "Article Title"
    layout: "articles/article-page.pug"
    summary: "This is the summary of the article"
    author:
      firstname: "Justin"
      lastname: "Hyland"
      username: "jhyland87"
      prefix: "By"
      href: "http://www.jhyland.pro"
    tags: 
      - "Tag 1"
      - "Tag 2"
      - "Tag 3"
    share:
      title: "Checkout This Article!"
      summary: "Short summary for shared link"
      href: "http://geekwiki.local/posts/foo.html"
    export: [ "pdf", "docx" ]
    ---

    # Hello World! First Heading
