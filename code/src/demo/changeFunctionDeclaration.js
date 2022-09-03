// 函数改名（简单做法）
// 重构前
function circum(radius) {
  return 2 * Math.PI * radius;
}

// 重构后
function circumference(radius) {
  return 2 * Math.PI * radius;
}

// 函数改名（迁移式做法）
// 重构前
function circum(radius) {
  return 2 * Math.PI * radius;
}
// 重构后
function circum(radius) {
  return circumference(radius);
}

function circumference(radius) {
  return 2 * Math.PI * radius;
}

// 添加参数
// 比如需要添加一个参数，用于标记。
// 重构前
function addReservation(customer) {
  this._reservations.push(customer);
}

// 重构后
function addReservation(customer) {
  this._reservations.push(customer, false);
}

function zz_addReservation(customer, isPriority) {
  assert(isPriority === true || isPriority === false);
  this._reservations.push(customer);
}

// 把参数改为属性
// 重构前
// 判断顾客是不是来自中国的地区
function inNewChina(aCustomer) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state);
}

// 调用方
const newChina = someCustomer.filter((c) => inNewChina(c));

// 重构后
function inNewChina(aCustomer) {
  const stateCode = aCustomer.address.state;
  return xxNewChina(stateCode);
}

function xxNewChina(stateCode) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode);
}

// 调用方
const newChina = someCustomer.filter((c) => inNewChina(c.address.state));

// 或者

const newChina = someCustomer.filter((c) => xxNewChina(c.address.state));
// 当旧函数完全替换为新函数时，把函数名再改回旧名字
