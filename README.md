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

  * **_Features/Functionality_**
    * **Article Specific** 
      * **Export**: Export post/article in PDF (.`pdf`) or MS Word (`.docx` or `.doc`)
      * **Changelog**: Cached data of the changes made to articles/posts
      * **Categories/Tags Indexing**: Articles should be categorized, and those categories should be indexed, as well as article tags
      * **Gist Snippets**: Authors should be able to reference a Gist code snippet in their articles
      * **Tags**: The `gen-tag-ul()` mixin needs some work (links, hover, title, positioning, limit, etc)
      * **Header Anchors**: The header tags should link to its own anchor, Just like this page does. (It may actually be better to just create a header mixin, EG: `+h(3, 'Some String')`, or something similar)
      * **Social Media**: Whenever the build is ran, if any new articles were generated, then they should be posted to the FB and Twitter account for GeekWiki
    * **Other**
      * **News/RSS Feed**: A live RSS feed polling from various sources using client side JS <sub>[more..](#rss-news-feed)</sub>
    * **Visitor Functionality**
      * **Comments**: Ability to comment on articles using Facebooks API
      * **User Activity**: Whenever a visitor authors or comments on an article, that activity should be logged... statically... somehow... 
      * **User Settings**: Such as preferred/default categories, news feeds, etc - This would obviously operate via client side cookies or *[local storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage)*
      * **RSS Feed Subbmissions**: Maybe a way for visitors to suggest other RSS feeds - even if its just a form that populates a Facebook comment for the GeekWiki FB page
      * **Github Gist**: Giving viewers/authors the ability to interact with Gist content would be awesome. 
        * **Authenticated**: I'm not 100% sure this is possible, but if its possible to interact with the Gist API using the viewers credentials (without saving them), then that would give them the ability to save private drafts.
        * **Public**: If the above isn't possible, or used, then its still possible to save/write to public gists. So once they update the draft and we save the Gist, we could just show them the link, or even email it.
        * **Other Than Gist**: Things like pastebin.. or even our own version of it!..
      * **RSS Feed**: Even though the site is static, I would think an RSS feed would be useful
      * **UI/UX**
        * **Responsive UI**: Need to tweak the interface so it's compatible for all devices (IE: Responsive UI)
        * **Article Content Previewer**: Creating a page that contributors/authors can use to write/preview articles would be very handy. Something like the [markdown-it](https://markdown-it.github.io/)<sup>([Src](https://github.com/markdown-it/markdown-it))</sup> demo previewer would be handy, as it would show them the article using the GW css (and JS.. ). [markdown-it](https://github.com/markdown-it/markdown-it)
      * **Ajax Updates Polling:** Insert some AJAX to show an alert (or even update the content, unless disabled via the user settings (cookies?)) whenever there are updates that are applicable to either the *specific* page being viewed, or perhaps any new articles at all
  * **_Core Functionality_**
    * **Main Navigation**: The navigation menu at the top needs to be configurable
    * **Analytics**: Need to be logging the traffic. Select an open source 3rd party analytics service that can provide intel regarding traffic to the website, referrers, specific articles
    * **Generate Wikis Readme**: Part of the build process should be something to update the *[README.md](https://github.com/geekwiki/geekwiki.github.io/blob/master/README.md)* file within the static site repository; It could include content such as:
      * **Top Articles/Content**: When the analytics Todo item is worked on, it may be worth while to check into which providers supply a RESTful interface, or anything that could let us get the traffic data
      * **Dates/Stats**: Last built; Number of articles; Number of authors
    * **Code Cleanup**: The `build.js` was from another *Metalsmith* project, so theres plenty in there that could easily be cleaned up
    * **Build Time**: Executing the `build.js` can take anywhere from less than 10 seconds, to more than a couple minutes. This could be due to residual template files/folders that are getting needlessly processed (which is the next todo item..)
    * **Theme Assets**: The active theme for the blog is defined in the [_source/data/site.yaml_](https://github.com/geekwiki/blog/blob/master/source/data/site.yaml#L3) file as the config setting `theme`. The build process should copy over **only** the assets associated to the specified theme
    * **Implement Webpack**: The assets could/should be rolled up into one `.js` file and one `.css` file, which is easy with *[metalsmith-webpack](https://github.com/christophercliff/metalsmith-webpack)*
    * **Article Title Changelog and Redirect**: When articles are renamed, the *.html* file also gets renamed, there needs to be a way to keep track of these changes, and return a 301 redirect to the correct URL
      * There already is a *[metalsmith-rename](https://github.com/aymericbeaumet/metalsmith-redirect) article, but what needs to be automated, is the logic to save what URL/article gets redirect to what
  * **_Management_**
    * **Article Management**: The process for creating/editing/deleting articles needs to be documented, logged, and potentially automated (with just email notifications on updates (Per a notification? Or daily?... Depends on traffic and severity))
     * **Test Converting Build To MS CLI**: Metalsmith jobs can be built via a JS file (what were doing), or alternatevly, using a *metalsmith.json* file. Two [*examples*](https://github.com/metalsmith/metalsmith/tree/master/examples) can be found in the Metalsmith github repository [here](https://github.com/metalsmith/metalsmith/tree/master/examples/wintersmith) ([*config*](https://github.com/metalsmith/metalsmith/blob/master/examples/wintersmith/metalsmith.json)) and [here](https://github.com/metalsmith/metalsmith/tree/master/examples/jekyll) ([*config*](https://github.com/metalsmith/metalsmith/blob/master/examples/jekyll/metalsmith.json)). However, this setup is typically only used on simpler MS sites, so this may not be feasible, but its worth looking into
  * **_Other_**
    * **Standardize Quotations**: The string values in the metadata of the `source/*.md` files should all be encapsulated in double quotes
    * **Documentation**: Need to document how articles are processed, and need to add some JSDoc comments to the various Jade/PUG mixin functions
    * **Metalsmith Result**: When new builds are executed, the HTML content destination is the [**public** folder within **GeekWiki/blog.git**](https://github.com/geekwiki/blog/tree/master/public), the *public* folder should be a **[Subtree](https://help.github.com/articles/about-git-subtree-merges/)** or **[Submodules](https://github.com/blog/2104-working-with-submodules)**, which can be accomplished by using either Githubs **[Submodules](https://gist.github.com/gitaarik/8735255)** feature, or its **[Subtree](https://help.github.com/articles/about-git-subtree-merges/)** feature
  * **Lastly**
    * **Write Articles**:
      1. Why we switched from a *dynamic* webapp to a *static* webapp (Include why **Metalsmith** was chosen over other modules/libraries)
      2. Setting process of an advanced Metalsmith app

---
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

--- 

## Other Stuff

### Child Projects

Some of the dev tasks may not be possible (or at least reasonably accomplishable without ) with existing plugins - However, Metalsmith plugins are extremely easy to write, and can even be less than 10 lines of JS!

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


#### Article Changelog

**Description**: A plugin to keep track of what articles gets renamed to what, and something to generate a JSON file that can be loaded by *[metalsmith-rename](https://github.com/aymericbeaumet/metalsmith-redirect)*, to redirect any old URL's to the new ones
