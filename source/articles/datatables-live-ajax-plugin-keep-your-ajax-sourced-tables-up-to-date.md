---
title: "DataTables Live Ajax Plugin - Keep your AJAX sourced tables up to date"
layout: "articles/article-page.pug"
summary: "DataTables Live Ajax Plugin - Keep your AJAX sourced tables up to date"
featured_image: "assets/articles/datatables-live-ajax-plugin.png"
create_date: "11-17-2015"
author:
  firstname: "Justin"
  lastname: "Hyland"
  format: "firstname lastname (username)"
  username: "jhyland87"
tags: [ "DataTables", "javascript", "jQuery", "plugins" ]
share:
  title: "DataTables Live Ajax Plugin - Keep your AJAX sourced tables up to date"
  summary: "DataTables Live Ajax Plugin - Keep your AJAX sourced tables up to date"
  href: "###datatables-live-ajax-plugin-keep-your-ajax-sourced-tables-up-to-date###"
---
I'm a big fan of the Open Source jQuery plugin [DataTables](http://datatables.net/). Out of all the jQuery plugins I have used, I feel comfortable saying it's one of the most stable and powerful.  For those of you who don't know what DataTables is...

DataTables is a plug-in for the [jQuery](http://jquery.com/) Javascript library. It is a highly flexible tool, based upon the foundations of progressive enhancement, and will add advanced interaction controls to any HTML table.

Pretty basic, but very powerful and easy to use. It also comes with an extremely diverse and powerful API, that let's you control almost every aspect of the table, as well as write your own plugins, which is what I have been getting into lately.

DataTables allows you to pull the source of the tables from the [DOM](http://datatables.net/manual/data#DOM), from a [JSON](http://datatables.net/manual/data#Javascript) data structure, or an [AJAX](http://datatables.net/manual/data#Ajax) Source. This plugin takes advantage of the AJAX sourced data tables.

I hang out in the [DataTables forums](http://datatables.net/forums/) every so often, and I saw a couple requests from people who wanted a way to update just the rows that need updating in the table, and while there is a useful API method, _[ajax.reload()](http://datatables.net/reference/api/ajax.reload())_, that method will reload the entire table, which may be a little overboard if you have thousands of rows and only a single row needs to be added/updated/removed.

I went ahead and created a new plugin to handle this, [DataTables Live Ajax](https://github.com/jhyland87/DataTables-Live-Ajax/).

To use it, just checkout the git repository, include the JS file called _dataTables.liveAjax.js_, then when you initialize your DataTables instance, configure the setting called _liveAjax_.

### [GIT Repo](https://github.com/jhyland87/DataTables-Live-Ajax/)

___

## How It Works
The concept is pretty basic really. Every _n_ milliseconds (default is _5000_, which is 5 seconds), there will be a new AJAX request to the data source that was configured in the DataTables instance. The new data will be compared to the current data, and the changes will be made accordingly.

Ideally, it would be better to use [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API), as opposed to iterating over AJAX calls, which is much more "expensive" in terms of resources, but that may not always be optional. I went with the AJAX calls initially because it was quicker than having to setup a WebSocket server, but without a doubt, the WebSockets would be the way to go, and I will be switching over to a WebSocket server in the next revamp (soon!).

One thing you need to realize though, is that the plugin needs to have a way to compare each row to it's exact counterpart within the new JSON data. If the AJAX source contains [arrays for the row data](http://datatables.net/examples/ajax/simple.html), then that isn't possible. So what is recommended, is to use [objects for the row data](http://datatables.net/examples/ajax/objects.html), and set the unique row identifier via the _[rowId](http://datatables.net/reference/option/rowId)_ setting, or you can use the default one, which is _DT_RowId_.  If you don't set a row ID for your data, then theres no way for the plugin to know what rows need updating, thus the _entire_ table is reloaded if _any_ discrepancies are found in the new data source.. Which is basically the same thing as the _ajax.reload()_ API method.

If you are already familiar with DataTables, and using an AJAX source for your table, then you probably know what I'm talking about.
___

## Examples
_Basic Example_ - This will check for any changes in 5 second intervals, and update the data accordingly.

```javascript
$('#example').DataTable({
    ajax: 'dataSrc.php',
    rowId: 'emp_id',
    liveAjax: true
});
```

Advanced Example - This ones a bit more complicated. Just to show you how you can take advantage of some of the existing options for the plugin.


```javascript
$('#example').DataTable({
    ajax: {
        url: 'dataSrc.php',
        type: 'POST',
        data: { dataSrc: 'something'},
        dataSrc: 'something'
    },
    rowId: 'emp_id',
    liveAjax: {
        // Update every 4.5 seconds
        interval: 4500,
        // Enable DT XHR Callbacks for all AJAX requests
        dtCallbacks: true,
        // Abort the XHR Polling if one of these errors were encountered
        abortOn: ['error', 'timeout', 'parsererror', 'abort']
    }
});
```

___

## Initialization Options
While I was making this, I added an option for almost everything I could think of. This plugin was just created, so while I am sure I may be making some updates, I will try to keep the options the same throughout all the versions, but heres a list of the existing options:
|Parameter|Type|Default|Description|
|--- |--- |--- |--- |
|liveAjax|boolean|true|Enable/Disable liveAjax plugin|
|liveAjax.interval|number|5000|Interval to check for updates (in milliseconds)|
|liveAjax.dtCallbacks|boolean|false|This will determine if the DataTables xhr callbacks should be executed for _every_ AJAX Request|
|liveAjax.abortOn|array|error, timeout, parsererror|Cease all future AJAX calls if one of these statuses were encountered|
|liveAjax.noUpdate|function|_N/A_|Callback executed when _no_ discrepancies were found in the new JSON data; (Parameters: _[object]_ DataTables Settings, _[object]_ JSON Data for table; _[object]_ XHR Object)|
|liveAjax.onUpdate|function|_N/A_|Callback executed when discrepancies were found in the new JSON data, and the table was updated; (Parameters: _[object]_ DataTables Settings, _[object]_ Updated/Deleted/Created row data, _[object]_ New JSON Data for table; _[object]_ XHR Object)|

___

## LiveAjax Events
The LiveAjax plugin fires off it's own events. Just as all the DataTables events are named **\_eventName\_.dt**, the LiveAjax events are named **\_eventName\_.liveAjax**. Heres the current list of events:

|Event|Description|Parameters|
|--- |--- |--- |
|init.liveAjax|Triggered when liveAjax was initiated on a new table|_[object]_ Event, _[object]_ DataTables Settings, _[object]_ XHR Object|
|xhrErr.liveAjax|Triggered for all XHR Errors|_[object]_ Event, _[object]_ DataTables Settings, _[object]_ XHR Object, _[string]_ Error Thrown|
|xhrErrTimeout.liveAjax|Triggered when an XHR _timeout_ was encountered|_[object]_ Event, _[object]_ DataTables Settings, _[object]_ XHR Object, _[string]_ Error Thrown|
|xhrErrError.liveAjax|Triggered when an XHR _error_ was encountered|_[object]_ Event, _[object]_ DataTables Settings, _[object]_ XHR Object, _[string]_ Error Thrown|
|xhrErrParseerror.liveAjax|Triggered when an XHR _parsererror_ was encountered|_[object]_ Event, _[object]_ DataTables Settings, _[object]_ XHR Object, _[string]_ Error Thrown|
|xhrErrAbort.liveAjax|Triggered when an xhr _abort_ was encountered|_[object]_ Event, _[object]_ DataTables Settings, _[object]_ XHR Object, _[string]_ Error Thrown|
|xhrErrUnknown.liveAjax|Triggered when an unknown XHR error was encountered|_[object]_ Event, _[object]_ DataTables Settings, _[object]_ XHR Object, _[string]_ Error Thrown|
|xhrSkipped.liveAjax|Triggered when an XHR call was skipped|_[object]_ Event, _[object]_ DataTables Settings, _[string]_ Reason for skip (_paused_ or _processing_)|
|setInterval.liveAjax|Triggered when the polling interval was changed|_[object]_ Event, _[object]_ DataTables Settings, _[number]_ New interval|
|clearTimeout.liveAjax|Triggered when the loop timeout has been cleared|_[object]_ Event, _[object]_ DataTables Settings, _[object]_ XHR Object|
|abortXhr.liveAjax|Triggered when an XHR request is aborted|_[object]_ Event, _[object]_ DataTables Settings, _[object]_ XHR Object|
|setPause.liveAjax|Triggered when the polling was paused or unpaused|_[object]_ Event, _[object]_ DataTables Settings, _[boolean]_ Pause Status|
|onUpdate.liveAjax|Triggered when the new JSON changes were implemented|_[object]_ Event, _[object]_ DataTables Settings, _[object]_ Created/Deleted/Updated row data, _[object]_ DataTable JSON data, _[object]_ XHR Object|
|noUpdate.liveAjax|Triggered when the the table did not need updating|_[object]_ Event, _[object]_ DataTables Settings, _[object]_ DataTable JSON, _[object]_ XHR Object|

___

## LiveAjax API Methods
In addition to the already awesome DataTables API, LiveAjax comes with it's own set of API calls. I added an API method for just about anything I could think of:

|Method|Description|Return|Parameters|
|--- |--- |--- |--- |
|iveAjax.initiate()|Start XHR Polling|_[object]_ DataTables API|_None_|
|iveAjax.abortXhr()|Abort Current XHR request|_[object]_ DataTables API|_None_|
|liveAjax.clearTimeout()|Clear the polling loop|_[object]_ DataTables API|_[boolean]_ Abort current XHR request|
|liveAjax.xhrStatus()|Retrieve latest XHR Status|_[object]_ DataTables API, _[string]_ XHR Text status|_None_|
|liveAjax.resume()|Resume Updates|_[object]_ DataTables API|_None_|
|liveAjax.togglePause()|Toggle Pause Status|_[object]_ DataTables API|_None_|
|liveAjax.pause()|Pause XHR Polling|_[object]_ DataTables API|_None_|
|liveAjax.isPaused()|Pause XHR Polling|_[object]_ DataTables API, _[boolean]_ Pause Status|_None_|
|liveAjax.reload()|Reload table|DataTables API Object|_[function]_ Callback, _[boolean]_ Reset pagination (default _false_), _[boolean]_ Force through paused status|
|liveAjax.setInterval()|Change update interval|DataTables API Object|_[integer]_ New interval (use _null_ to reset to default or config value)|

___
Thats it! If you have any issues, I urge you to go to the [issues](https://github.com/jhyland87/DataTables-Live-Ajax/issues) section of the [LiveAjax GIT Repo](https://github.com/jhyland87/DataTables-Live-Ajax) and submit any questions there.
