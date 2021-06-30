import { Router } from "express";
import { createuserContoller } from "./useCases/CreateUser";

const router = Router()

router.post('/users', (req, res) => {
    return createuserContoller.handle(req, res);
})

export {router}