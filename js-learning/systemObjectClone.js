function clone(obj) {
  var o;
  switch (typeof obj) {
    case "undefined" : 
      break;
    case "string":
      o = obj + "";
        break;
    case "number":
      o = obj - 0;
        break;
    case "boolean":
      o = obj;
        break;
    case "object" : //two situation, Object or array
      if (obj === null) {
       o = null;
      }else {
      if(Object.prototype.toSring.call(obj).slice(8, -1) === "Array") {
      o = [];
      for(var i = 0; i <obj.length; i++){
        o.push(clone(obj[i]));
      
      }else{
        o = {};
        for (var k in obj) {
          o[k] = clone(obj[k]);
        }
      }
      }
      break;
      default:
      o = obj;
  }
  return 0;
}
