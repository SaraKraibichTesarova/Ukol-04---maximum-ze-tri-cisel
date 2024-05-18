
const max3 = (prvniCislo, druheCislo, tretiCislo) => {
    if(prvniCislo > druheCislo && prvniCislo > tretiCislo) {
        return prvniCislo
    }
    else if(druheCislo > prvniCislo && druheCislo > tretiCislo) {
        return druheCislo
    }
    else if(tretiCislo > prvniCislo && tretiCislo > druheCislo) {
        return tretiCislo
    }
    else {
        return null
    }
}

document.body.innerHTML += max3(1,2,3)
