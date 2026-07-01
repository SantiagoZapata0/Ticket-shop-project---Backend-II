import { Common } from "../dao/common.dao.js";
import { eventModel } from "../models/event.model.js";

export async function getAll(req, res) {
  try {
    const events = await Common.getAll(eventModel);
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}