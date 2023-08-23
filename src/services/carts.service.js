import CartRepository from '../repositories/carts.repository.js';
import CartModel from "../dao/models/carts.model.js";

class CartService {
  async createCartForUser(userId) {
    try {
      const newCart = new CartModel({
        name: userId,
        products: [],
      });
      await newCart.save();
      return newCart;
    } catch (error) {
      throw new Error("Error al crear el carrito para el usuario");
    }
  }
  
  async addProductToCart(cartId, userId, productId) {
  try {
    const userCart = await CartRepository.findCartByUserId(userId);

    if (!userCart) {
      throw new Error('Carrito no encontrado');
    }

    console.log("Productos en el carrito:", userCart.products);

    const existingProduct = userCart.products.find(product => product.productId.toString() === productId);

    console.log("Producto existente:", existingProduct);

    if (existingProduct) {
      throw new Error('Producto ya existe en el carrito');
    }

    userCart.products.push({ productId, quantity: 1 });
    console.log("Productos en el carrito:", userCart.products);
    console.log("Producto existente:", existingProduct);
    await userCart.save();
  } catch (error) {
    throw new Error('Error al agregar producto al carrito');
  }
}


async checkIfProductExistsInCart(userId, productId) {
  try {
    const userCart = await CartRepository.findCartByUserId(userId);

    if (!userCart) {
      throw new Error('Carrito no encontrado');
    }

    return userCart.products.some(product => product.productId.toString() === productId);
  } catch (error) {
    throw new Error('Error al verificar producto en el carrito');
  }
}

}

export default new CartService();