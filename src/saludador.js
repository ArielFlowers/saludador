function saludar(nombre,genero,edad) {
    let saludo = "Hola";

    if (edad && edad > 30) {
        if (genero === "masculino") saludo += ", señor";
        else if (genero === "femenino") saludo += ", señora";
    } else {
        if (genero === "masculino") saludo += ", joven";
        else if (genero === "femenino") saludo += ", señorita";
    }
    if (nombre) {
        saludo += ` ${nombre}`;
    }
    return saludo +"!";
}
export default saludar;
