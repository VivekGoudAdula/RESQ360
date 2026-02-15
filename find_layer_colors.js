const fs = require('fs');
const path = 'src/assets/animations/Bike Riding.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));
let output = '';
data.layers.forEach(l => {
    let colors = [];
    const findColors = (obj) => {
        if (!obj) return;
        if (Array.isArray(obj)) {
            obj.forEach(findColors);
        } else if (typeof obj === 'object') {
            if ((obj.ty === 'fl' || obj.ty === 'st') && obj.c && obj.c.k) {
                colors.push(obj.c.k);
            }
            Object.values(obj).forEach(findColors);
        }
    };
    findColors(l);
    if (colors.length > 0) {
        output += `Layer: ${l.nm} Colors: ${JSON.stringify(colors)}\n`;
    }
});
fs.writeFileSync('layer_colors.txt', output);
