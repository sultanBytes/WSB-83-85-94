const http = require('http');
const url = require('url');

const server = (req, res) => {
    // console.log(req.method)

    const param = url.parse(req.url, 1);

    console.log(param)


    if (req.method == 'GET' && param.href == '/home') {
        res.end('get called home');
    }
    else if(req.method == 'POST'){
        res.end('post called');
    }
    else if(req.method == 'GET' && param.href == '/about'){
        res.end('post called about');
    }
}
http.createServer(server).listen(5000);