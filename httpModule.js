const http = require('http')

const server = http.createServer((req,res)=>{

if(req.url === '/')
{
  res.end('Good one')
}
if(req.url === '/about')
{
    res.end('you are in next step...')
}
res.end(<h1>Oops, something went wrong</h1>

)

})
server.listen(4000)