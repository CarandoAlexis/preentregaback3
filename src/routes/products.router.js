import { Router } from "express";
import { getProductList, addProduct, editProduct, deleteProduct } from "../controllers/products.controller.js";
import authMdw from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", getProductList);
router.post("/", addProduct);
router.put('/edit/:id', editProduct);
router.delete('/delete/:id', deleteProduct);

export default router;