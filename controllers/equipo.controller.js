import {equipo, proveedor} from "../db/db.js";
import { v4 as uuidv4 } from "uuid";

class equiposController {
  mostrarTodo() {
    return {
      data: equipo.length === 0 ? null : equipo,
      message:
        equipo.length === 0
          ? "No hay ningun equipo encontrados"
          : "Equipos encontrados",
    };
  }

  mostrarUno(idEt) {
    const equipoSeleccionado = equipo.filter(
      (equipo) => equipo.id === idEt,
    );
    return {
      data: equipo.length === 0 ? null : equipoSeleccionado,
      message:
        equipo.length === 0
          ? "No se ha encontrado el equipo"
          : "Equipo encontrado",
    };
  }

  mostrarETProv(idProv) {
    const equipoSeleccionado = equipo.filter(
      (equipo) => equipo.idProv === idProv,
    );
    return {
      data: equipo.length === 0 ? null : equipoSeleccionado,
      message:
        equipo.length === 0
          ? "No se ha encontrado el equipo"
          : "Equipo encontrado",
    };
  }

  crearEquipo( idProv, nuevoEquipo) {
    if (
      !nuevoEquipo.nombre ||
      !nuevoEquipo.tipo
    ) {
      return {
        data: null,
        message: "Faltan datos importantes",
      };
    }else{
    for (let i = 0; i <= proveedor.length; i++) {
          if (proveedor[i].id === idProv){
            const agregarequipo = {
              id: uuidv4(),
              idProv: idProv,
              nombre: nuevoEquipo.nombre,
              tipo: nuevoEquipo.tipo
            };
            equipo.push(agregarequipo);
            {
              return {
                data: {
                  nuevoEquipo,
                  equipo,
                },
                message: "Equipo creado con éxito",
              };
            }
          }
          return {
            data: null,
            message: "No se ha encontrado el proveedor",
          }
          }
        }
        }

  actualizarUno(idEt, nuevoEquipo) {
    for (let i = 0; i <= equipo.length; i++) {
      if (equipo[i].id === idEt) {
        equipo[i].nombre = !nuevoEquipo.nombre
          ? equipo[i].nombre
          : nuevoEquipo.nombre;
        equipo[i].tipo = !nuevoEquipo.tipo
          ? equipo[i].tipo
          : nuevoEquipo.tipo;
        return {
          data: {
            equipoActualizado: equipo[i],
            equipo,
          },
          message: "Equipo actualizado",
        };
      }
    }
    return {
      data: null,
      message: "No se ha encontrado el equipo a actualizar",
    };
  }

  eliminarUno(idEt) {
    for (let i = 0; i <= equipo.length; i++) {
      if (equipo[i].id === idEt) {
        equipo.splice(i, 1);
        return {
          data: {
            equipo,
          },
          message: "Equipo eliminado",
        };
      }
    }
    return {
      data: null,
      message: "No se ha encontrado el equipo a eliminar",
    };
  }
}

const equiposcontroller = new equiposController();
export default equiposcontroller;
