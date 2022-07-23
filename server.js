const http = require('http');

const {readFileSync, rmSync} = require('fs');

//get all file
const homePage = readFileSync('./nav-bar-app/index.html')
const homeStyles = readFileSync('./nav-bar-app/styles.css')
const homeImage = readFileSync('./nav-bar-app/logo.svg')
const homeLogic= readFileSync('./nav-bar-app/browser-app.js')

// req and res are objects
const server = http.createServer((req, res) => {
    console.log('user hit the server');
    // console.log(req.url) /about;
    //respond browser
    //{c-à-d browser i'm sending back css or html}
    const url = req.url;
    //home
    if(url === '/'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write(homePage)
    
        //'<h1>Home Page</h1>' ta3mel res.write wthotha ou direct res.end kifkif
        //dispaly in browser
         // Send the response body as content homepage
        res.end()
    //about
    }else if (url === '/about'){
        
            res.writeHead(200, {'content-type':'text/html'})
            res.write(homePage)
        
            //'<h1>Home Page</h1>' ta3mel res.write wthotha ou dorect res.end kifkif
            res.end()

    }
    //style
    else if (url === '/styles.css') {
        res.writeHead(200,{'content-type': 'text/css'})
        res.write(homeStyles)
        res.end()
    }
    //image logo
    else if (url === '/logo.svg'){
        res.writeHead(200,{'content-type': 'image/svg+xml'})
        res.write(homeImage)
        res.end()
    }
    // logic
    else if (url === '/browser-app.js'){
        res.writeHead(200,{'content-type': 'text/javascript'})
        res.write(homeLogic)
        res.end()
    }
    //404
    else {
        
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h1>Page not found</h1>')
    
        //'<h1>Home Page</h1>' ta3mel res.write wthotha ou dorect res.end kifkif
        res.end()

}
    
   
    //probleme todhher fi ay page home about ....
})

server.listen(5000)