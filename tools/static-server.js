/* Jednoduchý statický server pre lokálny náhľad webu.
   Bez závislostí — stačí Node. Spustenie:  node tools/static-server.js . 4321
   Rieši aj range requesty, aby fungovalo prehrávanie videí. */

const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.resolve(process.argv[2] || process.cwd());
const port = Number(process.argv[3] || 4321);

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath === '/') urlPath = '/index.html';
  let file = path.join(root, urlPath);
  if (!file.startsWith(root)) {
    res.writeHead(403).end('Forbidden');
    return;
  }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) {
    file = path.join(file, 'index.html');
  }
  if (!fs.existsSync(file)) {
    const notFound = path.join(root, '404.html');
    if (fs.existsSync(notFound)) {
      res.writeHead(404, { 'Content-Type': types['.html'] });
      fs.createReadStream(notFound).pipe(res);
    } else {
      res.writeHead(404).end('Not found');
    }
    return;
  }
  const ext = path.extname(file).toLowerCase();
  const stat = fs.statSync(file);
  const ctype = types[ext] || 'application/octet-stream';
  const range = req.headers.range;

  if (range && (ext === '.mp4' || ext === '.webm')) {
    const m = /bytes=(\d*)-(\d*)/.exec(range);
    const start = m[1] ? parseInt(m[1], 10) : 0;
    const end = m[2] ? parseInt(m[2], 10) : stat.size - 1;
    res.writeHead(206, {
      'Content-Type': ctype,
      'Content-Range': `bytes ${start}-${end}/${stat.size}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': end - start + 1,
    });
    fs.createReadStream(file, { start, end }).pipe(res);
    return;
  }

  res.writeHead(200, {
    'Content-Type': ctype,
    'Content-Length': stat.size,
    'Accept-Ranges': 'bytes',
    'Cache-Control': 'no-cache',
  });
  fs.createReadStream(file).pipe(res);
}).listen(port, () => {
  console.log(`Web beží: http://localhost:${port}  (koreň: ${root})`);
});
