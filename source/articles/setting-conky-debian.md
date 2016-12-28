---
title: "Setting Up Conky On Debian Linux"
layout: "articles/article-page.pug"
summary: "Setting Up Conky On Debian Linux"
featured_image: "assets/articles/conky-screenshot.png"
create_date: "06-06-2014"
author:
  firstname: "Justin"
  lastname: "Hyland"
  format: "firstname lastname (username)"
  username: "jhyland87"
tags: [ "conky", "debian", "desktop", "graphics", "statistics" ]
share:
  title: "Setting Up Conky On Debian Linux"
  summary: "Setting Up Conky On Debian Linux"
  href: "###setting-conky-debian###"
---
What is _**[Conky](http://conky.sourceforge.net/)**_?..

> Conky is a free, light-weight system monitor for X, that displays any information on your desktop. Conky is licensed under the GPL and runs on Linux and BSD.

I stumbled upon Conky when I was setting up my new laptop with Linux Mint, I was looking for the Linux equivalent to [GeekTool for Mac](http://projects.tynsoe.org/en/geektool/). While Conky is much more complicated than GeekTool is, it's much more powerful and provides a wide range of options, all very customizable.

# Conky Setup and configured on a Debian OS

![Conky Setup and configured on a Debian OS](/assets/articles/conky-screenshot.png)

Here's a screenshot of my desktop to the right, after I got Conky setup and configured correctly...

**To Install Conky**... It's pretty basic, you can install it via APT...

```bash
$ sudo apt-get install conky
```

**Customizing Conky** can get a little tricky. Start by creating a ~/.conkyrc file, which may or may not exist after you install Conky, (I don't think it gets created, but I don't remember for sure. If it's not there, then Conky will assume default settings for everything.. which is pretty ugly). Here's my custom Conky configuration file: [Conky Configuration File](/conky_config.txt)  

At the top of the file are the settings for the Conky application iself, (As opposed to the display content/settings). Everything prior to the line that just contains "**TEXT**".  

[Heres](http://conky.sourceforge.net/config_settings.html) a page on Conkys website that reference each of the setting variables, and what they represent. Most of these settings are pretty self explanatory, but be sure to poke around a bit just to be sure.

**Note**: You will notice that if you edit the ~/.conkyrc file while Conky is running, then save it, Conky will automatically reload with the new settings.

___
## Examples
These are some creative examples of how customizable Conky can be.

![Conky Example](/assets/articles/Conky_Example.jpg)
![Conky Example](/assets/articles/Conky_Example-1.jpg)
![Conky Example](/assets/articles/Conky_Example-2.png)
![Conky Example](/assets/articles/Conky_Example-3.png)
![Conky Example](/assets/articles/Conky_Example-4.jpg)
![Conky Example](/assets/articles/Conky_Example-5.png)
![Conky Example](/assets/articles/Conky_Example-6.jpg)
![Conky Example](/assets/articles/Conky_Example-7.png)
![Conky Example](/assets/articles/Conky_Example-8.png)
![Conky Example](/assets/articles/Conky_Example-9.png)
![Conky Example](/assets/articles/Conky_Example-10.jpg)
![Conky Example](/assets/articles/Conky_Example-11.png)
![Conky Example](/assets/articles/Conky_Example-12.jpg)
![Conky Example](/assets/articles/Conky_Example-13.jpg)
![Conky Example](/assets/articles/Conky_Example-15.png)
