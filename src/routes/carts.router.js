import { Router } from "express";
import { addProductToCart, createCartForUser , getCartContents } from '../controllers/carts.controller.js';

const router = Router();

router.get('/:cid', getCartContents);
router.post('/create', createCartForUser);
router.put('/:cartId/add/:productId', addProductToCart);

export default router;