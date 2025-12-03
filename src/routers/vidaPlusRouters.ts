import { Router } from "express";
import { createConsultation, createDoctor, createMedicalRecord, createUnit, createUser, getAllDoctor, getAllUnit, getAllUser } from "../controllers/vidaPlusController";


export const mainRouter = Router();


mainRouter.post("/user", createUser);

mainRouter.post("/unit", createUnit);

mainRouter.post("/doctor", createDoctor)

mainRouter.post("/consultation", createConsultation)

mainRouter.post("/medicalRecord", createMedicalRecord)


mainRouter.get("/users", getAllUser);

mainRouter.get("/units", getAllUnit);

mainRouter.get("/doctors", getAllDoctor)
