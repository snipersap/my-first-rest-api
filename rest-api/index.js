const app = require("express")();

/*On command >node index.js, the app starts listening for incoming connections 
at localhost:3000*/ 
app.listen(
    3000,
    () => console.log('Node app is running!') 
);

/*get takes parameters:
> path - the path of the endpoint
> callback function, which takes parameters
>> request - request from the client
>> response - response to be sent to the client

req.status takes the parameter of the status code to be sent
send() takes the json payload as the response to be sent*/

/*return user details on hitting localhst:3000/users */
app.get('/users', (req,res) => {
    res.status(200).send([
        {name: 'John', id: 1},
        {name: 'Cena', id: 2},
    ]);
});

/*return user detail of user 3 on hitting localhst:3000/user/3 */
app.get('/user/3', (req,res) => {
    res.status(200).send([
        {user: 'Goldman', id: 3},
    ]);
});

