// 重构前
// 示例一：
function getRating(driver) {
  return moreThanFiveLateDeliveries(driver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(driver) {
  return driver.numberOfLateDeliveries > 5;
}

// 示例二：过度的提炼函数
function reportLines(aCustomer) {
  const lines = [];
  gatherCusomerData(lines, aCustomer);
  return lines;
}

function gatherCusomerData(out, aCustomer) {
  out.push(['name', aCustomer.name]);
  out.push(['location', aCustomer.location]);
}

/********************************** 分割线 ***********************************/

// 重构后
// 示例一：
function getRating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

// 示例二：
function reportLines(aCustomer) {
  const lines = [];
  lines.push(['name', aCustomer.name]);
  lines.push(['location', aCustomer.location]);
  return lines;
}
