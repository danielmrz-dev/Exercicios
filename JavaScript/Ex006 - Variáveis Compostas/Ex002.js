let n = [5, 3, 8, 2, 7]

n[2] = 9

n.push(4)

n.sort()

// for (let pos = 0; pos < n.length; pos++) {
//     console.log(`A posição ${pos} tem o valor ${n[pos]}.`)
// }

for (let pos in n) {
    console.log(`A posição ${pos} tem o valor ${n[pos]}.`)
}