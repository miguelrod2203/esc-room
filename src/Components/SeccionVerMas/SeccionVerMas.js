import { pedirItemPorId } from "../../helpers/pedirDatos";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartDetalle } from "./CartDetalle";

export const SeccionVerMas = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    pedirItemPorId(id)
      .then((res) => {
        setProducto(res);
      })
  }, [id]);

  return (
    <section>
      {producto && <CartDetalle {...producto}/>}
    </section>
  );
};