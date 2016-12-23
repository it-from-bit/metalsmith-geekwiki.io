---
title: "How to check if ETags are being served"
layout: "articles/article-page.pug"
summary: "How to check if ETags are being served"
featured_image:
create_date: "05-24-2014"
author:
  firstname: "Geoff"
  lastname: "Hatch"
  format: "firstname lastname (username)"
  username: "ghatch"
tags:
share:
  title: "How to check if ETags are being served"
  summary: "How to check if ETags are being served"
  href: "###apache-httpd-etag-inode-information-leakage-solution###"
---
We all know of the Apache ETag vulnerability, and if you don't know how to fix it, it's pretty quite simple -- all you need to do is add: ETag None to your apache vhost configuration and restart apache. But one of the questions came across of, how do we validate that this fix actually happened or not? It's actually quite simple, all you need to do is curl and look at the headers that are returned from the server to see if it's there or not..

Example of before the fix:

```bash
$ curl -I https://hostname.com/ -k
HTTP/1.1 200 OK
Date: Thu, 20 Feb 2014 17:45:10 GMT
Server: Apache
Last-Modified: Tue, 12 Aug 2008 22:07:29 GMT
ETag: &quot;802a3-83b-99a202a5&quot;
Accept-Ranges: bytes
Content-Length: 875
Content-Type: text/html; charset=UTF-8
```

Example of after the fix:

```bash
$ curl -I https://hostname.com/ -k
HTTP/1.1 200 OK
Date: Thu, 20 Feb 2014 17:45:22 GMT
Server: Apache
Last-Modified: Tue, 12 Aug 2008 18:17:46 GMT
Accept-Ranges: bytes
Content-Length: 875
Content-Type: text/html; charset=UTF-8
```

As you can see above, the first curl command returns the ETag information, and the second one does not and this will allow you to close out that vulnerability! :)
