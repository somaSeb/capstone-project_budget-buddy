import Transaction from "@/db/models/Transaction";
/* const connectToDatabase = require("../../../utils/mongodb"); */
import { connectToDatabase } from "@/utils/database";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  await connectToDatabase();

  switch (req.method) {
    case "GET":
      try {
        const session = await getSession({ req });
        if (!session) {
          return res.status(401).json({ message: "Unauthorized" });
        }

        const userId = req.body.userId; // Access userId from req.body
        const transactions = await Transaction.find({ userId });
        console.log(userId);

        res.status(200).json(transactions);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
      break;
    case "POST":
      try {
        const session = await getSession({ req });
        if (!session) {
          return res.status(401).json({ message: "Unauthorized" });
        }
        const transaction = new Transaction({
          ...req.body,
          userId: session.user.id,
        });
        const savedTransaction = await transaction.save();
        res.status(201).json(savedTransaction);
      } catch (error) {
        console.error("Error saving transaction:", error);
        res
          .status(500)
          .json({ message: "Failed to add transaction", error: error.message });
      }
      break;
    case "PUT":
      const { id, ...updateData } = req.body;
      await collection.updateOne({ id }, { $set: updateData });
      res.status(200).json({ message: "Transaction updated" });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
