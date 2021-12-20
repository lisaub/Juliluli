import React, { useState, useEffect ,createContext} from "react";
import { getFetch } from "../../helpers/getFetch";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ContextApp3=createContext([])

const ItemListContainer = ({ greetings }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getFetch
        .then((resp) =>
          setProductos(resp.filter((prod) => prod.category === id))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      getFetch
        .then((resp) => setProductos(resp))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [id]);

  console.log(id);

  return (
    <div>
      <ContextApp3.Provider value={{productos}}>
      <p>{greetings}</p>

      {loading ? <h2>Cargando...</h2> : <ItemList />}
      {/* <ItemList items={items}/> */}
      {/* {productos.map(producto=><li key={producto.id}>{producto.name}</li>)} */}
      </ContextApp3.Provider>
    </div>
  );
};

export default ItemListContainer;
