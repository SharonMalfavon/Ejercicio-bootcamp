function objects(nombre, apellido, edad) {
    var pesona = {
        nombre: nombre,
        apellido: apellido,
        edad:22,
        saludo: function() {
         console.log("Mi nombre es " + this.nombre + " " + this.apellido )   
        },
        miedad: function(){
            console.log("Mi edad es " + this.edad)
          }
    };
    return persona;
};
var persona = objects("Shawn", "Mendes", 22);
persona.saludo();