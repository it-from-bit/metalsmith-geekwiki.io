# GeekWiki Blog Generator


### What?

**GeekWiki** is a **_mostly_** statically generated blog. I say *"mostly"*, because even though the blog itself operates without being directly dependent on a database, *some* of the content is still dynamically retrieved from external resources.

-----

### How?

Well.. Instead of relying on a database to hold the blog content, the articles are written in simple **[Markdown](https://daringfireball.net/projects/markdown/syntax)** flavored syntax, and stored in the **[source](https://github.com/geekwiki/blog/tree/master/source)** directory of our **[blog](https://github.com/geekwiki/blog)** repository. 

Whenever a new article is published and merged into the *master* branch, the un-processed articles are processed and published to our **[geekwiki.github.io.git](https://github.com/geekwiki/geekwiki.github.io.git)** repository. This process will eventually be automated with some nifty [AWS](https://aws.amazon.com) badassery.

The only elements of the blog that aren't static, would be the visitor related features, such as comments on articles, which will be accomplished via *[Facebooks API](https://developers.facebook.com/docs/plugins/comments/)*. Any other dynamic content will be queried from *[Githubs API](https://developer.github.com/v3/repos/contents/)*.

-----

### Why?

Now hold on... I know what you're thinking... You're thinking:

> Why on earth would one create a **'static'** website that still utilizes **'dynamic'** content?!

And the reason is that none of the dynamic content is critical for the blog to operate. Meaning if the API requests **all** fail, the blog itself would still operate, albeit shy of some article comments and changelogs. Where a blog thats completely reliant on a database wouldn't be able to serve any content (typically..)

-----

### Who?

Just a couple of *badass* geeks

 * [Justin Hyland](https://github.com/jhyland87)
 * [Geoff Hatch](https://github.com/ghatch)

-----

### ToDo List

  * **Features**:
    * **Article Specific:** 
      * **Export**: Export post/article in PDF (.`pdf`) or MS Word (`.docx` or `.doc`)
      * **Changelog**: Cached data of the changes made to articles/posts
      * **Categories/Tags Indexing**: Articles should be categorized, and those categories should be indexed, as well as article tags
      * **Gist Snippets**: Authors should be able to reference a Gist code snippet in their articles
    * **Other**:
      * **News Feed**: The homepage should have a "feed" of updates (articles, article comments, etc)
  * **User Functionality**:
      * **Comments**: Ability to comment on articles using Facebooks API
      * **User Activity**: Whenever a visitor authors or comments on an article, that activity should be logged... statically... somehow... 
  * **Core Functionality**:
    * **Analytics**: Need to be logging the traffic, duhhh!  
    * **Code Cleanup**: The `build.js` was from another *Metalsmith* project, so theres plenty in there that could easily be cleaned up
    * **Build Time**: Executing the `build.js` can take anywhere from less than 10 seconds, to more than a couple minutes. This could be due to residual template files/folders that are getting needlessly processed
    * **Theme Assets**: The theme for the blog is the [`theme` value defined in the metafile **source/data/site.yaml**](https://github.com/geekwiki/blog/blob/master/source/data/site.yaml#L3) ; The build process should copy over **only** the assets associated to the specified theme
    * **Implement Webpack**: The assets could/should be rolled up into one `.js` file and one `.css` file, which is easy with *[metalsmith-webpack](https://github.com/christophercliff/metalsmith-webpack)*
    * **Article Title Changelog and Redirect**: When articles are renamed, the *.html* file also gets renamed, there needs to be a way to keep track of these changes, and return a 301 redirect to the correct URL
  * **Other**:
    * **Article Management**: The process for creating/editing/deleting articles needs to be documented, logged, and potentially automated (with just email notifications on updates (Per a notification? Or daily?... Depends on traffic and severity))
    * **Documentation**: Need to document how articles are processed, and need to add some JSDoc comments to the various Jade/PUG mixin functions