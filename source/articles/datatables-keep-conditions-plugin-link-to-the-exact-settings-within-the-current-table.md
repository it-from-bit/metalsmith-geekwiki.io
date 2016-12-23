---
title: "DataTables Keep Conditions Plugin – Link to the exact settings within the current table"
layout: "articles/article-page.pug"
summary: "DataTables Keep Conditions Plugin – Link to the exact settings within the current table"
featured_image: "assets/articles/datatables-keep-conditions-plugin.png"
create_date: "11-17-2015"
author:
  firstname: "Justin"
  lastname: "Hyland"
  format: "firstname lastname (username)"
  username: "jhyland87"
tags: [ "DataTables", "javascript", "jQuery", "plugins" ]
share:
  title: "DataTables Keep Conditions Plugin – Link to the exact settings within the current table"
  summary: "DataTables Keep Conditions Plugin – Link to the exact settings within the current table"
  href: "###datatables-keep-conditions-plugin-link-to-the-exact-settings-within-the-current-table###"
---
I recently posted a plugin I created for DataTables, called [Live Ajax](/articles/datatables-live-ajax-plugin-keep-your-ajax-sourced-tables-up-to-date.html), which basically keeps an AJAX sourced DataTable up to date, updating only the required rows.

But thats actually only one of several plugins I've recently created. I happen to use [DataTables](http://datatables.net) quite a bit, probably for every project that needs a table with anything done to it (pagination, searching, ordering, length change, etc). DataTables handles all of that right out of the box!

Before I used DataTables, I was doing most of the above actions via the backend, via libraries like the [Pagination Class](http://www.codeigniter.com/user_guide/libraries/pagination.html) that comes with [CodeIgniter](http://www.codeigniter.com/). There were pros and cons to both versions of processing. While processing everything on the server side made it easier for viewers to copy/paste the URL, or bookmark it, and return to the table exactly as it was, it was a new HTTP request for every change... Even if you use jQuery and AJAX, thats still more connections than I would like, just to render a table. Then on the other hand, if you use a jQuery plugin, such as DataTables, the rendering is much faster, since it's all done right there on the client side, but since it alters elements right in the DOM, you can't copy/paste the URL, or bookmark it, and return to it exactly as it was.

I got tired of sending someone to a page within one of my projects that was using DataTables, and telling them to "Search for this" or "Order this column Ascending" or "Go to page #".. I wanted to just copy and paste the URL to them, and have the table draw itself up just as I was seeing it on my side.

And DataTables made this easy, with it's robust and powerful [API](http://datatables.net/reference/api/), I was able to [create a plugin](http://datatables.net/manual/plug-ins/) to do exactly what I wanted.

The _KeepConditions_ plugin has the ability to keep the following conditions:
* Table Search String
* Column Ordering
* Pagination
* Table Length
* [Column Visibility](http://datatables.net/reference/button/colvis) (A [buttons](http://datatables.net/extensions/buttons/) extension)
* [Scroll Position](https://datatables.net/extensions/scroller/)
* [Column Reordering](http://datatables.net/extensions/colreorder/)

### [GIT Repo](https://github.com/jhyland87/DataTables-Keep-Conditions)

___

## Configuration
I made the plugin about as easy to use as I possibly could. All you need to do is initiate a DataTable instance as you normally would, but add a new setting, _keepConditions_. Setting the _keepConditions_ simply to true will automatically enable processing of every column on said table. But there are a few other options you can use.

Heres a list of the parameters/options you can use to configure _keepConditions_

|Parameter|Type|Default|Description|
|--- |--- |--- |--- |
|keepConditions|boolean/object|true|Enable/Disable keepConditions plugin|
|keepConditions.page|boolean|true|Enable keepConditions for pagination|
|keepConditions.length|boolean|true|Enable keepConditions for page length|
|keepConditions.search|boolean|true|Enable keepConditions for table search/filter|
|keepConditions.order|boolean|true|Enable keepConditions for column ordering|
|keepConditions.colvis|boolean|true|Enable keepConditions for [column visibility](http://datatables.net/reference/button/colvis)|
|keepConditions.scroller|boolean|true|Enable keepConditions for the [Scroller](https://datatables.net/extensions/scroller/) extension (Only enabled by default if Scroller extension is included)|
|keepConditions.colorder|boolean|true|Enable keepConditions for [column ordering](http://datatables.net/extensions/colreorder/) (If ColReorder is enabled)|


Also... The _KeepConditions_ plugin comes with a button! If you properly initiate a table with the [buttons extensio](http://datatables.net/extensions/buttons/), then all you need to do is add the button _copyConditions_. This will add a button labeled _Copy Conditions_. If the viewers browser supports the ability to copy text to the clipboard, then the URL will automatically be sent to the clipboard, if not, then the viewer will get a DataTables prompt with the URL, informing them to copy it's already selected contents.

___

## Examples
**Basic Initialization** - Enabling for Paging, Length, Search and Order

```javascript
$('#example').DataTable({
    keepConditions: true
});
```

**Advanced Initialization** - Select what conditions to keep

```javascript
$('#example').DataTable({
    dom: 'lfrtip',
    keepConditions: {
        page:   true,
        length: true,
        search: true,
        order:  true
    }
});
```

**Basic w/ Button**

```javascript
$('#example-1').DataTable({
    keepConditions: true,
    dom: 'Blfrtip',
    buttons: [
        'copyConditions'
    ]
});
```

**Multiple Tables** - With different configurations, as well as tables targeting a table via class name

```javascript
$('#example-1').DataTable({
    dom: 'Blftipr',
    keepConditions: true,
    buttons: [
        'copyConditions'
    ]
});

$('.example-2').DataTable({ // Using Class
    dom: 'lftipr',
    pageLength: 25,
    keepConditions: {
        search: true,
        order: true,
        page: true,
        length: true
    }
});
```

**Extension Compatibility** - Initiation with the [ColVis](http://datatables.net/reference/button/colvis) button and [Scroller](https://datatables.net/extensions/scroller/) and [ColReorder](http://datatables.net/extensions/colreorder/) extensions, on an AJAX sourced table, as well as disabling un-necessary conditions.

```javascript
$('#example').DataTable({
    ajax:           ";dataSrc.txt";,
    deferRender:    true,
    scrollY:        200,
    scrollCollapse: true,
    scroller:       true,
    colReorder:     true,
    dom: 'Bfrtip',
    buttons: [
        'colvis'
    ],
    keepConditions: {
        page:     false,
        length:   false,
        search:   true,
        order:    true,
        colvis:   true,
        scroller: true
    }
});
```
