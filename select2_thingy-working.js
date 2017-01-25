console.clear()
var articleFilters = {
  title: {
    testVal: 'Test A',
    aliases: ['titles']
  },
  category: {
    testVal: 'Test B',
    aliases: ['categories']
  },
  tag: {
    testVal: 'Test C',
    aliases: ['tags']
  },
  created: {
    testVal: 'Test D',
    aliases: ['createdOn', 'dateCreated']
  },
  createdafter: {
    testVal: 'Test F',
    aliases: ['afterdate']
  },
  createdbefore: {
    testVal: 'Test G',
    aliases: ['beforedate']
  },
  updated: {
    testVal: 'Test H',
    aliases: [
      'updatedon', 'dateupdated', 'modified', 'modifiedon', 'datemodified'
    ]
  },
  updatedafter: {
    testVal: 'Test I',
    aliases: ['modifiedafter']
  },
  updatedbefore: {
    testVal: 'Test J',
    aliases: ['modifiedbefore']
  }
}

var conformStr = function(fName) {
  if (!_.isString(fName) || fName.trim().length === 0)
    return 

  return fName.trim().toLowerCase()
}

var filters = _.transform(articleFilters, function( filterCollection, filterObj, filterName ) {
  console.debug('Initial filterCollection:',filterCollection)
  console.debug('Filter "%s"\n\tFilter Obj: %s\n\tFilter Collection: %s', filterName, JSON.stringify(filterObj), JSON.stringify(filterCollection))
  var _filterName = conformStr(filterName)

  if (!_filterName) {
    console.debug('conformFilterName failed to convert the filter name: %s (Originally: %s)', _filterName, filterName)
    return
  }

  //var _filterObj = filterObj
  var _filterObj = _.omit( filterObj, ['alias','aliases'] )
  
  //if ( _filterObj.)

  //= _.omit( fObj, 'aliases' )
  //console.debug('filterData:',filterData, 'value:',value, 'key:',key)

  var _aliases = filterObj.aliases || filterObj.alias || null

  //_filterObj = _.omit(filterObj, ['aliases', 'alias'])
    /*
  if ( _.has( filterObj, 'aliases' ) ){
    _aliases = filterObj.aliases
    _filterObj = _.omit( filterObj, 'aliases' )
  }
  else if ( _.has( filterObj, 'alias' ) ){
    _aliases = filterObj.alias
    _filterObj = _.omit( filterObj, 'alias' )
   }
  */
  
  
  //var _aliases = _.chain(aliases).toArray().map(_.trim).map( _.toLower ).value()
  
  if (!_.isEmpty(_aliases)) {
    _filterObj.aliases = []
    
    // Convert the _aliases to an array
    _aliases = _.chain( _aliases )
      .thru(function( val ){
        return _.isArray( val ) 
          ? val 
          : [ val ]
      })
      .flattenDeep()
      .filter( _.isString )
      .map( _.trim )
      .uniqBy( _.toLower )
      .value()
     
    //_aliases = _.thru( _aliases, function( _a ) { return _.isArray( _a ) ? _a : [ _a ] })
    
    //_aliases = _.toArray(_aliases)
    console.debug('Aliases for %s:', _filterName, _aliases)

    _.forEach(_aliases, function(alias) {
      console.debug('Processing alias "%s" for the filter "%s"', alias, _filterName)
      
      _alias = conformStr(alias)
        //console.log('_alias',_alias)
      if (!_.has(filterCollection, _alias)) {
        console.debug( 'Adding the filter "%s", copying the data from filter "%s" - data:', _alias, _filterName, _filterObj)
        filterCollection[_alias] = _.cloneDeepWith( _filterObj, function( fObj ){
          return _.omit( fObj, ['alias','aliases'] )
        })
        filterCollection[_alias].aliasOf = _filterName
        filterCollection[_alias].originalName = alias
      }
      
      _filterObj.aliases.push( _alias )
    })
  }
  _filterObj.origFilterName = filterName
  /*
  if ( _.has( fObj, 'aliases' ) ){
    _.forEach( fObj.aliases, function( alias ){
      _alias = alias.toLowerCase()
      //console.log('_alias',_alias)
      if ( ! _.has( result , _alias ) ){
        filterData[ _alias ] = _fObj
        filterData[ _alias ].aliasOf = _alias
      }
    })
  }
  */
  console.debug('Adding the filter "%s" with the object:', _filterName, _filterObj)
  filterCollection[_filterName] = _filterObj
}, {})

console.log('filters', filters)
