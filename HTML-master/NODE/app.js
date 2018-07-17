//const http = require('http');
const express =  require('express');
const app = express();

const courses = [
    {id: 1, name: 'courses1'},
    {id: 2, name: 'courses12'},
    {id: 3, name: 'courses123'},

]

app.get('/', (req,res) => {
    res.send("hello");
});

app.get('/api/courses', (req,res) => {
        res.send(courses);
});


app.get('/api/courses/:id',(req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course dosent exist');
    res.send(course);
});
//
//const server = http.createServer((req,res) =>{
//    if(req.url=== '/')
//        {
//            res.write('Hello world');
//            res.end();
//        }
//    if(req.url === 'api/courses'){
//        
//    }
//});
//
//server.listen(3000);

const port = process.env.PORT || 3000;
app.listen(port,() => console.log('Listening on port ${port}...'));