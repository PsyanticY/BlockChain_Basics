class TransactionPool {
  constructor() {
    this.transactions = [];
  }

  updateOrAddTransaction(transaction) {
    // look for all transaction in th epool and find the one with the same id as the one in the argument
    let transactionWithId = this.transactions.find(t => t.id === transaction.id);

    if (transactionWithId) {
      this.transactions[this.transactions.indexOf(transactionWithId)] = transaction;
    } else {
      this.transactions.push(transaction);
    }
  }

  existingTransaction(address) {
    return this.transactions.find(t => t.input.address === address);
  }
}

module.exports = TransactionPool;
