const fs = require('fs');
const data = JSON.parse(fs.readFileSync('src/assets/animations/Truck.json', 'utf8'));
const layers = data.layers.map(l => ({ nm: l.nm, ty: l.ty, ip: l.ip, op: l.op, ind: l.ind }));
fs.writeFileSync('truck_layers.json', JSON.stringify(layers, null, 2));
