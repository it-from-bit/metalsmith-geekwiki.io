---
title: "DataTables Hide Empty Columns Plugin – Automatically hide any columns that are empty"
layout: "articles/article-page.pug"
summary: "DataTables Hide Empty Columns Plugin – Automatically hide any columns that are empty"
featured_image: "assets/articles/datatables-hide.png"
create_date: "11-18-2015"
author:
  firstname: "Justin"
  lastname: "Hyland"
  format: "firstname lastname (username)"
  username: "jhyland87"
tags: [ "ColVis", "DataTables", "javascript", "jQuery", "plugins" ]
share:
  title: "DataTables Hide Empty Columns Plugin – Automatically hide any columns that are empty"
  summary: "DataTables Hide Empty Columns Plugin – Automatically hide any columns that are empty"
  href: "###datatables-hide-empty-columns-plugin-automatically-hide-any-columns-that-are-empty###"
---
I recently posted two other [DataTables](http://datatables.net) plugins I created, one for [keeping the table conditions in the URL](/articles/datatables-keep-conditions-plugin-link-to-the-exact-settings-within-the-current-table.html), and another for [keeping AJAX sourced tables up-to-date](/articles/datatables-live-ajax-plugin-keep-your-ajax-sourced-tables-up-to-date.html). Well, I created another one!

One project I'm working on has a lot of dynamic tables, which can have any number of columns. Since the number of columns doesn't have a limit, I wanted to automatically hide any columns that aren't populated with any data. Once the columns are hidden (which is on the table initiation), the columns can easily be set back to visible by either the _column().visible()_ API method, or the [Column Visibility](http://datatables.net/reference/button/colvis) button.

### [GIT Repo](https://github.com/jhyland87/DataTables-Hide-Empty-Columns) - Live Demos

___

## Configuration
If you just set the hideEmptyCols_ (or _hideEmptyColumns_) setting to _true_, then _all_ columns will be targeted and processed, thus hiding any empty column. However, you do have the option to garget specific columns, with either the column name, or the column index. You can also have this targeted array set to be processed, making it a _white-list_ (default), or you can set it to be ignored, making it a _black-list_.

Here are the existing parameters
|Parameter|Type|Default|Description|
|--- |--- |--- |--- |
|hideEmptyCols|boolean/object|true|Enable/Disable hideEmptyCols plugin (_hideEmptyColumns_ works as well)|
|hideEmptyCols.columns|array|_All Columns_|Determine which columns to target, can either use the [column name](http://datatables.net/reference/option/columns.name), the [index](http://datatables.net/reference/api/column().index()), or a negative integer to target columns starting from the right side of the table|
|hideEmptyCols.whiteList|boolean|true|Determine if the targets listed in _hideEmptyCols.columns_ should be treated as a whitelist or blacklist (_false_ will target all columns except those listed)|

___

## Examples

**Basic Initialization** - Hide any columns with no values (Since no button was used, the columns would need to be toggled via an API call)

```javascript
$('#example-1').DataTable({
    hideEmptyCols: true
});
```

**Basic w/ ColVis Button** - Target **all** columns & use DataTables [ColumnsToggle](https://datatables.net/reference/button/columnsToggle) button

```javascript
$('#example-1').DataTable({
    dom: 'Bt',
    buttons: [ 'columnsToggle' ],
    hideEmptyCols: true
});
```

**Targeting Columns via [indexes](http://datatables.net/reference/api/column().index()) or the position** - This would target the column indexes _0_ and _3_, as well as the column on the far right side of the table

```javascript
$('#example-1').DataTable({
    hideEmptyCols: [ 0, 3, -1 ]
});
```

**Targeting Columns (Names)** - Target columns via name (Useful for when using JSON or AJAX data src with Objects)

```javascript
$('#example-1').DataTable( {
    hideEmptyCols: ['extn', 5], // Target extension col, and 5th col (salary)
    data: dataSet,
    columns: [
        { title: &quot;Name&quot;, data: &quot;name&quot; },
        { title: &quot;Position&quot;, data: &quot;position&quot; },
        { title: &quot;Office&quot;, data: &quot;office&quot; },
        { title: &quot;Extn.&quot;, data: &quot;extn&quot; },
        { title: &quot;Start date&quot;,  data: &quot;start_date&quot; },
        { title: &quot;Salary&quot;,  data: &quot;salary&quot; }
    ]
} );
```


**Blacklisting Columns** - Target _all_ columns except column indexes <strong>1</strong> and <strong>3</strong></p>

```javascript
$('#example-1').DataTable({
    hideEmptyCols: {
        columns: [1,3],
        whiteList: false
    }
});
```

___
## The End
Well, thats it! If you find any bugs or issues, just create an issue in the Git repo, same for feature requests. I dont always see comments on these blog posts
