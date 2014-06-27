var uid = function (map) {
  var counter = 0;

  var next = function () {
    var current = map ? map(counter) : counter;
    counter++;
    return current;
  };
  
  return next;
};

module.exports = uid;
