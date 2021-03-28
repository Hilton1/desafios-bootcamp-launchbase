const user = {
    name: "Hilton",
    transactions: [],
    balance: 0
  }
  
  // Adicionar Transações
  
  function createTransaction (transaction) {
    user.transactions.push(transaction)
  
    if (transaction.type == 'credit') {
      user.balance += transaction.value
    } else {
      user.balance -= transaction.value
    }
  }
  
  // =========== Relatórios =========== //
  
  // Retorna a maior transação do tipo escolhido (debit/credit)
  
  function getHigherTransactionByType (transactionType) {
    let higherTransaction = 0
    let highestValue = 0
  
    for (let transaction of user.transactions) {
      if (transaction.type === transactionType && transaction.value > highestValue ) {
        higherTransaction = transaction
        highestValue = transaction.value
      }
    }
  
    return higherTransaction
  }
  
  
  // Retorna o valor médio de todas as transações
  
  function getAverageTransactionValue() {
    let sumTransactions = 0
  
    for (let transaction of user.transactions) {
      sumTransactions += transaction.value
    }
  
    return sumTransactions / user.transactions.length 
  }
  
  // Retorna o número de transações de cada tipo (debit/credit)
  
  function getTransactionsCount() {
    const numberOfTransactionsOfEachType = {credit: 0, debit: 0}
  
    for (let transaction in user.transactions) {
      if (user.transactions[transaction].type == "credit") {
        numberOfTransactionsOfEachType.credit += 1
      } else {
        numberOfTransactionsOfEachType.debit += 1
      }
    }
  
    return numberOfTransactionsOfEachType
  }
  
  createTransaction({ type: "credit", value: 50 });
  createTransaction({ type: "credit", value: 120 });
  createTransaction({ type: "debit", value: 80 });
  createTransaction({ type: "debit", value: 30 });
  
  console.log(user.balance); // 60
  
  console.log(getHigherTransactionByType("credit")); // { type: 'credit', value: 120 }
  console.log(getHigherTransactionByType("debit")); // { type: 'debit', value: 80 }
  
  console.log(getAverageTransactionValue()); // 70
  
  console.log(getTransactionsCount()); // { credit: 2, debit: 2 }