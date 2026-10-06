import express from "express";
import equipoController from "../controllers/equipo.controller.js";
const router = express.Router();

/* GET users listing. */
router.get("/mostrarTodo", function (req, res, next) {
  const response = equipoController.mostrarTodo();
  const sts = response.data === null ? 400 : 200;
  res.status(sts).json({
    data: response.data,
    message: response.message,
  });
});

router.get("/mostrarUno/:id", function (req, res, next) {
  const response = equipoController.mostrarUno(req.params.id);
  const sts = response.data === null ? 400 : 200;
  res.status(sts).json({
    data: response.data,
    message: response.message,
  });
});

router.get("/mostrarxProv/:id", function (req, res, next) {
  const response = equipoController.mostrarUno(req.params.id);
  const sts = response.data === null ? 400 : 200;
  res.status(sts).json({
    data: response.data,
    message: response.message,
  });
});

router.post("/crearUno/:id", function (req, res, next) {
  const response = equipoController.crearEquipo(req.params.id, req.body);
  const sts = response.data === null ? 400 : 200;
  res.status(sts).json({
    data: response.data,
    message: response.message,
  });
});

router.put("/actualizarUno/:id", function (req, res, next) {
  const response = equipoController.actualizarUno(req.body, req.params.id);
  const sts = response.data === null ? 400 : 200;
  res.status(sts).json({
    data: response.data,
    message: response.message,
  });
});

router.delete("/eliminarUno/:id", function (req, res, next) {
  const response = equipoController.eliminarUno(req.params.id);
  const sts = response.data === null ? 400 : 200;
  res.status(sts).json({
    data: response.data,
    message: response.message,
  });
});

export default router;
