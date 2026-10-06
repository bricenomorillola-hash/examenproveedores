import {proveedor, equipo} from "../db/db.js";
import { v4 as uuidv4 } from "uuid";

class proveedorController {
  mostrarTodo() {
    return {
      data: proveedor.length === 0 ? null : proveedor,
      message:
        proveedor.length === 0
          ? "No hay ningun proveedor encontrado"
          : "Proveedores encontrados",
    };
  }

  mostrarUno(idProv) {
    const proveedorSeleccionado = proveedor.filter(
      (proveedor) => proveedor.id === idProv,
    );
    return {
      data: proveedor.length === 0 ? null : proveedorSeleccionado,
      message:
        proveedor.length === 0
          ? "No se ha encontrado el proveedor"
          : "Proveedor encontrado",
    };
  }

  crearProveedor(nuevoProveedor) {
    if (
      !nuevoProveedor.nombre ||
      !nuevoProveedor.fundacion ||
      !nuevoProveedor.ubicacion
    ) {
      return {
        data: null,
        message: "Faltan datos importantes",
      };
    } else {
    const agregarProveedor = {
      id: uuidv4(),
      nombre: nuevoProveedor.nombre,
      fundacion: nuevoProveedor.fundacion,
      ubicacion: nuevoProveedor.ubicacion,
    };
    proveedor.push(agregarProveedor);
      return {
        data: {
          nuevoProveedor,
          proveedor,
        },
        message: "Proveedor creado con éxito",
      };
  }
  }

  actualizarUno(idProv, nuevoProveedor) {
    for (let i = 0; i <= proveedor.length; i++) {
      if (proveedor[i].id === idProv) {
        proveedor[i].nombre = !nuevoProveedor.nombre
          ? proveedor[i].nombre
          : nuevoProveedor.nombre;
        proveedor[i].fundacion = !nuevoProveedor.fundacion
          ? proveedor[i].fundacion
          : nuevoProveedor.fundacion;
        proveedor[i].ubicacion = !nuevoProveedor.ubicacion
          ? proveedor[i].ubicacion
          : nuevoProveedor.ubicacion;
        return {
          data: {
            proveedorActualizado: proveedor[i],
            proveedor,
          },
          message: "Proveedor actualizado",
        };
      }
    }
    return {
      data: null,
      message: "No se ha encontrado el proveedor a actualizar",
    };
  }

  eliminarUno(idProv) {
    for (let i = 0; i <= proveedor.length; i++) {
      if (proveedor[i].id === idProv) {
        const equipoSeleccionado = equipo.filter(
          (equipo) => equipo.idProv != idProv,
        );
    equipo = equipoSeleccionado;
        proveedor.splice(i, 1);
        return {
          data: {
            proveedor,
          },
          message: "Proveedor eliminado",
        };
      }
    }
    return {
      data: null,
      message: "No se ha encontrado el proveedor a eliminar",
    };
  }
}

const proveedorcontroller = new proveedorController();
export default proveedorcontroller;
