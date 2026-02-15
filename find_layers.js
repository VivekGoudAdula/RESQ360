const fs = require('fs');
const path = 'src/assets/animations/Bike Riding.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));
const yellowLayers = data.layers.filter(l => {
    const s = JSON.stringify(l);
    // Yellow is typically high R, high G, low B. [1, 1, 0] or [1, 0.7-0.9, 0]
    // Let's also search for dashed lines.
    return s.includes('\"d\":') || s.includes('0.9,0.9') || s.includes('1,0.7') || s.includes('1,0.8');
}).map(l => ({ nm: l.nm, ind: l.ind }));
console.log(JSON.stringify(yellowLayers));
