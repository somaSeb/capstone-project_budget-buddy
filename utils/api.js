export async function fetchTransactions(userId) {
  if (!userId) {
    throw new Error("userId is required");
  }

  const res = await fetch(`/api/transactions?userId=${userId}`);
  const transactions = await res.json();
  return transactions;
}
