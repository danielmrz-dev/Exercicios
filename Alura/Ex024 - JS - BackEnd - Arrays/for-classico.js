const medias = [10, 8, 7.5, 9, 5, 8.5];

// for (let i = 0; i < medias.length; i++) {
//     console.log(medias[i]);    
// }

for (const media of medias) {
    console.log(`O índice é ${medias.indexOf(media)} e a nota é ${media}`);
}