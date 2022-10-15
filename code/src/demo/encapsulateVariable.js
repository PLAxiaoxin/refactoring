// 重构前
let defaultOwer = { firstName: 'Martin', lastName: 'Fowler' };

// 重构后
let defaultOwer = { firstName: 'Martin', lastName: 'Fowler' };

export function getDefaultOwer() {
  return Object.assign({}, defaultOwer);
}
export function setDefaultOwer(arg) {
  defaultOwer = arg;
}
