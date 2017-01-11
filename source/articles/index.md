---
title     : "Published Articles"
layout    : "articles/index.pug"
summary   : "List of articles"
author    : false
subtitle  : "Article Index"
foobar    : "Baz Bang"
jquery: 
  eval: 
    documentReady: "Article.ajaxSearch();"
    windowLoad: 
      - "console.debug('jQuery window.load test #1');"
      - "console.debug('jQuery window.load test #2');"
---