import { createContext , useState} from "react";

export const CartContext = createContext([])

const CartContextProvider = ({children}) => {
    
    const [cartList, setCartList] = useState([])
    
    function addItem(item) {
        // if (detalle) {
        //     alert(`No se puede agregar este item otra vez.`);
        //   } else {

        const index = cartList.findIndex(i => i.id ===item.id)

        if (index > -1) {
            const oldQy = cartList[index].cantidad

            cartList.splice(index, 1)

            setCartList([...cartList, {...item, cantidad: item.cantidad + oldQy}])
        } else {
            setCartList([...cartList, item])
        }
        //   }
    }

    function clearCarrito() {
        setCartList([])
    }

    function removeItem(itemId) {
        
    }

    function isInCart(id) {
        
    }

    return (
        <div>
            <CartContext.Provider value={{cartList, addItem, clearCarrito}}>
                {children}
            </CartContext.Provider>
            
        </div>
    )
}

export default CartContextProvider
