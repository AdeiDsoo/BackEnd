const caseTest = ["list1", "list2", "list3"];
const caseNull = [];
const caseNotArray = "hola";

// const showList = (elementsArray) => {
//     if (Array.isArray(elementsArray)) {
//         if (!elementsArray.length) {
//             return "Lista vacía";
//         }
//         for (let i = 0; i < elementsArray.length; i++)
//             console.log(elementsArray[i]);
//         return `${elementsArray.length} este es el total de elementos del array `;
//     }
//     return "no es un arreglo";
// };

// console.log(showList(caseNotArray));

class nombreDeMiClase {
    constructor(parametrosDeCreacion) {
        this.variableInterna = 2;
    }

    static variableEstatica = 4;

    metodo1() {
        console.log("soy un metodo de la clase!");
    }
    metodo2 = () => {
        console.log(
            `soy una funcion flecha, puedo inscrustar variables ${this.variableInterna}, todo dentro de una clase`
        );
    };
}

let instancia = new nombreDeMiClase();

class User {
    constructor(first_name, last_name, email) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
    }
    getFirsName() {
        return this.first_name;
    }
}

// const user1 = new user("carlos", "Abello", "dsf@hotmail.com");
// const user2 = new user("Juan", "Sanchez", "sadsf@dil.com");

// console.log(user1.getFirsName());

class Contador {
    constructor(nombre) {
        this.nombre = nombre;
        this.contadorIndividual = 0;
    };
    static contadorGlobal = 0;

    getResponsable() {
        console.log(this.nombre);
    }
    contar() {
        this.contadorIndividual++;
        Contador.contadorGlobal++;
    }

    getCuentaIndividual() {
        console.log(
            `cuenta individual de ${this.nombre} es ${this.contadorIndividual} `
        );
    }

    getCuentaGlobal() {
        console.log(`cuenta Global de ${Contador.contadorGlobal} `);
    }
};


const contador1 =new Contador ('juan 1')
const contador2 =new Contador ('pepe 2')

// console.log(contador1.getResponsable())
contador1.getResponsable()
contador2.getResponsable()
contador1.contar()
contador1.contar()
contador1.contar()
contador1.contar()
contador1.contar()
contador1.getCuentaIndividual()
contador2.getCuentaIndividual()
contador2.getCuentaGlobal()