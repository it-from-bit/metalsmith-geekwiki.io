---
title: "How to quickly and efficiently delete all data in a LARGE MySQL table using TRUNCATE"
layout: "articles/article-page.pug"
summary: "How to quickly and efficiently delete all data in a LARGE MySQL table using TRUNCATE"
featured_image: "assets/articles/mysql.jpeg"
create_date: "06-21-2012"
author:
  firstname: "Kyle"
  lastname: "Corupe"
  format: "firstname lastname (username)"
  username: "kcorupe"
tags:
share:
  title: "How to quickly and efficiently delete all data in a LARGE MySQL table using TRUNCATE"
  summary: "How to quickly and efficiently delete all data in a LARGE MySQL table using TRUNCATE"
  href: "###how-quickly-efficiently-delete-data-large-mysql-table-using-truncate###"
---
If you have a very large table in MySQL and you need to delete all the data from it. Instead of using the DELETE syntax or DELETE FROM tablename; It is best to use the TRUNCATE syntax.

This will delete all data in the table very quickly. In MySQL the table is actually dropped and recreated, hence the speed of the query.

```bash
$ mysql> TRUNCATE TABLE tablename;
```

Query OK, 0 rows affected (10.34 sec)[/bash]

**Note:** The number of deleted rows for MyISAM tables returned is zero; for INNODB it returns the actual number deleted.
