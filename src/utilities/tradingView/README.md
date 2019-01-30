# Trading View: Socket Integration

Integrating our own data with the trading view chart requires a set of functions. These functions are provided as an Object to the _datafeed_ property of the _widget configuration_. We can override any of the functions with ours.

# List of functions required

<details>
  <summary>onReady</summary>
  <p>Executed when the TV Chart is ready</p>
  
  __cb__ : Callback() to be executed when the chart is ready  
  __config__ : Configuration for the callback()  
</details>
<details>
  <summary>searchSymbols</summary>
  <p>To search for a symbol</p>

  __userInput__ :    
  __exchange__ :   
  __symbolType__ :   
  __onResultReadyCallback__ : Callback() to be executed when the search result is ready 
</details>
<details>
  <summary>resolveSymbol</summary>
  <p>When the chart is first loaded it will call the resolveSymbol method</p>
  
  __symbolName__ : default pair of symbols 
  * _name_ : name pair of the symbol
  * _description_ : description
  * _type_ : type of trade e.g ```'crypto'```
  * _session_ : session of the trade e.g ```'24x7'``
  * _timezone_ : timezone of the trade
  * _ticker_ : same as _name_
  * _exchange_ :  
  * _minmov_ :
  * _pricescale_
  * *has_intraday*
  * *intraday_multipliers* : multiplier for the intraday bonus shares
  * *supported_resolution* : 
  * *volume_precision*
  * *data_status* :  
  __onSymbolResolvedCallback__ : Callback() to be executed when symbol object is populated  
  __onResolveErrorCallback__ : Callback() to be executed when an err occurs during resolving the symbol.  
</details>

<details>
  <summary>getBars</summary>
  <p>Comments to be added</p>

  __symbolInfo__ :   
  __resolution__ :  
  __from__ :  
  __to__ :  
  __onHistoryCallback__ :  
  __onErrorCallback__ :  
  __firstDataRequest__ :  
</details>

<details>
  <summary>subscribeBars</summary>
  <p>Comments to be added</p>
  
  __symbolInfo__ :   
  __resolution__ :  
  __onRealtimeCallback__ :  
  __subscribeUID__ :  
  __onResetCacheNeededCallback__ :  
</details>

<details>
  <summary>unsubscribeBars</summary>
  <p>Comments to be added</p>
  
  __subscriberUID__ :   
</details>

<details>
  <summary>calculateHistoryDepth</summary>
  <p>Comments to be added</p>
  
  __resolution__ :   
  __resolutionBack__ :  
  __intervalBack__ :  
</details>

<details>
  <summary>getMarks</summary>
  <p>Comments to be added</p>
  
  __symbolInfo__ :   
  __startDate__ :  
  __endDate__ :  
  __onDataCallback__ :  
  __resolution__ :  
</details>

<details>
  <summary>getTimeScaleMarks</summary>
  <p>Comments to be added</p>
  
  __symbolInfo__ :   
  __startDate__ :  
  __endDate__ :  
  __onDataCallback__ :  
  __resolution__ :  
</details>

<details>
  <summary>getServerTime</summary>
  <p>Comments to be added</p>
  
  __cb__ :   
</details>



