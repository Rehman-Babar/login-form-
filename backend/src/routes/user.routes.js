import { Router } from "express";
import {signup, getUser } from "../controller/user.controller.js";
const router =Router()

router.post('/signup', signup)
router.get('/users', getUser)
// router.post('/login', login)

export default router;