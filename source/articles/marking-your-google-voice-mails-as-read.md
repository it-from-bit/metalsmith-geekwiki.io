---
title: "Marking ALL Your Google Voice Mails as Read"
layout: "articles/article-page.pug"
summary: "Marking ALL Your Google Voice Mails as Read"
featured_image: "assets/articles/google-voice.jpeg"
create_date: "07-24-2012"
author:
  firstname: "Kyle"
  lastname: "Corupe"
  format: "firstname lastname (username)"
  username: "kcorupe"
tags:
share:
  title: "Marking ALL Your Google Voice Mails as Read"
  summary: "Marking ALL Your Google Voice Mails as Read"
  href: "###marking-your-google-voice-mails-as-read###"
---
Are you like me and never actually go into google voice to mark them as read as you do email? I just look at the email that I get in my gmail box and look at the transcription. Hardly ever actually log into the google.com/voice site.

Well with the new Jelly Bean voice integration into SMS and Call log, all those "missed" calls are annoying. And Googles web interface would only allow you to mark 10 read at a time. (Take WAYYYY to long to do the 1600+ that I had). Sooo, as any nerd would do... there has to be a better way right?

Well, I'm not much of a Python person but this might turn me onto some cool ideas and things you can do with Google Voice and Python in general.

Here is how you can mark all you unread msg's as read. No matter how many you have.

*   First Install the packages you need.

From Site: [http://sphinxdoc.github.com/pygooglevoice/install.html#setups](http://sphinxdoc.github.com/pygooglevoice/install.html#setups)

```bash
$ yum install python python-setuptools
$ sudo easy_install simplejson
$ sudo easy_install -U pygooglevoice
```

*   Next, you must make a change to the LOGIN value of the settings.py file in the pygooglevoice egg package.
*   Its the settings.py file: In my case it was located here: /usr/lib/python2.6/site-packages/pygooglevoice-0.5-py2.6.egg/settings.py

```python
LOGIN = https://accounts.google.com/ServiceLogin?service=grandcentral
```
*   Now create a simple script
*   Courtesy of this guy: [http://webapps.stackexchange.com/a/10105](http://webapps.stackexchange.com/a/10105)

```python
from googlevoice import Voice,util
voice = Voice()
voice.login('YOUR USERNAME', 'YOUR PASSWORD')

while True :
 folder = voice.search('is:unread')
 if folder.totalSize  break
 util.print_(folder.totalSize)
 for message in folder.messages:
 util.print_(message)
 message.mark(1)
```

*   Then simply execute the script and save yourself HOURS of time!

```bash
python your_script_name.py
```
