export const fetchTransactions = async () => {
  try {
    const session = await getSession();
    const userId = session?.user?.id;

    // Send the userId as part of the request body or query
    const response = await fetch(`/api/transactions`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
