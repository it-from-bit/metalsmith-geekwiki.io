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


var filters = _.transform(articleFilters, function( filterCollection, filterObj, filterName ) {
  var _cfg = {
    nouns: {
      alias: [ 'alias', 'aliases' ]
    }
  }

  console.debug('Initial filterCollection:',filterCollection)
  //var _aliasNouns = [ 'alias', 'aliases' ]

  var _conformStr = function( fName ) {
    if ( ! _.isString( fName ) || fName.trim().length === 0 )
      return 

    return fName.trim().toLowerCase()
  }


  console.debug('Filter "%s"\n\tFilter Obj: %s\n\tFilter Collection: %s', filterName, JSON.stringify(filterObj), JSON.stringify(filterCollection))

  var _filterName = _conformStr( filterName )

  if ( ! _filterName ) {
    console.debug('conformFilterName failed to convert the filter name: %s (Originally: %s)', _filterName, filterName)
    return
  }

  //var _filterObj = filterObj
  var _filterObj = _.omit( filterObj, _cfg.nouns.alias )
  
  //if ( _filterObj.)

  //= _.omit( fObj, 'aliases' )
  //console.debug('filterData:',filterData, 'value:',value, 'key:',key)

  var _aliases = _.chain( filterObj )
    .pickBy( function( v, k ){ 
      return _.indexOf( _cfg.nouns.alias, _.toLower( k ) ) !== -1
    })
    .values()
    .flattenDeep()
    .value()

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
  
  // If there were aliases
  if ( ! _.isEmpty( _aliases ) ) {
    _filterObj.aliases = []
    
    // Convert the _aliases to an array
    _aliases = _.chain( _aliases )
      //.thru(function( val ){ return _.isArray( val ) ? val : [ val ] })
      .thru( _.castArray )
      .flattenDeep()
      .filter( _.isString )
      .map( _.trim )
      .uniqBy( _.toLower )
      .value()

    //console.debug('filterCollection:',filterCollection)
    //_aliases = _.thru( _aliases, function( _a ) { return _.isArray( _a ) ? _a : [ _a ] })
    
    //_aliases = _.toArray(_aliases)
    //console.debug('Aliases for %s:', _filterName, _aliases)

    _.forEach( _aliases, function( alias ) {

      //console.debug('Processing alias "%s" for the filter "%s"', alias, _filterName)
      
      _alias = _conformStr( alias )

      if ( _alias === _filterName ) {
        console.debug( 'The alias "%s" is the same as the filter name "%s" - skipping', _alias, _filterName )
        return
      }

      if ( _.has(filterCollection, _alias ) ){
        /**
         * @todo  1) add a way to specify how duplicate aliases/filter names should be handled 
         *        2) Ignore an alias if its the same as the filter name
         *        3) Check for an infinante loop (EG: Filter A has an alias to filter B, which has an alias to filter A)
         */
        var errDetails

        if ( _.isString( filterCollection[ _alias ].aliasOf ) && filterCollection[ _alias ].aliasOf.length > 0 ){
          errDetails = 'it is already an alias of "'+filterCollection[ _alias ].aliasOf+'"'
        }
        else {
          errDetails = 'it already exists as another filter'
        }

        console.error( 'Unable to add the alias "%s" to the filter "%s" - %s', _alias, _filterName, errDetails )

        return
        //throw new Error( 'Duplicate filter/alias: "'+_alias +'"' )
      }

      //var _thisAlias = filterCollection[ _alias ]
      //console.debug('_alias:',_alias,'_thisAlias:',_thisAlias)
        //console.log('_alias',_alias)

      //if ( ! _.has( filterCollection, _alias ) ) {
        console.debug( 'Adding the filter "%s", copying the data from filter "%s" - data:', _alias, _filterName, _filterObj)

        filterCollection[ _alias ] = _.cloneDeepWith( _filterObj, function( fObj ){
          return _.omit( fObj, _cfg.nouns.alias )
        })

        filterCollection[ _alias ].aliasOf = _filterName
        filterCollection[ _alias ].originalName = alias
      //}
      
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
  filterCollection[ _filterName ] = _filterObj
}, {})

console.log('filters', filters)
