
import { Router } from 'express';
import Product from '../dao/models/products.model.js';
import authMdw from '../middleware/auth.middleware.js';
import ViewController from '../controllers/views.controller.js'; // Importa el controlador correspondiente

const router = Router();
const viewController = new ViewController(); // Crea una instancia del controlador

router.get('/products', viewController.renderProductList); // Utiliza el método del controlador

router.get("/login", viewController.renderLogin); // Utiliza el método del controlador

router.get("/register", viewController.renderRegister); // Utiliza el método del controlador

router.get("/profile", authMdw, viewController.renderProfile); // Utiliza el método del controlador

export default router;
