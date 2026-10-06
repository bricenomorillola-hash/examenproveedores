import express from "express";
import proveedorController from "../controllers/proveedor.controller.js";
const router = express.Router();

/* GET users listing. */
router.get("/mostrarTodo", function (req, res, next) {
  const response = proveedorController.mostrarTodo();
  const sts = response.data === null ? 400 : 200;
  res.status(sts).json({
    data: response.data,
    message: response.message,
  });
});

router.get("/mostrarUno/:id", function (req, res, next) {
  const response = proveedorController.mostrarUno(req.params.id);
  const sts = response.data === null ? 400 : 200;
  res.status(sts).json({
    data: response.data,
    message: response.message,
  });
});

router.post("/crearUno", function (req, res, next) {
  const response = proveedorController.crearProveedor(req.body);
  const sts = response.data === null ? 400 : 200;
  res.status(sts).json({
    data: response.data,
    message: response.message,
  });
});

router.put("/actualizarUno/:id", function (req, res, next) {
  const response = proveedorController.actualizarUno(req.params.id, req.body);
  const sts = response.data === null ? 400 : 200;
  res.status(sts).json({
    data: response.data,
    message: response.message,
  });
});

router.delete("/eliminarUno/:id", function (req, res, next) {
  const response = proveedorController.eliminarUno(req.params.id);
  const sts = response.data === null ? 400 : 200;
  res.status(sts).json({
    data: response.data,
    message: response.message,
  });
});

export default router;
