const ordenacao = (n) => {
    return n.sort((a, b) => a - b);
};



console.log(ordenacao([2, 3, 3, 1, -1, 12, 43, 22]));