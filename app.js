
const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.end(`
        <h1>Welcome to My CI/CD POC!</h1>
        <p>Node.js application deployed using Jenkins and Kubernetes.</p>
        <p>Deployment Status: SUCCESS</p>
    `);
});

server.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});
