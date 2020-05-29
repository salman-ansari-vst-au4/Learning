this.onmessage = function (e) {
  if (e.data.addThis !== undefined) {
    this.postMessage({ result: e.data.addThis.num1 + e.data.addThis.num2 });
  }
}

/*
  * No Access To:
    window object
    document object
    parent object
  
  * Access To:
    Navigator object(useragent, geolocation, cookeyenabled)
    location object-read only (host, hostname, href, pathname...etc)
    XMLHTTPRequest
    Application Cache
    Set/Interval

*/