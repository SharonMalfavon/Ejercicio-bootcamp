var pago_por_dia =parseInt(prompt("ingrese su salario por dia"));
var quincena =(pago_por_dia* 14);
var mensualidad =(pago_por_dia* 30);
console.log("su salario bruto quincenal es: " + quincena);
console.log("su salario mensual es: " + mensualidad);
quincena = quincena-(quincena* 0.30)-(quincena* .10);
mensualidad = mensualidad-(mensualidad* .30)-(mensualidad*.10);
console.log("su salario neto quincenal es: " + quincena);
console.log("su salario neto mensual es: " + mensualidad);