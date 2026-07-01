import { getEventById, createEvent, getAllEvents } from "../services/event.service.js";

export async function getOneEvent(req, res, next){
  try{
    const event = await getEventById(req.params.id)
    res.status(200).json({status: "Success", payload: event})
  } catch(err){
    res.status(err.status || 500).json({status: "Failed", payload: err.message})
  }
}

export async function createNewEvent(req, res, next){
  try{
    const newEvent = await createEvent(req.body);
    res.status(201).json({status: "Success", payload: newEvent})
  } catch(err){
    res.status(err.status || 500).json({status: "Failed", payload: err.message})
  }
}

export async function getEvents(req, res, next){
  try{
    const events = await getAllEvents()
    res.status(200).json({status: "Success", payload: events})
  } catch(err){
    res.status(err.status || 500).json({status: "Failed", payload: err.message})
  }
}
  