const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dulceSchema = new Schema({
  Nombre: {
    type: String,
    require: true,
  },
  disponible: {
    type: Boolean,
    default: true,
  },
  Seccion: {
    type: String,
    require: true,
  },
  Descripcion: {
    type: String,
    require: true,
  },
  Precio: {
    type: Number,
    require: true,
  },
  imageURL: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Dulce", dulceSchema);
