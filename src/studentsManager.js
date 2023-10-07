import { studentsModel } from "./db/models/students.model.js";

class StudentsManager {
  async findAll() {
    const response = await studentsModel.find();
    return response;
  }
  async findById(id) {
    const response = await studentsModel.findById(id);
    return response;
  }
  async createOne(obj) {
    const response = await studentsModel.create(obj);
    return response;
  }
  async updateOne(id, obj) {
    const response = await studentsModel.updateOne({ _id: id }, { $set: obj });
    //set especificas las propiedades que actualizar
    return response;
  }
  async deleteOne(id) {
    const {idStudents}= req.params
    //  const response =await studentsModel.deleteOne({_id:id})
    const deleteStudent = await studentsModel.findByIdAndDelete(id);
    return deleteStudent;
  }
}

export const StudentsManager=new StudentsManager