Read commited

Using different connections to the database (c1 and c2):
c1: Begin a transaction
c1: Execute an UPDATE query that updates the total price of the order with id = 1 to $150 but do not commit the transaction
c2: Begin a transaction with isolation level READ COMMITTED
c2: Execute an UPDATE query that updates the total price of the order with id = 1 to $100
c1: Commit the transaction
What's happened to c2? Is it finished? Why?

c2 transaction was locked until the c1 transaction is committed.
