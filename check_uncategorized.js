const XLSX = require('xlsx');
const wb = XLSX.readFile('Envy_48V_Matter_V2.1.6_Doc.xlsx');
const sheet = wb.Sheets[wb.SheetNames[0]];
const rows = XLSX.utils.sheet_to_json(sheet, {defval: ''});
const uncategorized = rows.filter(r => !r.Cluster || r.Cluster.trim() === '');
console.log('Uncategorized rows:', uncategorized.length);
console.log('Sample uncategorized rows:');
uncategorized.slice(0, 10).forEach((r, i) => console.log(`  ${i+1}. Element: "${r.Element}", Cluster: "${r.Cluster}"`));
