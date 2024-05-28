import clientPromise from "./mongodb";

export async function connectToDatabase() {
  const client = await clientPromise;
  return client.db("budgetbuddy");
}
