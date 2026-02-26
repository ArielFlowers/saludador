function saludar(nombre,genero) {
    let saludo = "Hola";

    if (genero === "masculino") saludo += ", señor ";
        else if (genero === "femenino") saludo += ", señora ";
    return saludo + nombre + "!";
}
export default saludar;
