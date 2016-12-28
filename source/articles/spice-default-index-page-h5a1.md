---
title: "Spice Up Your Default Index Page with h5a1"
layout: "articles/article-page.pug"
summary: "Spice Up Your Default Index Page with h5a1"
featured_image: "assets/articles/h5a1_directory_index_sample-small.png"
create_date: "02-18-2014"
author:
  firstname: "Justin"
  lastname: "Hyland"
  format: "firstname lastname (username)"
  username: "jhyland87"
tags: [ "apache", "defaultindex", "h5a1" ]
share:
  title: "Spice Up Your Default Index Page with h5a1"
  summary: "Spice Up Your Default Index Page with h5a1"
  href: "###spice-default-index-page-h5a1###"
---
It's a very bad idea to list the contents of a web directory. That being said, there are always exceptions to the rule. For example, I have an Apache server at my house that you can only get to from within the network, and I like to just browse to it and download whatever I need, without having to know the exact path or filename.

#### Features

It provides a much richer interface, and some extra features that Apache/Nginx or any other HTTP service.

*   Breadcrumb and tree view for faster browsing
*   Different view modes
*   Auto refresh of folder content
*   Custom header and/or footer for each directory
*   Packaged download of selected content (tar and zip supported)
*   Filter for displayed files and folders
*   Folder sizes
*   Localization with lots of languages already included
*   Image and text file preview (including Markdown rendering)
*   Thumbnails for images, movies and PDFs
*   QR codes on hovering files
*   Sorting by name, date or size

**[Heres a sample default index n the h5a1 page](http://larsjung.de/h5ai/sample/)** And if you're too lazy to go to it, heres a screenshot [![h5a1 demo screenshot](/assets/articles/h5a1_directory_index_sample-small.png)

#### Installation

The installation is pretty straight forward, you just download the zip file (or even better, use wget), then copy the __h5ai_ folder and its contents to the root of the virtual hosts directory. Then add _/_h5ai/server/php/index.php_ to the _DirectoryIndex_ attribute (assuming you're using Apache). Thats pretty much it. There are more details on the install on the [**homepage**](http://larsjung.de/h5ai/).

#### Configuration

There really isn't much to configure, but all of the configuration directives are located at in the **_h5ai/conf/options.json** file. The only change I had to make was to enable the _foldersize_ attribute. But there are all kinds of things, like enabling the ability to delete file/folders. The other configuration attributes are: _autorefresh, crumb, custom, delete, dropbox, download, filter, foldersize, google-analytics, l10n, link-hover-states, mode, piwik-analytics, preview-img, preview-txt, qrcode, rename, select, sort, statusbar, thumbnails, title, tree

#### Source

**Website:** [http://larsjung.de/h5ai](http://larsjung.de/h5ai) **Demo:** [http://larsjung.de/h5ai/sample](http://larsjung.de/h5ai/sample) **Download:** [https://github.com/lrsjng/h5ai](https://github.com/lrsjng/h5ai)_
