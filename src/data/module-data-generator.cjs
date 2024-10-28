const fs = require('fs');

const count = Number(process.argv[2]) || 10;
let names = [];

fs.readFile('./names.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    names = data.split("\n").map(s => s.trim()).filter(n => n.length != 0);
    
    let content = "export const data = [\n";
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * names.length);
        const name = names[randomIndex];
        const birth = new Date(2000 + Math.floor(Math.random() * 20), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28 + 1)).toISOString().split('T')[0];
        const eyes = ['blue', 'brown', 'green'][Math.floor(Math.random() * 3)];
        const rating = Math.floor(Math.random() * 10) + 1;
        
        content += `  { id: ${i + 1}, name: "${name}", birth: "${birth}", eyes: "${eyes}", rating: ${rating} },\n`;
    }
    content += "];";

    fs.writeFile('src/module-data.js', content, (err) => {
        if (err) {
            console.error(err);
        }
        console.log("module-data.js generated");
    });
});
