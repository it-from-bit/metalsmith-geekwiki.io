---
title: "Remove weird special characters from your WordPress Database"
layout: "articles/article-page.pug"
summary: "Remove weird special characters from your WordPress Database"
featured_image:
create_date: "07-08-2013"
author:
  firstname: "Geoff"
  lastname: "Hatch"
  format: "firstname lastname (username)"
  username: "ghatch"
tags:
share:
  title: "Remove weird special characters from your WordPress Database"
  summary: "Remove weird special characters from your WordPress Database"
  href: "###remove-weird-special-characters-from-your-wordpress-database###"
---
A few months ago I had to restore our website from a backup, and noticed that when I did so almost all of the posts that we have done had weird special characters inside them. I started to manually edit the posts and remove the special characters and when I realized how many there were I decided to do it a quick and easy way. With a little MySQL magic you can easily replace any of the weird special characters in all of your posts saving you a ton of time. The special character that I personally had floating around was: Â  -- So I simply logged into my MySQL database via a command line:

```bash
$ mysql -u username -p <database>
```

Then you want to use the database for your wordpress blog:

```bash
> use <database>;
```

Then all you need to do is paste the following query to replace the weird Â character with a blank space:

```bash
> UPDATE wp_posts SET post_content = REPLACE(post_content, 'Â', '');
```

One thing to note, though. If you changed your prefix from the standard wp_ you will want to update the above query to reflect whatever you prefixed your tables with. If you have any other weird characters, simply copy it from a post and replace it in the query and re-run it against your database and you will quickly clear them out. If you have them in your comments then simply replace the post_content items with comment_content and make sure you change wp_post to wp_comments.
