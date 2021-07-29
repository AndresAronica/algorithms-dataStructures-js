/*
	Escribir una funcion productOfArray, que toma un array como parametro
	Devuelve el resultado de todos sus elementos multiplicados
*/
function productOfArray(arr) {
	if (arr.length === 0) return 1;

	return arr[0] * productOfArray(arr.slice(1));
}

//productOfArray([1,2,3]) // 6
productOfArray([1,2,3,10]) // 60

/*
	Escribir una funcion llamada power que acepte dos parametros: base y exponente
	Debe devolver el resultado de la base elevado al exponente
	No tener en cuenta bases y exponentes negativos
*/
function power(base, exponent) {
	if (exponent === 0)	return 1;

	return base * power(base, exponent - 1);
}
//power(2,0)
power(2,2)
//power(2,4)

function sumRange(num) {
	if (num === 1) return 1;
	return num + sumRange(num - 1);
}
sumRange(3);

function factorialRecursion(num) {
	if (num === 1 || num === 0) return 1;
	return num * factorialRecursion(num - 1);
}
factorialRecursion(0);