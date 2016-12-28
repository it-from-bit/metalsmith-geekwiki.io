---
title: "The Best Way to Install Nagios - Using OMD The Open Monitoring Distribution"
layout: "articles/article-page.pug"
summary: "The Best Way to Install Nagios - Using OMD The Open Monitoring Distribution"
featured_image: "assets/articles/nagios.png"
create_date: "06-21-2012"
author:
  firstname: "Kyle"
  lastname: "Corupe"
  format: "firstname lastname (username)"
  username: "kcorupe"
tags: [ "centos", "Check_MK", "Nagios", "OMD", "RHEL" ]
share:
  title: "The Best Way to Install Nagios - Using OMD The Open Monitoring Distribution"
  summary: "The Best Way to Install Nagios - Using OMD The Open Monitoring Distribution"
  href: "###the-best-way-install-nagios-using-omd-the-open-monitoring-distribution###"
---
Without a doubt the best OpenSource monitoring software out there is Nagios. Now I'm sure this is a debatable topic and some favor other options out there such as Zabbix. But if your a true Linux head, and loath any type of point and click graphical user interface then Zabbix would automatically be out of the question.

However, with the power of Nagios also comes the learning curve. Even though the documentation for Nagios is extreamly thorough it can be a bit daunting for a newbie to get it up and running. Even just to monitor a few hosts. But with this article I aim to change that perception.

Meet **OMD**

Literally the Best way to install Nagios - Using OMD The Open Monitoring Distribution

[http://omdistro.org/](http://omdistro.org/)

OMD as the name implies is an Open Monitoring Distribution. Its not actually an entire Linux distribution but just a pre-packaged and easy to install monitoring platform that utilizes Nagios Core and many of the bells and whistles that people would like to install to get the most out of Nagios. Best of all you can run multiple instances (or sites as OMD refers them) on a single server. This would allow you to run a dev and a prod instance on the same machine for testing configuration changes on one before pushing them to production. OMD also allows for easy backups, as well as copying and mv'ing sites. Upgrades are also a breeze, simply installing the latest version of OMD and running an omd upgrade on the desired site will do all the hard work for you. And boom your done. You could even try upgrading dev first to make sure it doesn't break anything on your production site first.

From their site:
> OMD avoids the tedious work of manually compiling and integrating Nagios addons while at the same time avoiding the problems of pre-packaged installations coming with your Linux distribution, which are most times outdated and provide no regular updates.

> OMD bundles Nagios together with many important addons and can easily be installed on every major Linux distribution. We provide prebuilt packages for all enterprise Linux distributions and also for some other, such as Ubuntu 11.04.

Here are a few of the things that comes installed with OMD.
*   Nagios
    *   nagios-plugins
    *   NSCA
    *   check_nrpe
*   Icinga
*   Shinken
*   nagvis
*   [pnp4nagios](http://omdistro.org/wiki/omd/Pnp4nagios)
*   rrdtool/rrdcached
*   Check_MK
*   MK Livestatus
*   Multisite
*   [dokuwiki](http://omdistro.org/wiki/omd/Dokuwiki)
*   Thruk
*   Mod-Gearman
*   check_logfiles
*   check_oracle_health
*   check_mysql_health
*   jmx4perl
*   check_webinject
*   check_multi

Now the real highlight here, and I will get to it later is Check_MK. Check_MK really answers the age old problem of monitoring remote Linux systems in an easy and efficient way. No longer are the days of lots of Nagios plugins and hours of configuration file setup just to monitor CPU/Mem/Disk/Network etc. Those are the types of things that should be simple to do. Giving us more time to do the more in-depth monitoring that we really want to get to (if thats your goal).

Since I am a RHEL/CentOS type of guy, this guide will follow installing OMD on a RHEL based system. But OMD also packages .deb files as well for easy install. Where I work we use Satellite/Spacewalk, so I simply upload the OMD RPM to the related channel and use yum to install. But for simplicity sake, we will just do it the old fashion way.

*   Download the .rpm package from OMD's website **(MAKE SURE YOU GET THE LATEST VERSION!!)** At the time I wrote this article there was 0.54

```bash
# wget http://omdistro.org/attachments/download/174/omd-0.54-rh60-28.x86_64.rpm
```

*   Install the RPM

```bash
# yum localinstall omd-0.54-rh60-28.x86_64.rpm
```

*   Now all we need to do is create a monitoring instance, or what OMD calls a site.

```bash
# omd create prod
```

*   After creating the monitoring instance you can either start it right away and get right to using it. Or you can do a little customization first.
*   One thing to note, is since OMD creates contained sites for each instance, it runs that site as the user the site is called in our example above "prod" all of the prod instance services are running as the user prod. To admin the site you should always su to that user for configuration.

```bash
OMD[prod]:~$ omd config
```

![OMD Screenshot 1](/assets/articles/omd_screen_1.png)
*   First thing you notice is how professional and clean the interfaces for OMD and check_mk are. Here is an example of the configuration settings for the site prod. In later articles I will go more in depth.</li>
*   After configuration startup your instance. OMD will start up each component for you.</li>

![OMD Screenshot 2](/assets/articles/omd_screen_2.png)
*   I will include a few more screenshots below so you can get an appreciation for some of the options and features available.</li>

![OMD Screenshot 3](/assets/articles/omd_screen_3.png)

![OMD Screenshot 4](/assets/articles/omd_screen_4.png)

*   Now you can simple go to the URL or hostname of your server and choose from the various interfaces that OMD comes packaged with.
*   Just take your pick, you can configure the default one using omd config sitename.

1.  Nagios Classic
2.  MultiSite
3.  Thurk
4.  Icinga
5.  Shinken
6.  Nagvis (although this is not really a dashboard like the others)

More articles to come on further configuring and actually getting hosts in and monitored. As well as the benefits and features of check_mk, and scaling OMD/Nagios to monitor large number of hosts and large infrastructures.

Kyle
