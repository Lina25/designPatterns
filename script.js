var templateString = 'Hello, {{city}} {{age}}! #{{name}}';

var user1 = {id:1, name:'john', age:123, city:'kyiv'};
var user2 = {id:2, name:'alex', age:55, city:'lviv'};

var compile = function (template) {
  return function (obj) {
    var reg = new RegExp("{{([^}}]+)?}}", 'g'),
       result = template,
       matches = [],
       match;
    while (match = reg.exec(template)) {
      matches.push(match);
    }
    for (var i = 0; i < matches.length; i++) {
      var data = obj.hasOwnProperty(matches[i][1]) ? obj[matches[i][1]] : "";
      result = result.replace(matches[i][0], data);
    }
    return result;
  };
}
var template = compile(templateString);
console.log(template(user1)); // => Hello, john!
console.log(template(user2)); // => Hello, alex!
document.getElementById("user1").innerHTML = template(user1);
document.getElementById("user2").innerHTML = template(user2);