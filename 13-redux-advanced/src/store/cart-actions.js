import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const getCartData = () => {
  return async (dispatch) => {
    try {
      const data = await sendGetCartData();
      dispatch(cartActions.replaceCart(data));
    } catch (error) {
      dispatch(
        uiActions.notify({
          status: "error",
          message: error.message,
        })
      );
    }
  };
};

const sendGetCartData = async () => {
  const response = await fetch(
    "https://react-http-ba022-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
  );
  if (response.ok === false) {
    throw new Error("Failed to fetch data");
  }
  return await response.json();
};

export const putCartData = (cart) => {
  return async (dispatch) => {
    try {
      await sendPutCartData(cart);
      dispatch(
        uiActions.notify({
          status: "success",
          message: "Sent cart data",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.notify({
          status: "error",
          message: error.message,
        })
      );
    }
  };
};

const sendPutCartData = async (cart) => {
  const response = await fetch(
    "https://react-http-ba022-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
    {
      method: "PUT",
      body: JSON.stringify({
        items: cart.items,
        totalQuality: cart.totalQuality,
      }),
    }
  );
  if (response.ok === false) {
    throw new Error("Failed to fetch data");
  }
};
