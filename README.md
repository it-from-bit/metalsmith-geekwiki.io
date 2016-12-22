# GeekWiki Blog Generator

*Contents:*: **[What?](#what)** | **[How?](#how)** | **[Why?](#why)** | **[Who?](#who)** | **[ToDo List](#todo-list)**

-----

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
      * **Tags**: The `gen-tag-ul()` mixin needs some work (links, hover, title, positioning, limit, etc)
    * **Other**:
      * **News/RSS Feed**: A live RSS feed polling from various sources using client side JS <sub>[more..](#rss-news-feed)</sub>
  * **User Functionality**:
      * **Comments**: Ability to comment on articles using Facebooks API
      * **User Activity**: Whenever a visitor authors or comments on an article, that activity should be logged... statically... somehow... 
      * **User Settings**: Such as preferred/default categories, news feeds, etc - This would obviously operate via client side cookies or *[local storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage)*
      * **RSS Feed Subbmissions**: Maybe a way for visitors to suggest other RSS feeds - even if its just a form that populates a Facebook comment for the GeekWiki FB page
  * **Core Functionality**:
    * **Main Navigation**: The navigation menu at the top needs to be configurable
    * **Analytics**: Need to be logging the traffic, duhhh!  
    * **Code Cleanup**: The `build.js` was from another *Metalsmith* project, so theres plenty in there that could easily be cleaned up
    * **Build Time**: Executing the `build.js` can take anywhere from less than 10 seconds, to more than a couple minutes. This could be due to residual template files/folders that are getting needlessly processed
    * **Theme Assets**: The theme for the blog is the [`theme` value defined in the metafile **source/data/site.yaml**](https://github.com/geekwiki/blog/blob/master/source/data/site.yaml#L3) ; The build process should copy over **only** the assets associated to the specified theme
    * **Implement Webpack**: The assets could/should be rolled up into one `.js` file and one `.css` file, which is easy with *[metalsmith-webpack](https://github.com/christophercliff/metalsmith-webpack)*
    * **Article Title Changelog and Redirect**: When articles are renamed, the *.html* file also gets renamed, there needs to be a way to keep track of these changes, and return a 301 redirect to the correct URL
    * **RSS Feed**: Even though the site is static, I would think an RSS feed would be useful
  * **Management**: 
    * **Article Management**: The process for creating/editing/deleting articles needs to be documented, logged, and potentially automated (with just email notifications on updates (Per a notification? Or daily?... Depends on traffic and severity))
  * **Other**:
    * **Standardize Quotations**: The string values in the metadata of the `source/*.md` files should all be encapsulated in double quotes
    * **Documentation**: Need to document how articles are processed, and need to add some JSDoc comments to the various Jade/PUG mixin functions
    * **Metalsmith Result**: When new builds are executed, the HTML content destination is the [**public** folder within **GeekWiki/blog.git**](https://github.com/geekwiki/blog/tree/master/public), the *public* folder should be a **[Subtree](https://help.github.com/articles/about-git-subtree-merges/)** or **[Submodules](https://github.com/blog/2104-working-with-submodules)**, which can be accomplished by using either Githubs **[Submodules](https://gist.github.com/gitaarik/8735255)** feature, or its **[Subtree](https://help.github.com/articles/about-git-subtree-merges/)** feature
  * **Lastly**:
    * **Write Articles**:
      1. Why we switched from a *dynamic* webapp to a *static* webapp (Include why **Metalsmith** was chosen over other modules/libraries)
      2. Setting process of an advanced Metalsmith app

#### RSS News Feed

Just a starter list of some example RSS feed sources and categories:

  * **[Linux Journal](http://www.linuxjournal.com/rss_feeds)**
    * [Home](http://feeds.feedburner.com/LinuxJournalcom?format=xml)
    * [Breaking News](http://feeds.feedburner.com/LinuxJournal-BreakingNews?format=xml)
    * [Featured Videos](http://feeds.feedburner.com/LinuxJournalFeaturedVideo?format=xml)
    * [Blogs/News](http://feeds.feedburner.com/LinuxJournalBlogs?format=xml)
    * [Audio Video](http://feeds.feedburner.com/LinuxJournalAudioVideo?format=xml)
    * [Community](http://feeds.feedburner.com/LinuxJournalCommunity?format=xml)
    * [Education](http://feeds.feedburner.com/LinuxJournalEducation?format=xml)
    * [Embedded](http://feeds.feedburner.com/LinuxJournalEmbedded?format=xml)
    * [Hardware](http://feeds.feedburner.com/LinuxJournalHardware?format=xml)
    * [HOWTOs](http://feeds.feedburner.com/LinuxJournalHowtos?format=xml)
    * [International](http://feeds.feedburner.com/LinuxJournalInternational?format=xml)
    * [Security](http://feeds.feedburner.com/LinuxJournalSecurity?format=xml)
    * [Software](http://feeds.feedburner.com/LinuxJournalSoftware?format=xml)
    * [Sysadmin](http://feeds.feedburner.com/LinuxJournalSysadmin?format=xml)
    * [Webmaster](http://feeds.feedburner.com/LinuxJournalWebmaster?format=xml)
  * **[Linux Magazine](http://www.linux-magazine.com/Online/RSS-Feeds)**
    * [Full Content](http://www.linux-magazine.com/rss/feed/lmi_full)
    * [News](http://www.linux-magazine.com/rss/feed/lmi_news)
      * **Referenced Blogs**
        * [ROSE Blog](http://www.linux-magazine.com/rss/feed/rose_blog)
        * [Paw Prints](http://www.linux-magazine.com/rss/feed/paw_prints_writings_of_the_maddog)
        * [Productivity Sauce](http://www.linux-magazine.com/rss/feed/productivity_sauce)
        * [Off The Beat](http://www.linux-magazine.com/rss/feed/off_the_beat)
        * [Beagle Blog](http://www.linux-magazine.com/rss/feed/beagleblog)
  * **[Linux Security](http://www.linuxsecurity.com/component/option,com_rss_feeds/)**
    * [Hybrid](http://www.linuxsecurity.com/static-content/linuxsecurity_hybrid.rss) - *Most recent advisories, news stories, and feature stories.*
    * [Advisries](http://www.linuxsecurity.com/static-content/linuxsecurity_advisories.rss) - *Most recent Linux vendor security advisories.*
    * [Latest News](http://www.linuxsecurity.com/static-content/linuxsecurity_articles.rss) - *Most recent news articles.*
    * [Features](http://www.linuxsecurity.com/static-content/linuxsecurity_features.rss) - *Most recent feature stories by the editorial staff.*

And in regards to processing the RSS feed contents, no need to re-invent the wheel, *[there are plenty of JS and jQuery parsers available](https://www.sitepoint.com/jquery-rss-feed-readers/)*. 