// {
//     id: 'asdasasd2342sdf',
//     nombre: 'tal nombre',
//     sala: 'video juegos'
// }


class Usuarios {

    constructor() {
        this.personas = [];
    }

    agregarPersona(id, nombre, sala) {
        let persona = { id, nombre, sala }
        this.personas.push(persona);
        return this.personas;
    }

    obtenerPersona(id) {
        let persona = this.personas.filter(persona => {
            return persona.id === id;
        })[0];

        return persona;
    }

    obtenerPersonas() {
        return this.personas;
    }

    borrarPersona(id) {
        let personaDel = this.obtenerPersona(id);

        console.log(personaDel);

        this.personas = this.personas.filter(persona => {
            return persona.id != id;
        });
        return personaDel;
    }

    obtenerPersonasPorSalas(sala) {
        let personasEnSala = this.personas.filter(persona => {
            return persona.sala === sala;
        });
        return personasEnSala;

    }

}


module.exports = { Usuarios }