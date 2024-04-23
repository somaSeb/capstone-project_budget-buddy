import Transaction from "../../../db/models/Transaction";
const connectToDatabase = require("../../../utils/mongodb");
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  await connectToDatabase();
  const {
    query: { id },
  } = req;

  if (req.method === "DELETE") {
    try {
      const session = await getSession({ req });
      if (!session) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const deleteResult = await Transaction.findOneAndDelete({
        _id: id,
        userId: session.user.id,
      });
      if (!deleteResult) {
        return res.status(404).json({ message: "Transaction not found" });
      }
      return res.status(200).json({ message: "Transaction deleted" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else {
    res.setHeader("Allow", ["DELETE"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
