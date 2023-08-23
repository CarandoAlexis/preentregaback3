import CartService from "../services/carts.service.js";
import CartRepository from "../repositories/carts.repository.js"

const createCartForUser = async (req, res) => {
  try {
    const userId = req.session.user._id;
    await CartService.createCartForUser(userId);
    res.status(200).json({ message: 'Carrito creado exitosamente' });
  } catch (error) {
    console.error('Error al crear carrito:', error);
    res.status(500).json({ status: 'error', message: 'Error al crear carrito' });
  }
};


const addProductToCart = async (req, res) => {
  try {
    const { cartId, productId } = req.params;
    const userId = req.session.user._id;

    const message = await CartService.addProductToCart(cartId, userId, productId);

    res.status(200).json({ message: message });
  } catch (error) {
    console.error('Error al agregar producto al carrito:', error);
    res.status(500).json({ status: 'error', message: 'Error al agregar producto al carrito' });
  }
};


const getCartContents = async (req, res) => {
  try {
    const { cartId } = req.params;

    const cart = await CartRepository.getCartByCartId(cartId);

    if (!cart) {
      return res.status(404).json({ status: "error", message: "Carrito no encontrado" });
    }

    res.json({ status: "success", cart });
  } catch (error) {
    console.error("Error al obtener el carrito:", error);
    res.status(500).json({ status: "error", message: "Error al obtener el carrito" });
  }
};



export { createCartForUser, addProductToCart, getCartContents };