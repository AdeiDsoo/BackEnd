//HANS ON LAB
class TicketManager {
  #precioBaseDeGanancia = 2;
  // esta varoiable debe añador un costo adicional al precio de cada evento

  constructor() {
    this.eventos = [];
  }
  agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
    const evento = {
      id: this.eventos.length
        ? this.eventos[this.eventos.length - 1].id + 1 //this.eventos.length la ultima posicion de un arreglo
        : 1,
      nombre,
      lugar,
      precio: precio + this.#precioBaseDeGanancia,
      capacidad,
      fecha,
      participantes,
    };
    this.eventos.push(evento);
  }

  agregarUsuario(idEvento, idUsuario) {
    const evento = this.eventos.find((e) => e.id === idEvento);
    if (!evento) {
      return "Este evento no existe";
    }
    if (evento.participanates.includes(idUsuario)) {
      return "Usuario ya registrado en el evento";
    }
    evento.participantes.push(idUsuario);
  }
  ponerEventoEnGira(idEvento, nuevoLugar, nuevaFecha) {
    //crear un evento con la mismas caracteristicas con una nueva localidad nueva fecha nuevo id y sus participantes vacias
    const evento = this.eventos.find((e) => e.id === idEvento);
    if (!evento) {
      return "Este evento no existe";
    }
    const nuevoEvento = {
      ...evento,
      lugar: nuevoLugar,
      fecha: nuevaFecha,
      participantes: [],
      id: this.eventos.length
        ? this.eventos[this.eventos.length - 1].id + 1 //this.eventos.length la ultima posicion de un arreglo
        : 1,
    };
    this.eventos.push(nuevoEvento)
  }

}
console.log(agregarEvento(evento1, palacio, 56, 50, fecha ) )