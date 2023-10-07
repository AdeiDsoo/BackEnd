import { Schema } from "moongose";

//crear esquema

const studentsSchema = new Schema({
  nombre: {
    type: String,
    require: true,
  },
  edad: {
    type: Number,
    require: true,
  },
  dhi: {
    type: String,
    require: true,
    unique: true,
  },
  curso: {
    type: String,
    require: true,
  },
  nota: {
    type: Number,
    require: true,
  },
});


//crear el modelo/col
export const studentsModel=model('Students', studentsSchema)