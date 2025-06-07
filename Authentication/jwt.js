const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "randomneetikaistrying"
const app = express();

const users = []



app.use(express.json());
app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    // Validate input
    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    // Check for duplicate username
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
    }
    
    console.log(users); 
    
    users.push({
        username,
        password
    })
    res.send({
        message: "You have signed up"
    })
});


app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        const token = jwt.sign({
            username : user.username
          //Convert the username into jwt token   
        },JWT_SECRET);
        //  user.token = token; 
        res.json({
            token : token
        })
        console.log(users);
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
});


app.get("/me", (req, res) => {
    const token = req.headers.token; //jwt
    const decodedInformation = jwt.verify(token,JWT_SECRET);
    const information = decodedInformation.username

    let foundUser = null;

    for(let i=0;i<users.length;i++)
    {
        if(users[i].username == username )
        {
            foundUser= users[i];
        }
    }
   
    if (foundUser) {
        res.json({
            username: foundUser.username,
            password : foundUser.password
        })
    } else {
        res.json({
            message: "Token invalid"
        })
    }
})


app.listen(3000);