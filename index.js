// findMatching function
function findMatching(drivers, query) {
  return drivers.filter(driver =>
    driver.toLowerCase() === query.toLowerCase()
  );
}

// fuzzyMatch function
function fuzzyMatch(drivers, query) {
  return drivers.filter(driver =>
    driver.toLowerCase().startsWith(query.toLowerCase())
  );
}

// matchName function
function matchName(driverObjects, query) {
  return driverObjects.filter(driver =>
    driver.name.toLowerCase() === query.toLowerCase()
  );
}
