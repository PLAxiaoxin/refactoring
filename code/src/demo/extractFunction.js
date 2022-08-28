const Clock = {
  today: Date.now();
};

function printOwing(invoice){
  printBanner();

  // clalculate outstanding 
  const outstanding = calculateOutstanding(invoice);

  //  record due date
  recordDueDate(invoice);

  // print details 
  printDetails(invoice, outstanding);
}

// 范例：无局部变量
// 提炼 "打印横幅"
function printBanner(){
  console.log("****");
  console.log("*** Customer Owes ***");
  console.log("*****");
}

// 范例:有局部变量 
// 提炼 "打印详情信息"
function printDetails(invoice, outstanding){
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateSting()}`);
}

function recordDueDate(invoice){
  const today = Clock.today;
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}


// 范例：对局部变量再赋值
function calculateOutstanding(invoice){
  let result = 0;
  for( const o of invoice.orders) {
    result += o.amount;
  }

  return result;
}