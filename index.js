// Code your solution in this file

function findMatching (list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (list, partialName) {
  let lengthOfName = partialName.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
}


function matchName(drivers, string) {
  drivers.filter()
}


[1, 2, 3, 4, 5].filter(function (num) { return num > 3; });
