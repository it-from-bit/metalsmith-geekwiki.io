var _ = require('lodash')

var articles = {
  "name":"articles",
  "total":51,
  "result":[
    {
      "title":"Published Articles",
      "layout":"articles/index.pug",
      "summary":"List of articles",
      "author":false,
      "subtitle":"Article Page Examples",
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121471,
        "size":138,
        "blocks":8,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/index.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"index.md",
        "ext":".md",
        "name":"index",
        "href":"/articles/index.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"10 Simple Quick Keys in BASH to Make Your Life Easier",
      "summary":"10 Simple Quick Keys in BASH to Make Your Life Easier",
      "create_date":"09-01-2013",
      "author":{
        "firstname":"Richard",
        "lastname":"Gray",
        "format":"firstname lastname (username)",
        "username":"rgray"
      },
      "share":{
        "title":"10 Simple Simple Quick Keys in BASH to Make Your Life Easier",
        "summary":"10 Simple Simple Quick Keys in BASH to Make Your Life Easier",
        "href":"###10-simple-quick-keys-in-bash-make-life-easier###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121446,
        "size":1369,
        "blocks":8,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-04T05:26:00.000Z",
        "ctime":"2017-01-04T05:26:00.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/10-simple-bash-commands-make-life-easier.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"10-simple-bash-commands-make-life-easier.md",
        "ext":".md",
        "name":"10-simple-bash-commands-make-life-easier",
        "href":"/articles/10-simple-bash-commands-make-life-easier.md",
        "dhref":"/articles/"
      },
      "layout":"articles/article-page.pug",
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"How to add a new Linux user account",
      "layout":"articles/article-page.pug",
      "summary":"How to add a new Linux user account",
      "featured_image":"assets/posts/adding-a-new-user.jpg",
      "create_date":"07-15-2013",
      "author":{
        "firstname":"Geoff",
        "lastname":"Hatch",
        "format":"firstname lastname (username)",
        "username":"ghatch"
      },
      "tags":null,
      "share":{
        "title":"How to add a new Linux user account",
        "summary":"How to add a new Linux user account",
        "href":"###adding-a-new-user###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121448,
        "size":1934,
        "blocks":8,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/adding-a-new-user.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"adding-a-new-user.md",
        "ext":".md",
        "name":"adding-a-new-user",
        "href":"/articles/adding-a-new-user.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"Adding JS & CSS Files To CKEditor Content",
      "layout":"articles/article-page.pug",
      "summary":"Adding JS & CSS Files To CKEditor Content",
      "featured_image":null,
      "create_date":"08-24-2015",
      "author":{
        "firstname":"Justin",
        "lastname":"Hyland",
        "format":"firstname lastname (username)",
        "username":"jhyland87"
      },
      "tags":null,
      "share":{
        "title":"Adding JS & CSS Files To CKEditor Content",
        "summary":"Adding JS & CSS Files To CKEditor Content",
        "href":"###adding-js-css-files-to-ckeditor-content###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121449,
        "size":6341,
        "blocks":16,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/adding-js-css-files-to-ckeditor-content.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"adding-js-css-files-to-ckeditor-content.md",
        "ext":".md",
        "name":"adding-js-css-files-to-ckeditor-content",
        "href":"/articles/adding-js-css-files-to-ckeditor-content.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"Alternatives To Commonly Used Linux Commands",
      "layout":"articles/article-page.pug",
      "summary":"Alternatives To Commonly Used Linux Commands",
      "featured_image":"assets/articles/linux-commands.png",
      "create_date":"07-01-2014",
      "author":{
        "firstname":"Justin",
        "lastname":"Hyland",
        "format":"firstname lastname (username)",
        "username":"jhyland87"
      },
      "tags":[
        "dig",
        "host",
        "htop",
        "less",
        "more",
        "mtr",
        "nslookup",
        "top",
        "traceroute",
        "tracert"
      ],
      "share":{
        "title":"Alternatives To Commonly Used Linux Commands",
        "summary":"Alternatives To Commonly Used Linux Commands",
        "href":"###alternatives-commonly-used-commands###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121450,
        "size":10005,
        "blocks":24,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/alternatives-commonly-used-commands.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"alternatives-commonly-used-commands.md",
        "ext":".md",
        "name":"alternatives-commonly-used-commands",
        "href":"/articles/alternatives-commonly-used-commands.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"How to check if ETags are being served",
      "layout":"articles/article-page.pug",
      "summary":"How to check if ETags are being served",
      "featured_image":null,
      "create_date":"05-24-2014",
      "author":{
        "firstname":"Geoff",
        "lastname":"Hatch",
        "format":"firstname lastname (username)",
        "username":"ghatch"
      },
      "tags":null,
      "share":{
        "title":"How to check if ETags are being served",
        "summary":"How to check if ETags are being served",
        "href":"###apache-httpd-etag-inode-information-leakage-solution###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121451,
        "size":1692,
        "blocks":8,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/apache-httpd-etag-inode-information-leakage-solution.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"apache-httpd-etag-inode-information-leakage-solution.md",
        "ext":".md",
        "name":"apache-httpd-etag-inode-information-leakage-solution",
        "href":"/articles/apache-httpd-etag-inode-information-leakage-solution.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"Automate server backups to Amazon S3",
      "layout":"articles/article-page.pug",
      "summary":"Automate server backups to Amazon S3",
      "featured_image":"assets/articles/amazon.png",
      "create_date":"06-11-2012",
      "author":{
        "firstname":"Geoff",
        "lastname":"Hatch",
        "format":"firstname lastname (username)",
        "username":"ghatch"
      },
      "tags":[
        "amazon",
        "s3\"",
        "apache",
        "automatic",
        "automation",
        "free",
        "backup",
        "mysql",
        "scripting"
      ],
      "share":{
        "title":"Automate server backups to Amazon S3",
        "summary":"Automate server backups to Amazon S3",
        "href":"###automate-server-backups-to-amazon-s3###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121452,
        "size":8376,
        "blocks":24,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/automate-server-backups-to-amazon-s3.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"automate-server-backups-to-amazon-s3.md",
        "ext":".md",
        "name":"automate-server-backups-to-amazon-s3",
        "href":"/articles/automate-server-backups-to-amazon-s3.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"Bash script to create MySQL database and user",
      "layout":"articles/article-page.pug",
      "summary":"Bash script to create MySQL database and user",
      "featured_image":"assets/articles/bash-create-mysql-db-user.jpeg",
      "create_date":"06-10-2012",
      "author":{
        "firstname":"Geoff",
        "lastname":"Hatch",
        "format":"firstname lastname (username)",
        "username":"ghatch"
      },
      "tags":[
        "bash",
        "mysql",
        "script"
      ],
      "share":{
        "title":"Bash script to create MySQL database and user",
        "summary":"Bash script to create MySQL database and user",
        "href":"###bash-script-to-create-mysql-database-and-user###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121453,
        "size":1848,
        "blocks":8,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/bash-script-to-create-mysql-database-and-user.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"bash-script-to-create-mysql-database-and-user.md",
        "ext":".md",
        "name":"bash-script-to-create-mysql-database-and-user",
        "href":"/articles/bash-script-to-create-mysql-database-and-user.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"Bash Tips And Tricks (Part 1)",
      "layout":"articles/article-page.pug",
      "summary":"Bash Tips And Tricks (Part 1)",
      "featured_image":"assets/articles/linux-commands-2.jpg",
      "create_date":"02-12-2014",
      "author":{
        "firstname":"Justin",
        "lastname":"Hyland",
        "format":"firstname lastname (username)",
        "username":"jhyland87"
      },
      "tags":null,
      "share":{
        "title":"Bash Tips And Tricks (Part 1)",
        "summary":"Bash Tips And Tricks (Part 1)",
        "href":"###bash-tips-and-tricks-part-1###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121454,
        "size":13926,
        "blocks":32,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/bash-tips-and-tricks-part-1.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"bash-tips-and-tricks-part-1.md",
        "ext":".md",
        "name":"bash-tips-and-tricks-part-1",
        "href":"/articles/bash-tips-and-tricks-part-1.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"Bash Trick - Display Timestamp For Each Command In History",
      "layout":"articles/article-page.pug",
      "summary":"Bash Trick - Display Timestamp For Each Command In History",
      "featured_image":null,
      "create_date":"04-24-2014",
      "author":{
        "firstname":"Justin",
        "lastname":"Hyland",
        "format":"firstname lastname (username)",
        "username":"jhyland87"
      },
      "tags":null,
      "share":{
        "title":"Bash Trick - Display Timestamp For Each Command In History",
        "summary":"Bash Trick - Display Timestamp For Each Command In History",
        "href":"###bash-trick-display-timestamp-command-history###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121455,
        "size":1616,
        "blocks":8,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/bash-trick-display-timestamp-command-history.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"bash-trick-display-timestamp-command-history.md",
        "ext":".md",
        "name":"bash-trick-display-timestamp-command-history",
        "href":"/articles/bash-trick-display-timestamp-command-history.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"Beats Studio Wireless vs Bose AE2W Heatset Review",
      "layout":"articles/article-page.pug",
      "summary":"Beats Studio Wireless vs Bose AE2W Heatset Review",
      "featured_image":"assets/articles/linux-commands.png",
      "create_date":"05-16-2015",
      "author":{
        "firstname":"Justin",
        "lastname":"Hyland",
        "format":"firstname lastname (username)",
        "username":"jhyland87"
      },
      "tags":[
        "ae2w",
        "apple",
        "beats",
        "beats by dre",
        "bluetooth",
        "bose",
        "studio"
      ],
      "share":{
        "title":"Beats Studio Wireless vs Bose AE2W Heatset Review",
        "summary":"Beats Studio Wireless vs Bose AE2W Heatset Review",
        "href":"###beats-studio-wireless-vs-bose-ae2w-heatset-review###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121456,
        "size":8858,
        "blocks":24,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/beats-studio-wireless-vs-bose-ae2w-heatset-review.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"beats-studio-wireless-vs-bose-ae2w-heatset-review.md",
        "ext":".md",
        "name":"beats-studio-wireless-vs-bose-ae2w-heatset-review",
        "href":"/articles/beats-studio-wireless-vs-bose-ae2w-heatset-review.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"CentOS 7 Icebreaker - Everything you need to know to get started",
      "layout":"articles/article-page.pug",
      "summary":"CentOS 7 Icebreaker - Everything you need to know to get started",
      "featured_image":"assets/articles/centos7.png",
      "create_date":"04-12-2016",
      "author":{
        "firstname":"Justin",
        "lastname":"Hyland",
        "format":"firstname lastname (username)",
        "username":"jhyland87"
      },
      "tags":[
        "centos6",
        "centos7",
        "ext4",
        "firewalld",
        "network-manager",
        "rhel6",
        "rhel7",
        "xfs"
      ],
      "categories":[
        "Linux Administration",
        "RHEL",
        "RedHat OS",
        "Foo",
        "Bar",
        "Baz",
        "Bang",
        "Quux",
        "blah blah"
      ],
      "share":{
        "title":"CentOS 7 Icebreaker - Getting Started",
        "summary":"CentOS 7 Icebreaker - Getting Started"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121457,
        "size":26350,
        "blocks":56,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-04T07:19:39.000Z",
        "ctime":"2017-01-04T07:19:39.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/centos-7-icebreaker-everything-you-need-to-know-to-get-started.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"centos-7-icebreaker-everything-you-need-to-know-to-get-started.md",
        "ext":".md",
        "name":"centos-7-icebreaker-everything-you-need-to-know-to-get-started",
        "href":"/articles/centos-7-icebreaker-everything-you-need-to-know-to-get-started.md",
        "dhref":"/articles/"
      },
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"Check SSL certificate from command line",
      "layout":"articles/article-page.pug",
      "summary":"Check SSL certificate from command line",
      "featured_image":"assets/articles/check_ssl.png",
      "create_date":"10-12-2012",
      "author":{
        "firstname":"Geoff",
        "lastname":"Hatch",
        "format":"firstname lastname (username)",
        "username":"ghatch"
      },
      "tags":null,
      "share":{
        "title":"Check SSL certificate from command line",
        "summary":"Check SSL certificate from command line",
        "href":"###check-ssl-certificate-from-command-line###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121458,
        "size":5833,
        "blocks":16,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/check-ssl-certificate-from-command-line.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"check-ssl-certificate-from-command-line.md",
        "ext":".md",
        "name":"check-ssl-certificate-from-command-line",
        "href":"/articles/check-ssl-certificate-from-command-line.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"CodeIgniter URI Associative Array Parsing",
      "layout":"articles/article-page.pug",
      "summary":"CodeIgniter URI Associative Array Parsing",
      "featured_image":"assets/articles/codeigniter.png",
      "create_date":"08-20-2012",
      "author":{
        "firstname":"Justin",
        "lastname":"Hyland",
        "format":"firstname lastname (username)",
        "username":"jhyland87"
      },
      "tags":null,
      "share":{
        "title":"CodeIgniter URI Associative Array Parsing",
        "summary":"CodeIgniter URI Associative Array Parsing",
        "href":"###codeigniter-uri-associative-array-parsing###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121459,
        "size":3729,
        "blocks":8,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/codeigniter-uri-associative-array-parsing.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"codeigniter-uri-associative-array-parsing.md",
        "ext":".md",
        "name":"codeigniter-uri-associative-array-parsing",
        "href":"/articles/codeigniter-uri-associative-array-parsing.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121460,
        "size":5868,
        "blocks":16,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/commands-du-df-whats-difference.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"commands-du-df-whats-difference.md",
        "ext":".md",
        "name":"commands-du-df-whats-difference",
        "href":"/articles/commands-du-df-whats-difference.md",
        "dhref":"/articles/"
      },
      "layout":"articles/article-page.pug",
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"Common Misconceptions About Linux",
      "layout":"articles/article-page.pug",
      "summary":"Common Misconceptions About Linux",
      "featured_image":"assets/articles/winvslinux.jpeg",
      "create_date":"06-15-2012",
      "author":{
        "firstname":"Justin",
        "lastname":"Hyland",
        "format":"firstname lastname (username)",
        "username":"jhyland87"
      },
      "tags":[
        "centos",
        "grub",
        "Install",
        "Linux",
        "redhat",
        "redhat satellite",
        "spacewalk"
      ],
      "share":{
        "title":"Common Misconceptions About Linux",
        "summary":"Common Misconceptions About Linux",
        "href":"###common-misconceptions-about-linux###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121461,
        "size":24160,
        "blocks":48,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/common-misconceptions-about-linux.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"common-misconceptions-about-linux.md",
        "ext":".md",
        "name":"common-misconceptions-about-linux",
        "href":"/articles/common-misconceptions-about-linux.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"RHEL5 / CentOS5: File Conflicts when Upgrading VMWare Tools with Yum",
      "layout":"articles/article-page.pug",
      "summary":"RHEL5 / CentOS5: File Conflicts when Upgrading VMWare Tools with Yum",
      "featured_image":null,
      "create_date":"01-30-2014",
      "author":{
        "firstname":"Geoff",
        "lastname":"Hatch",
        "format":"firstname lastname (username)",
        "username":"ghatch"
      },
      "tags":null,
      "share":{
        "title":"RHEL5 / CentOS5: File Conflicts when Upgrading VMWare Tools with Yum",
        "summary":"RHEL5 / CentOS5: File Conflicts when Upgrading VMWare Tools with Yum",
        "href":"###conflicts-file-package###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121462,
        "size":2575,
        "blocks":8,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/conflicts-file-package.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"conflicts-file-package.md",
        "ext":".md",
        "name":"conflicts-file-package",
        "href":"/articles/conflicts-file-package.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"DataTables Hide Empty Columns Plugin – Automatically hide any columns that are empty",
      "layout":"articles/article-page.pug",
      "summary":"DataTables Hide Empty Columns Plugin – Automatically hide any columns that are empty",
      "featured_image":"assets/articles/datatables-hide.png",
      "create_date":"11-18-2015",
      "author":{
        "firstname":"Justin",
        "lastname":"Hyland",
        "format":"firstname lastname (username)",
        "username":"jhyland87"
      },
      "tags":[
        "ColVis",
        "DataTables",
        "javascript",
        "jQuery",
        "plugins"
      ],
      "share":{
        "title":"DataTables Hide Empty Columns Plugin – Automatically hide any columns that are empty",
        "summary":"DataTables Hide Empty Columns Plugin – Automatically hide any columns that are empty",
        "href":"###datatables-hide-empty-columns-plugin-automatically-hide-any-columns-that-are-empty###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121463,
        "size":4920,
        "blocks":16,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/datatables-hide-empty-columns-plugin-automatically-hide-any-columns-that-are-empty.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"datatables-hide-empty-columns-plugin-automatically-hide-any-columns-that-are-empty.md",
        "ext":".md",
        "name":"datatables-hide-empty-columns-plugin-automatically-hide-any-columns-that-are-empty",
        "href":"/articles/datatables-hide-empty-columns-plugin-automatically-hide-any-columns-that-are-empty.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"DataTables Keep Conditions Plugin – Link to the exact settings within the current table",
      "layout":"articles/article-page.pug",
      "summary":"DataTables Keep Conditions Plugin – Link to the exact settings within the current table",
      "featured_image":"assets/articles/datatables-keep-conditions-plugin.png",
      "create_date":"11-17-2015",
      "author":{
        "firstname":"Justin",
        "lastname":"Hyland",
        "format":"firstname lastname (username)",
        "username":"jhyland87"
      },
      "tags":[
        "DataTables",
        "javascript",
        "jQuery",
        "plugins"
      ],
      "share":{
        "title":"DataTables Keep Conditions Plugin – Link to the exact settings within the current table",
        "summary":"DataTables Keep Conditions Plugin – Link to the exact settings within the current table",
        "href":"###datatables-keep-conditions-plugin-link-to-the-exact-settings-within-the-current-table###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121464,
        "size":7102,
        "blocks":16,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/datatables-keep-conditions-plugin-link-to-the-exact-settings-within-the-current-table.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"datatables-keep-conditions-plugin-link-to-the-exact-settings-within-the-current-table.md",
        "ext":".md",
        "name":"datatables-keep-conditions-plugin-link-to-the-exact-settings-within-the-current-table",
        "href":"/articles/datatables-keep-conditions-plugin-link-to-the-exact-settings-within-the-current-table.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"DataTables Live Ajax Plugin - Keep your AJAX sourced tables up to date",
      "layout":"articles/article-page.pug",
      "summary":"DataTables Live Ajax Plugin - Keep your AJAX sourced tables up to date",
      "featured_image":"assets/articles/datatables-live-ajax-plugin.png",
      "create_date":"11-17-2015",
      "author":{
        "firstname":"Justin",
        "lastname":"Hyland",
        "format":"firstname lastname (username)",
        "username":"jhyland87"
      },
      "tags":[
        "DataTables",
        "javascript",
        "jQuery",
        "plugins"
      ],
      "share":{
        "title":"DataTables Live Ajax Plugin - Keep your AJAX sourced tables up to date",
        "summary":"DataTables Live Ajax Plugin - Keep your AJAX sourced tables up to date",
        "href":"###datatables-live-ajax-plugin-keep-your-ajax-sourced-tables-up-to-date###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121465,
        "size":10695,
        "blocks":24,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/datatables-live-ajax-plugin-keep-your-ajax-sourced-tables-up-to-date.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"datatables-live-ajax-plugin-keep-your-ajax-sourced-tables-up-to-date.md",
        "ext":".md",
        "name":"datatables-live-ajax-plugin-keep-your-ajax-sourced-tables-up-to-date",
        "href":"/articles/datatables-live-ajax-plugin-keep-your-ajax-sourced-tables-up-to-date.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"Disabling root login on Linux",
      "layout":"articles/article-page.pug",
      "summary":"Disabling root login on Linux",
      "featured_image":"assets/articles/rootlogin.png",
      "create_date":"08-14-2013",
      "author":{
        "firstname":"Geoff",
        "lastname":"Hatch",
        "format":"firstname lastname (username)",
        "username":"ghatch"
      },
      "tags":[
        "root"
      ],
      "share":{
        "title":"Disabling root login on Linux",
        "summary":"Disabling root login on Linux",
        "href":"###disabling-root-login###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121466,
        "size":2874,
        "blocks":8,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/disabling-root-login.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"disabling-root-login.md",
        "ext":".md",
        "name":"disabling-root-login",
        "href":"/articles/disabling-root-login.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"Estimate how long shred or rm will take on millions of files",
      "layout":"articles/article-page.pug",
      "summary":"Estimate how long shred or rm will take on millions of files",
      "featured_image":"assets/articles/shredding.jpg",
      "create_date":"05-18-2014",
      "author":{
        "firstname":"Geoff",
        "lastname":"Hatch",
        "format":"firstname lastname (username)",
        "username":"ghatch"
      },
      "tags":null,
      "share":{
        "title":"Estimate how long shred or rm will take on millions of files",
        "summary":"Estimate how long shred or rm will take on millions of files",
        "href":"###estimate-long-shred-rm-will-take-millions-files###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121467,
        "size":3042,
        "blocks":8,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/estimate-long-shred-rm-will-take-millions-files.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"estimate-long-shred-rm-will-take-millions-files.md",
        "ext":".md",
        "name":"estimate-long-shred-rm-will-take-millions-files",
        "href":"/articles/estimate-long-shred-rm-will-take-millions-files.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"Having fun with MAMP, Automator and Growlnotify on my Macbook",
      "layout":"articles/article-page.pug",
      "summary":"Having fun with MAMP, Automator and Growlnotify on my Macbook",
      "featured_image":"assets/articles/datatables-live-ajax-plugin.png",
      "create_date":"08-25-2012",
      "author":{
        "firstname":"Justin",
        "lastname":"Hyland",
        "format":"firstname lastname (username)",
        "username":"jhyland87"
      },
      "tags":null,
      "share":{
        "title":"Having fun with MAMP, Automator and Growlnotify on my Macbook",
        "summary":"Having fun with MAMP, Automator and Growlnotify on my Macbook",
        "href":"###having-fun-with-automator-and-growlnotify-on-my-macbook###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121468,
        "size":5702,
        "blocks":16,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/having-fun-with-automator-and-growlnotify-on-my-macbook.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"having-fun-with-automator-and-growlnotify-on-my-macbook.md",
        "ext":".md",
        "name":"having-fun-with-automator-and-growlnotify-on-my-macbook",
        "href":"/articles/having-fun-with-automator-and-growlnotify-on-my-macbook.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"How to quickly and efficiently delete all data in a LARGE MySQL table using TRUNCATE",
      "layout":"articles/article-page.pug",
      "summary":"How to quickly and efficiently delete all data in a LARGE MySQL table using TRUNCATE",
      "featured_image":"assets/articles/mysql.jpeg",
      "create_date":"06-21-2012",
      "author":{
        "firstname":"Kyle",
        "lastname":"Corupe",
        "format":"firstname lastname (username)",
        "username":"kcorupe"
      },
      "tags":null,
      "share":{
        "title":"How to quickly and efficiently delete all data in a LARGE MySQL table using TRUNCATE",
        "summary":"How to quickly and efficiently delete all data in a LARGE MySQL table using TRUNCATE",
        "href":"###how-quickly-efficiently-delete-data-large-mysql-table-using-truncate###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121469,
        "size":1265,
        "blocks":8,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/how-quickly-efficiently-delete-data-large-mysql-table-using-truncate.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"how-quickly-efficiently-delete-data-large-mysql-table-using-truncate.md",
        "ext":".md",
        "name":"how-quickly-efficiently-delete-data-large-mysql-table-using-truncate",
        "href":"/articles/how-quickly-efficiently-delete-data-large-mysql-table-using-truncate.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"How to install a LAMP (Linux, Apache, MySQL, PHP) stack on CentOS/RHEL",
      "layout":"articles/article-page.pug",
      "summary":"How to install a LAMP (Linux, Apache, MySQL, PHP) stack on CentOS/RHEL",
      "featured_image":"assets/articles/lamp.jpg",
      "create_date":"04-19-2013",
      "author":{
        "firstname":"Geoff",
        "lastname":"Hatch",
        "format":"firstname lastname (username)",
        "username":"ghatch"
      },
      "tags":null,
      "share":{
        "title":"How to install a LAMP (Linux, Apache, MySQL, PHP) stack on CentOS/RHEL",
        "summary":"How to install a LAMP (Linux, Apache, MySQL, PHP) stack on CentOS/RHEL",
        "href":"###how-to-install-lamp-linux-apache-mysql-php-stack-on-centosrhel###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121470,
        "size":6024,
        "blocks":16,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/how-to-install-lamp-linux-apache-mysql-php-stack-on-centosrhel.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"how-to-install-lamp-linux-apache-mysql-php-stack-on-centosrhel.md",
        "ext":".md",
        "name":"how-to-install-lamp-linux-apache-mysql-php-stack-on-centosrhel",
        "href":"/articles/how-to-install-lamp-linux-apache-mysql-php-stack-on-centosrhel.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"A better nslookup",
      "layout":"articles/article-page.pug",
      "summary":"A better nslookup",
      "featured_image":"assets/posts/better-nslookup-featured.png",
      "create_date":"06-08-2012",
      "categories":[
        "Linux",
        "RHEL"
      ],
      "author":{
        "firstname":"Justin",
        "lastname":"Hyland",
        "format":"lastname, firstname",
        "username":"jhyland87",
        "prefix":"Author:"
      },
      "tags":[
        "nslookup",
        "dig",
        "DNS",
        "nameserver",
        "resolv.conf",
        "networking"
      ],
      "share":{
        "title":"A better nslookup",
        "summary":"A better nslookup",
        "href":"###a-better-nslookup###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121447,
        "size":4023,
        "blocks":8,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-04T05:26:11.000Z",
        "ctime":"2017-01-04T05:26:11.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/a-better-nslookup.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"a-better-nslookup.md",
        "ext":".md",
        "name":"a-better-nslookup",
        "href":"/articles/a-better-nslookup.md",
        "dhref":"/articles/"
      },
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"Published Articles",
      "layout":"articles/index2.pug",
      "summary":"List of articles",
      "author":false,
      "subtitle":"Article Page Examples",
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121472,
        "size":139,
        "blocks":8,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/index2.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"index2.md",
        "ext":".md",
        "name":"index2",
        "href":"/articles/index2.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"Installing Docker and running your First Image",
      "layout":"articles/article-page.pug",
      "summary":"Installing Docker and running your First Image",
      "featured_image":"assets/articles/docker.png",
      "create_date":"04-06-2015",
      "author":{
        "firstname":"Geoff",
        "lastname":"Hatch",
        "format":"firstname lastname (username)",
        "username":"ghatch"
      },
      "tags":null,
      "share":{
        "title":"Installing Docker and running your First Image",
        "summary":"Installing Docker and running your First Image",
        "href":"###installing-docker-and-running-your-first-image###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121473,
        "size":4121,
        "blocks":16,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/installing-docker-and-running-your-first-image.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"installing-docker-and-running-your-first-image.md",
        "ext":".md",
        "name":"installing-docker-and-running-your-first-image",
        "href":"/articles/installing-docker-and-running-your-first-image.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"Installing Graphite on CentOS 6",
      "layout":"articles/article-page.pug",
      "summary":"Installing Graphite on CentOS 6",
      "featured_image":"assets/articles/statsd.png",
      "create_date":"07-01-2012",
      "author":{
        "firstname":"Kyle",
        "lastname":"Corupe",
        "format":"firstname lastname (username)",
        "username":"kcorupe"
      },
      "tags":null,
      "share":{
        "title":"Installing Graphite on CentOS 6",
        "summary":"Installing Graphite on CentOS 6",
        "href":"###installing-graphite-centos-6###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121474,
        "size":2100,
        "blocks":8,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/installing-graphite-centos-6.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"installing-graphite-centos-6.md",
        "ext":".md",
        "name":"installing-graphite-centos-6",
        "href":"/articles/installing-graphite-centos-6.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"Macbook - Find whats eating up your HDD",
      "layout":"articles/article-page.pug",
      "summary":"Macbook - Find whats eating up your HDD",
      "featured_image":"assets/articles/Disk_Inventory_X.jpg",
      "create_date":"02-10-2014",
      "author":{
        "firstname":"Justin",
        "lastname":"Hyland",
        "format":"firstname lastname (username)",
        "username":"jhyland87"
      },
      "tags":[
        "apple",
        "diagnostics",
        "mac",
        "macbook",
        "troubleshooting"
      ],
      "share":{
        "title":"Macbook - Find whats eating up your HDD",
        "summary":"Macbook - Find whats eating up your HDD",
        "href":"###macbook-find-whats-eating-hdd###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121475,
        "size":1954,
        "blocks":8,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/macbook-find-whats-eating-hdd.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"macbook-find-whats-eating-hdd.md",
        "ext":".md",
        "name":"macbook-find-whats-eating-hdd",
        "href":"/articles/macbook-find-whats-eating-hdd.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"MacbookPro SD Write Problem - Solved... Kinda?",
      "layout":"articles/article-page.pug",
      "summary":"MacbookPro SD Write Problem - Solved... Kinda?",
      "featured_image":"assets/articles/SD_Card-write_protection_switch.jpg",
      "create_date":"02-20-2014",
      "author":{
        "firstname":"Justin",
        "lastname":"Hyland",
        "format":"firstname lastname (username)",
        "username":"jhyland87"
      },
      "tags":[
        "raspberry PI",
        "SDcard",
        "xbmc"
      ],
      "share":{
        "title":"MacbookPro SD Write Problem - Solved... Kinda?",
        "summary":"MacbookPro SD Write Problem - Solved... Kinda?",
        "href":"###macbookpro-sd-write-problem-solved-kinda###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121476,
        "size":1890,
        "blocks":8,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/macbookpro-sd-write-problem-solved-kinda.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"macbookpro-sd-write-problem-solved-kinda.md",
        "ext":".md",
        "name":"macbookpro-sd-write-problem-solved-kinda",
        "href":"/articles/macbookpro-sd-write-problem-solved-kinda.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"Marking ALL Your Google Voice Mails as Read",
      "layout":"articles/article-page.pug",
      "summary":"Marking ALL Your Google Voice Mails as Read",
      "featured_image":"assets/articles/google-voice.jpeg",
      "create_date":"07-24-2012",
      "author":{
        "firstname":"Kyle",
        "lastname":"Corupe",
        "format":"firstname lastname (username)",
        "username":"kcorupe"
      },
      "tags":null,
      "share":{
        "title":"Marking ALL Your Google Voice Mails as Read",
        "summary":"Marking ALL Your Google Voice Mails as Read",
        "href":"###marking-your-google-voice-mails-as-read###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121477,
        "size":2512,
        "blocks":8,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/marking-your-google-voice-mails-as-read.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"marking-your-google-voice-mails-as-read.md",
        "ext":".md",
        "name":"marking-your-google-voice-mails-as-read",
        "href":"/articles/marking-your-google-voice-mails-as-read.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"OpenShift the free PaaS by Red Hat",
      "layout":"articles/article-page.pug",
      "summary":"OpenShift the free PaaS by Red Hat",
      "featured_image":"assets/articles/openshift.png",
      "create_date":"06-09-2012",
      "author":{
        "firstname":"Geoff",
        "lastname":"Hatch",
        "format":"firstname lastname (username)",
        "username":"ghatch"
      },
      "tags":[
        "free",
        "openshift",
        "paas",
        "red hat"
      ],
      "share":{
        "title":"OpenShift the free PaaS by Red Hat",
        "summary":"OpenShift the free PaaS by Red Hat",
        "href":"###openshift-the-free-paas-by-red-hat###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121478,
        "size":2844,
        "blocks":8,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/openshift-the-free-paas-by-red-hat.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"openshift-the-free-paas-by-red-hat.md",
        "ext":".md",
        "name":"openshift-the-free-paas-by-red-hat",
        "href":"/articles/openshift-the-free-paas-by-red-hat.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"Perl - Executing System Commands",
      "layout":"articles/article-page.pug",
      "summary":"Perl - Executing System Commands",
      "featured_image":null,
      "create_date":"07-15-2012",
      "author":{
        "firstname":"Justin",
        "lastname":"Hyland",
        "format":"firstname lastname (username)",
        "username":"jhyland87"
      },
      "tags":null,
      "share":{
        "title":"Perl - Executing System Commands",
        "summary":"Perl - Executing System Commands",
        "href":"###perl-executing-system-commands###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121479,
        "size":2874,
        "blocks":8,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/perl-executing-system-commands.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"perl-executing-system-commands.md",
        "ext":".md",
        "name":"perl-executing-system-commands",
        "href":"/articles/perl-executing-system-commands.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"Perl Tips And Tricks (Part 1)",
      "layout":"articles/article-page.pug",
      "summary":"Perl Tips And Tricks (Part 1)",
      "featured_image":"assets/articles/perl.jpg",
      "create_date":"07-01-2012",
      "author":{
        "firstname":"Justin",
        "lastname":"Hyland",
        "format":"firstname lastname (username)",
        "username":"jhyland87"
      },
      "tags":null,
      "share":{
        "title":"Perl Tips And Tricks (Part 1)",
        "summary":"Perl Tips And Tricks (Part 1)",
        "href":"###perl-tips-and-tricks-part-1###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121480,
        "size":11235,
        "blocks":24,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/perl-tips-and-tricks-part-1.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"perl-tips-and-tricks-part-1.md",
        "ext":".md",
        "name":"perl-tips-and-tricks-part-1",
        "href":"/articles/perl-tips-and-tricks-part-1.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"Recover Deleted Files With LSOF",
      "layout":"articles/article-page.pug",
      "summary":"Recover Deleted Files With LSOF",
      "featured_image":"assets/articles/forensics.jpg",
      "create_date":"06-23-2014",
      "author":{
        "firstname":"Justin",
        "lastname":"Hyland",
        "format":"firstname lastname (username)",
        "username":"jhyland87"
      },
      "tags":[
        "deleted files",
        "file descriptors",
        "file forensics",
        "file recovery",
        "forensics",
        "Linux",
        "lsof"
      ],
      "share":{
        "title":"Recover Deleted Files With LSOF",
        "summary":"Recover Deleted Files With LSOF",
        "href":"###recover-deleted-files-lsof###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121481,
        "size":3390,
        "blocks":8,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/recover-deleted-files-lsof.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"recover-deleted-files-lsof.md",
        "ext":".md",
        "name":"recover-deleted-files-lsof",
        "href":"/articles/recover-deleted-files-lsof.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"RHEL / CentOS: Safely remove old unused Kernels",
      "layout":"articles/article-page.pug",
      "summary":"RHEL / CentOS: Safely remove old unused Kernels",
      "featured_image":null,
      "create_date":"01-31-2014",
      "author":{
        "firstname":"Geoff",
        "lastname":"Hatch",
        "format":"firstname lastname (username)",
        "username":"ghatch"
      },
      "tags":null,
      "share":{
        "title":"RHEL / CentOS: Safely remove old unused Kernels",
        "summary":"RHEL / CentOS: Safely remove old unused Kernels",
        "href":"###remove-unused-kernels###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121482,
        "size":1877,
        "blocks":8,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/remove-unused-kernels.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"remove-unused-kernels.md",
        "ext":".md",
        "name":"remove-unused-kernels",
        "href":"/articles/remove-unused-kernels.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"Remove weird special characters from your WordPress Database",
      "layout":"articles/article-page.pug",
      "summary":"Remove weird special characters from your WordPress Database",
      "featured_image":null,
      "create_date":"07-08-2013",
      "author":{
        "firstname":"Geoff",
        "lastname":"Hatch",
        "format":"firstname lastname (username)",
        "username":"ghatch"
      },
      "tags":null,
      "share":{
        "title":"Remove weird special characters from your WordPress Database",
        "summary":"Remove weird special characters from your WordPress Database",
        "href":"###remove-weird-special-characters-from-your-wordpress-database###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121483,
        "size":2011,
        "blocks":8,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/remove-weird-special-characters-from-your-wordpress-database.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"remove-weird-special-characters-from-your-wordpress-database.md",
        "ext":".md",
        "name":"remove-weird-special-characters-from-your-wordpress-database",
        "href":"/articles/remove-weird-special-characters-from-your-wordpress-database.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"RHEL: Cannot retrieve repository metadata (repomd.xml) for repository",
      "layout":"articles/article-page.pug",
      "summary":"RHEL: Cannot retrieve repository metadata (repomd.xml) for repository",
      "featured_image":null,
      "create_date":"01-29-2014",
      "author":{
        "firstname":"Geoff",
        "lastname":"Hatch",
        "format":"firstname lastname (username)",
        "username":"ghatch"
      },
      "tags":null,
      "share":{
        "title":"RHEL: Cannot retrieve repository metadata (repomd.xml) for repository",
        "summary":"RHEL: Cannot retrieve repository metadata (repomd.xml) for repository",
        "href":"###retrieve-repository-metadata###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121484,
        "size":1928,
        "blocks":8,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/retrieve-repository-metadata.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"retrieve-repository-metadata.md",
        "ext":".md",
        "name":"retrieve-repository-metadata",
        "href":"/articles/retrieve-repository-metadata.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"Setting Up Conky On Debian Linux",
      "layout":"articles/article-page.pug",
      "summary":"Setting Up Conky On Debian Linux",
      "featured_image":"assets/articles/conky-screenshot.png",
      "create_date":"06-06-2014",
      "author":{
        "firstname":"Justin",
        "lastname":"Hyland",
        "format":"firstname lastname (username)",
        "username":"jhyland87"
      },
      "tags":[
        "conky",
        "debian",
        "desktop",
        "graphics",
        "statistics"
      ],
      "share":{
        "title":"Setting Up Conky On Debian Linux",
        "summary":"Setting Up Conky On Debian Linux",
        "href":"###setting-conky-debian###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121485,
        "size":3355,
        "blocks":8,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/setting-conky-debian.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"setting-conky-debian.md",
        "ext":".md",
        "name":"setting-conky-debian",
        "href":"/articles/setting-conky-debian.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"Simple Bash Script to Sort File Types into Directories",
      "layout":"articles/article-page.pug",
      "summary":"Simple Bash Script to Sort File Types into Directories",
      "featured_image":null,
      "create_date":"09-04-2013",
      "author":{
        "firstname":"Geoff",
        "lastname":"Hatch",
        "format":"firstname lastname (username)",
        "username":"ghatch"
      },
      "tags":[
        "automation",
        "bash",
        "scripting"
      ],
      "share":{
        "title":"Simple Bash Script to Sort File Types into Directories",
        "summary":"Simple Bash Script to Sort File Types into Directories",
        "href":"###simple-bash-script-sort-file-types-directories###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121486,
        "size":1726,
        "blocks":8,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/simple-bash-script-sort-file-types-directories.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"simple-bash-script-sort-file-types-directories.md",
        "ext":".md",
        "name":"simple-bash-script-sort-file-types-directories",
        "href":"/articles/simple-bash-script-sort-file-types-directories.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"Spice Up Your Default Index Page with h5a1",
      "layout":"articles/article-page.pug",
      "summary":"Spice Up Your Default Index Page with h5a1",
      "featured_image":"assets/articles/h5a1_directory_index_sample-small.png",
      "create_date":"02-18-2014",
      "author":{
        "firstname":"Justin",
        "lastname":"Hyland",
        "format":"firstname lastname (username)",
        "username":"jhyland87"
      },
      "tags":[
        "apache",
        "defaultindex",
        "h5a1"
      ],
      "share":{
        "title":"Spice Up Your Default Index Page with h5a1",
        "summary":"Spice Up Your Default Index Page with h5a1",
        "href":"###spice-default-index-page-h5a1###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121487,
        "size":3039,
        "blocks":8,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/spice-default-index-page-h5a1.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"spice-default-index-page-h5a1.md",
        "ext":".md",
        "name":"spice-default-index-page-h5a1",
        "href":"/articles/spice-default-index-page-h5a1.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"Copy your SSH key to multiple servers from a list",
      "layout":"articles/article-page.pug",
      "summary":"Copy your SSH key to multiple servers from a list",
      "featured_image":null,
      "create_date":"06-18-2012",
      "author":{
        "firstname":"Geoff",
        "lastname":"Hatch",
        "format":"firstname lastname (username)",
        "username":"ghatch"
      },
      "tags":null,
      "share":{
        "title":"Copy your SSH key to multiple servers from a list",
        "summary":"Copy your SSH key to multiple servers from a list",
        "href":"###ssh-rsa-copier-v1-0-script-copy-ssh-key-multiple-servers-list###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121488,
        "size":7056,
        "blocks":16,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/ssh-rsa-copier-v1-0-script-copy-ssh-key-multiple-servers-list.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"ssh-rsa-copier-v1-0-script-copy-ssh-key-multiple-servers-list.md",
        "ext":".md",
        "name":"ssh-rsa-copier-v1-0-script-copy-ssh-key-multiple-servers-list",
        "href":"/articles/ssh-rsa-copier-v1-0-script-copy-ssh-key-multiple-servers-list.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"The Best Way to Install Nagios - Using OMD The Open Monitoring Distribution",
      "layout":"articles/article-page.pug",
      "summary":"The Best Way to Install Nagios - Using OMD The Open Monitoring Distribution",
      "featured_image":"assets/articles/nagios.png",
      "create_date":"06-21-2012",
      "author":{
        "firstname":"Kyle",
        "lastname":"Corupe",
        "format":"firstname lastname (username)",
        "username":"kcorupe"
      },
      "tags":[
        "centos",
        "Check_MK",
        "Nagios",
        "OMD",
        "RHEL"
      ],
      "share":{
        "title":"The Best Way to Install Nagios - Using OMD The Open Monitoring Distribution",
        "summary":"The Best Way to Install Nagios - Using OMD The Open Monitoring Distribution",
        "href":"###the-best-way-install-nagios-using-omd-the-open-monitoring-distribution###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121489,
        "size":6450,
        "blocks":16,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/the-best-way-install-nagios-using-omd-the-open-monitoring-distribution.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"the-best-way-install-nagios-using-omd-the-open-monitoring-distribution.md",
        "ext":".md",
        "name":"the-best-way-install-nagios-using-omd-the-open-monitoring-distribution",
        "href":"/articles/the-best-way-install-nagios-using-omd-the-open-monitoring-distribution.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"Customize Your Bash Prompt",
      "layout":"articles/article-page.pug",
      "summary":"Customize Your Bash Prompt",
      "featured_image":"assets/articles/Bash_Prompt_Smiley.png",
      "create_date":"02-13-2014",
      "author":{
        "firstname":"Justin",
        "lastname":"Hyland",
        "format":"firstname lastname (username)",
        "username":"jhyland87"
      },
      "tags":[
        "bash",
        "bash prompt",
        "ps1"
      ],
      "share":{
        "title":"Customize Your Bash Prompt",
        "summary":"Customize Your Bash Prompt",
        "href":"###unique-bash-prompts###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121490,
        "size":14811,
        "blocks":32,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/unique-bash-prompts.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"unique-bash-prompts.md",
        "ext":".md",
        "name":"unique-bash-prompts",
        "href":"/articles/unique-bash-prompts.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"Use Perl modules on remote servers.",
      "layout":"articles/article-page.pug",
      "summary":"Use Perl modules on remote servers.",
      "featured_image":"assets/articles/perlmod.png",
      "create_date":"06-08-2012",
      "author":{
        "firstname":"Justin",
        "lastname":"Hyland",
        "format":"firstname lastname (username)",
        "username":"jhyland87"
      },
      "tags":[
        "cpan",
        "perl",
        "perl module",
        "ppm",
        "remote module"
      ],
      "share":{
        "title":"Use Perl modules on remote servers.",
        "summary":"Use Perl modules on remote servers.",
        "href":"###use-modules-on-remote-servers###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121491,
        "size":7624,
        "blocks":16,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/use-modules-on-remote-servers.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"use-modules-on-remote-servers.md",
        "ext":".md",
        "name":"use-modules-on-remote-servers",
        "href":"/articles/use-modules-on-remote-servers.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"Use NMAP to Checkout Servers On Your Network",
      "layout":"articles/article-page.pug",
      "summary":"Use NMAP to Checkout Servers On Your Network",
      "featured_image":"assets/articles/nmap_logo_vx.jpg",
      "create_date":"02-20-2014",
      "author":{
        "firstname":"Justin",
        "lastname":"Hyland",
        "format":"firstname lastname (username)",
        "username":"jhyland87"
      },
      "tags":[
        "Linux",
        "nmap"
      ],
      "share":{
        "title":"Use NMAP to Checkout Servers On Your Network",
        "summary":"Use NMAP to Checkout Servers On Your Network",
        "href":"###use-nmap-checkout-servers-network###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121492,
        "size":7145,
        "blocks":16,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/use-nmap-checkout-servers-network.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"use-nmap-checkout-servers-network.md",
        "ext":".md",
        "name":"use-nmap-checkout-servers-network",
        "href":"/articles/use-nmap-checkout-servers-network.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"Viewing Bash Exit Status Codes With Pipes",
      "layout":"articles/article-page.pug",
      "summary":"Viewing Bash Exit Status Codes With Pipes",
      "featured_image":null,
      "create_date":"06-25-2012",
      "author":{
        "firstname":"Justin",
        "lastname":"Hyland",
        "format":"firstname lastname (username)",
        "username":"jhyland87"
      },
      "tags":[
        "bash",
        "exit codes with tee",
        "pipe exit codes",
        "tee exit code"
      ],
      "share":{
        "title":"Viewing Bash Exit Status Codes With Pipes",
        "summary":"Viewing Bash Exit Status Codes With Pipes",
        "href":"###viewing-bash-exit-status-codes-with-pipes###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121493,
        "size":1760,
        "blocks":8,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/viewing-bash-exit-status-codes-with-pipes.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"viewing-bash-exit-status-codes-with-pipes.md",
        "ext":".md",
        "name":"viewing-bash-exit-status-codes-with-pipes",
        "href":"/articles/viewing-bash-exit-status-codes-with-pipes.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"VMware and Hot Adding Hard Disks to a Running CentOS or RHEL Linux System",
      "layout":"articles/article-page.pug",
      "summary":"VMware and Hot Adding Hard Disks to a Running CentOS or RHEL Linux System",
      "featured_image":null,
      "create_date":"06-21-2012",
      "author":{
        "firstname":"Kyle",
        "lastname":"Corupe",
        "format":"firstname lastname (username)",
        "username":"kcorupe"
      },
      "tags":[
        "centos",
        "LVM",
        "RHEL",
        "VMware"
      ],
      "share":{
        "title":"VMware and Hot Adding Hard Disks to a Running CentOS or RHEL Linux System",
        "summary":"VMware and Hot Adding Hard Disks to a Running CentOS or RHEL Linux System",
        "href":"###vmware-hot-adding-hard-disks-running-centos-linux-system###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121494,
        "size":4613,
        "blocks":16,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/vmware-hot-adding-hard-disks-running-centos-linux-system.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"vmware-hot-adding-hard-disks-running-centos-linux-system.md",
        "ext":".md",
        "name":"vmware-hot-adding-hard-disks-running-centos-linux-system",
        "href":"/articles/vmware-hot-adding-hard-disks-running-centos-linux-system.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"Why the GOTO Statement Is Evil",
      "layout":"articles/article-page.pug",
      "summary":"Why the GOTO Statement Is Evil",
      "featured_image":"assets/articles/goto.png",
      "create_date":"06-14-2012",
      "author":{
        "firstname":"Justin",
        "lastname":"Hyland",
        "format":"firstname lastname (username)",
        "username":"jhyland87"
      },
      "tags":null,
      "share":{
        "title":"Why the GOTO Statement Is Evil",
        "summary":"Why the GOTO Statement Is Evil",
        "href":"###why-goto-statement-is-evil###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121495,
        "size":6105,
        "blocks":16,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/why-goto-statement-is-evil.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"why-goto-statement-is-evil.md",
        "ext":".md",
        "name":"why-goto-statement-is-evil",
        "href":"/articles/why-goto-statement-is-evil.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    },
    {
      "title":"Writing your first AWS CloudFormation Template",
      "layout":"articles/article-page.pug",
      "summary":"Writing your first AWS CloudFormation Template",
      "featured_image":"assets/articles/aws-cloudformation.png",
      "create_date":"01-04-2016",
      "author":{
        "firstname":"Geoff",
        "lastname":"Hatch",
        "format":"firstname lastname (username)",
        "username":"ghatch"
      },
      "tags":null,
      "share":{
        "title":"Writing your first AWS CloudFormation Template",
        "summary":"Writing your first AWS CloudFormation Template",
        "href":"###writing-your-first-cloudformation-script###"
      },
      "mode":"0644",
      "stats":{
        "dev":16777220,
        "mode":33188,
        "nlink":1,
        "uid":504,
        "gid":20,
        "rdev":0,
        "blksize":4096,
        "ino":30121496,
        "size":11741,
        "blocks":24,
        "atime":"2017-01-04T09:41:13.000Z",
        "mtime":"2017-01-03T18:13:22.000Z",
        "ctime":"2017-01-03T18:13:22.000Z",
        "birthtime":"2017-01-03T18:13:22.000Z"
      },
      "filename":"articles/writing-your-first-cloudformation-script.md",
      "paths":{
        "root":"",
        "dir":"articles",
        "base":"writing-your-first-cloudformation-script.md",
        "ext":".md",
        "name":"writing-your-first-cloudformation-script",
        "href":"/articles/writing-your-first-cloudformation-script.md",
        "dhref":"/articles/"
      },
      "categories":"general",
      "foo":"bar",
      "draft":false,
      "collection":[
        "articles"
      ]
    }
  ],
  "type":"list"
}

articles.authors = {
  usernames: []
}

_.forEach( articles.result, article => {
  if ( ! article.author ) return

  if ( _.isString( article.author ) ){
    if ( articles.authors.usernames.indexOf( article.author.toLowerCase() ) == -1 ){
      articles.authors.usernames.push( article.author.toLowerCase() )
      return
    }
  }

  if ( _.isObject( article.author ) ){
    if ( _.isString( article.author.username ) ){
      if ( articles.authors.usernames.indexOf( article.author.username.toLowerCase() ) == -1 ){
        articles.authors.usernames.push( article.author.username.toLowerCase() )
        return
      }
    }
  }
})

console.log('\n\n%s\n\n', JSON.stringify(articles))