function sameSimple(arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false;
    
    for (let i = 0; i < arr1.length; i++) {
        // Fijate si encontras el cuadrado del elemento en el que estas parado del array 1
        let correctIndex = arr2.indexOf(arr1[i] ** 2);

        // Si no encontras nada (o sea si devuelve -1 a la posicion)
        if (correctIndex === -1)
            return false;

        // Si lo encontras, borra ese indice del segundo array, para que no lo encuentre 2 veces
        arr2.splice(correctIndex, 1);
    }
    return true;
}
console.log(sameSimple([1,2,3,2],[9,1,4,2]));

function sameOptimized(arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false;

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    // Recorro cada posicion del array1
    for (let val of arr1) {
        // Si la propiedad frequencyCounter1.numero ya existe, asignale un valor, sino crea la prop y ahi asignale un valor
        // Si ya existe, pasale su valor + 1
        // Si no existe, pasale 0 + 1
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        // Pregunto si key^2 no esta como una key en el obj2
        // Si el cuadrado de alguna key de obj1 no esta en el obj2, directamente salgo
        if (!(key ** 2 in frequencyCounter2))
            return false;

        // Si el valor de la key del obj1 no es el mismo al valor de la key del cuadrado en el obj2, salgo
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key])
            return false;
    }
    return true;
}
console.log(sameOptimized([1,2,3,2],[9,1,4,4]));