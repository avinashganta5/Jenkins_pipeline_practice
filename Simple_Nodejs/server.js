
const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>DevOps Practice App</title>
            <style>
                * {
                    box-sizing: border-box;
                }

                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: linear-gradient(135deg, #141e30, #243b55);
                    color: #fff;
                }

                .card {
                    background: #ffffff;
                    color: #243047;
                    padding: 45px 30px;
                    margin: 20px;
                    max-width: 520px;
                    width: 100%;
                    text-align: center;
                    border-radius: 20px;
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
                }

                .icon {
                    font-size: 55px;
                    margin-bottom: 10px;
                }

                h1 {
                    color: #162280;
                    margin-bottom: 12px;
                }

                p {
                    color: #586174;
                    line-height: 1.6;
                }

                .status {
                    display: inline-block;
                    margin-top: 15px;
                    padding: 10px 18px;
                    background: #dcfce7;
                    color: #166534;
                    border-radius: 25px;
                    font-weight: bold;
                    font-size: 14px;
                }

                .time {
                    margin-top: 20px;
                    font-size: 14px;
                    color: #64748b;
                }

                footer {
                    margin-top: 25px;
                    font-size: 12px;
                    color: #94a3b8;
                }
            </style>
        </head>
        <body>
            <div class="card">
                <div class="icon">🚀</div>

                <h1>Hello, DevOps Engineer!</h1>

                <p>
                    Welcome to my Node.js practice application.
                    This app is built for learning CI/CD.
                </p>

                <div class="status">● Application Running</div>

                <p><strong>Technology Stack</strong></p>
                <p>Node.js | Docker | Jenkins | AWS ECR</p>

                <div class="time">
                    Server time: <span id="time">Loading...</span>
                </div>

                <footer>
                    Built and deployed with Jenkins CI/CD
                </footer>
            </div>

            <script>
                function updateTime() {
                    document.getElementById('time').textContent =
                        new Date().toLocaleString();
                }

                updateTime();
                setInterval(updateTime, 1000);
            </script>
        </body>
        </html>
    `);
});

server.listen(PORT, '0.0.0.0', () => {
    console.log('================================');
    console.log(' DevOps Practice App Started');
    console.log(' Port: ' + PORT);
    console.log('================================');
});
