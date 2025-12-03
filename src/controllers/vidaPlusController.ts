import type { Request, Response } from "express";
import *  as vidaPlusService from "../services/vidaPlusService"


/*  -------------------------- Criação -------------------------- */

export async function createUnit(req: Request, res: Response) {
   const data = req.body

   const unit = await vidaPlusService.createUnit(data);
   return res.status(201).json(unit)
}


export async function createUser(req: Request, res: Response) {
   const data = req.body;


   const user = await vidaPlusService.createUser(data);
   return res.status(201).json(user);
}

export async function createDoctor(req: Request, res: Response) {
   const data = req.body;


   const doctor = await vidaPlusService.createDoctor(data);
   return res.status(201).json(doctor);
}


export async function createConsultation(req:Request, res: Response) {
   const data = req.body;

   const consultation = await vidaPlusService.createConsultation(data);
   return res.status(201).json(consultation);
}

export async function createMedicalRecord(req:Request, res: Response) {
   const data = req.body;

   const medicalRecord = await vidaPlusService.createMedicalRecord(data);
   return res.status(201).json(medicalRecord);
}



/*  -------------------------- Listagem -------------------------- */

export async function getAllUser(req: Request, res: Response) {
   const user = await vidaPlusService.getAllUser()
   return res.status(200).json(user);
}


export async function getAllUnit(req: Request, res: Response) {
   const unit = await vidaPlusService.getAllUnit()
   return res.status(200).json(unit);
}

export async function getAllDoctor(req: Request, res: Response) {
   const doctor = await vidaPlusService.getAllDoctor()
   return res.status(200).json(doctor);
}