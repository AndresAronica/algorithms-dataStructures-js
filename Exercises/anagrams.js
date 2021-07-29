function checkAnagrams(str1, str2) {

    if (str1.length !== str2.length)
        return false;

    let obj1 = {};
    let obj2 = {};

    for (let char of str1) {
        char = char.toLowerCase();
        obj1[char] = (obj1[char] || 0) + 1;
    }

    for (let char of str2) {
        char = char.toLowerCase();
        obj2[char] = (obj2[char] || 0) + 1;
    }

    for (let key in obj1) {
        // si hay alguna letra en el primer obj que no esta en el segundo, salgo
        if (!(key in obj2))
            return false;

        // si en alguna letra que esta en los dos obj, la cant de aparicioens es dif, salgo
        if (obj1[key] !== obj2[key])
            return false;
    }

    // si pasa todas las condiciones son anagramas
    return true;
}

checkAnagrams('HOLAa', 'aLoHh');