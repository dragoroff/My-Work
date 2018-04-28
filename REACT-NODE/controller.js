const Person = require('./model');
const SHA256 = require('sha256');

let init = (app) => {

    app.put('/api', (req, res)=>{
        let person = new Person(req.body);
        person.name = SHA256(person.name);
        Person.findOne({'name': person.name, 
            'address': person.address, 
            'phone': person.phone, 
            'picture':person.picture}, (err, user)=>{
           if (!user){
            console.log(person);
            person.save()
            .then((newUser)=>{res.status(200).send(newUser)})
            .catch(()=>{res.status(400).send(console.log("error 400"))});   
           } 
           else {
                console.log("Exist");
           }
        })
    });        

    app.patch('/api', (req, res)=>{
        let person = new Person(req.body);
        person.name = SHA256(person.name);
        Person.findOneAndUpdate({'name': person.name}, (err, user)=>{
           
            user.name = person.name;
            user.address = person.address;
            user.phone = person.phone;
            user.picture = person.picture;

            user.save()
            .then((newUser)=>{res.status(200).send(newUser)})
            .catch(()=>{res.status(400).send(console.log("error 400"))});   
        })
    });

    app.post('/api', (req, res)=>{
        let person = new Person(req.body);
        person.name = SHA256(person.name);
        console.log(person);
        person.save()
        .then((user)=>{res.status(201).send(user)})
        .catch((err)=>{res.status(400).send(err)})
    })

    app.get('/api/:name', (req,res)=>{
        Person.findOne({'name': req.params.name},(err, users)=>{
            res.send(users);
        })
    })

    app.put('/app/:_id', (request, response)=>{
        Person.findOneAndUpdate({_id: request.params._id}, (err, user)=>{
            user.name = request.body.name;
            user.address = request.body.address;
            user.phone = request.body.phone;
            user.picture = request.body.picture;

            console.log(user);

            user.save();
            response.send(user);
        })
    })
}

module.exports = {
    init
}