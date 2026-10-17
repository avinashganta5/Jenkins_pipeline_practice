
const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Node.js Practice App</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    margin-top: 100px;
                    background: #f0f4f8;
                }
                h1 { color: #162280; }
                .card {
                    background: white;
                    padding: 30px;
                    margin: auto;
                    max-width: 500px;
                    border-radius: 12px;
                }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>Hello from Node.js!</h1>
                <p>My first Node.js application.</p>
                <p>Deployed using Jenkins and Docker.</p>
            </div>
        </body>
        </html>
    `);
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Application running on port ${PORT}`);
});
