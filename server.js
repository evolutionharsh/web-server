var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [/*{
    id: 1,
    description: 'Meet Mom for meeting',
    completed:false
},{
    id:2,
    description: 'Go to Market',
    completed: false
    
    
},{
    id:3,
    description: 'Go to Bar',
    completed: true
    
    
}*/];

app.get('/',function(req,res){
    res.send('This is my Rest Api!');
});

app.get('/todos',function(req,res){
    
    res.json(todos);
});
var todoNextId = 1;
app.use(bodyParser.json());
app.get('/todos/:id',function(req,res){
    var todoId = parseInt(req.params.id,10);
    var matchedTodo;
    todos.forEach(function(todo){
        if(todoId===todo.id)
        {
            matchedTodo =todo;
        }
    });
    if(matchedTodo)
    {
         res.json(matchedTodo); 
    }
    else
    {
        res.status(404).send();
    }
   // res.send('Asking her to do with id:' + req.params.id);
});

app.post('/todos', function(req,res){
    var body=req.body;
    body.id =todoNextId;
    todoNextId++;
    todos.push(body);
    //console.log('description:' + body.description);
    res.json(body);
});
app.listen(PORT, function(){
    console.log('Express listening on port ' + PORT + '!');
});