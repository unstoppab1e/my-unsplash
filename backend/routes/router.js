import { Router } from "express";
import PictureController from "../controllers/PictureController.js";

const router = new Router();

router.post('/pictures' , PictureController.create);
router.get('/pictures', PictureController.getAll);
router.get('/pictures/:id', PictureController.getOne);
router.put('/pictures/:id', PictureController.update);
router.delete('/pictures/:id', PictureController.delete);

export default router;