var User = require('../models/User.js');




module.exports = {
    
    
    getName: function(req,res,next) {
        
        res.status(200).json(User.name);
        
    },
    
    getLocation: function(req,res,next) {
        
        res.status(200).json(User.location);
    },
    
    getOccupations: function(req,res,next) {
        console.log("this is req.query: " + req.query.order);
        if (req.query.order === 'asc') {
            console.log("im here!");
            res.status(200).json(User.occupations.sort());
        }
        else if( req.query.order === 'desc') {
            res.status(200).json(User.occupations.sort().reverse());
        }
        else {
            res.status(200).json(User.occupations);
        }
    },
    
    getLatestOccupation: function(req,res,next) {
        
        res.status(200).json(User.occupations[User.occupations.length - 1]);
    },
    
    getHobbies: function(req,res,next) {
        
        res.status(200).json(User.hobbies);
        
    },
    
    getHobbiesByType: function(req,res,next) {
        var typeIn = req.params.type;
        var typeArray = [];
        for (var i = 0; i < User.hobbies.length; i++) {
            if (User.hobbies[i].type === typeIn) {
                typeArray.push(User.hobbies[i]);
                
            }
            
        }
        res.status(200).json(typeArray);
    },

    getSecrets: function(req,res,next) {
        console.log(req.params.username);
        res.status(200).json(User.secrets);
        
    },
    
    
    /*
    app.get('/secrets/:username/:pin', mainCtrl.getSecrets);

    */
    
    
    
    changeName: function(req,res,next) {
        
        User.name = req.body.name; //need to add .name after req.body?
        res.status(200).json({message: "name changed to " + req.body.name});
    },
    
    changeLocation: function(req,res,next) {
        
        User.location = req.body.location; //need to add .location after req.body?
        res.status(200).json({message: "location changed to " + req.body.location});

    },
    
    addHobby: function(req,res,next) {
        
        User.hobbies.push(req.body.hobby);
        res.status(200).json({message: "added hobby: " + req.body.hobby});

    },
    
    addOccupation: function(req,res,next) {
        
        User.occupations.push(req.body.occupation);
        res.status(200).json({message: "added occupation: " + req.body.occupation});

    },
    
    getSkillz: function(req,res,next) {
        var expSkillz = [];
        if (req.query.experience !== undefined) {   
            for (var i = 0; i < User.skillz.length; i++) {
               if (User.skillz[i].experience === req.query.experience) {
                   expSkillz.push(User.skillz[i]);
               }
           
             }
            res.status(200).json(expSkillz);
        }
            
        else {
            
             res.status(200).json(User.skillz);
        }
    },
    
    addSkillz: function(req,res,next) {
        User.skillz.push(req.body.skillz);
        res.status(200).json({message: "added skillz: " + req.body.skillz});
    },
                        
    
    
    /*
app.get('/skillz', mainCtrl.getSkillz);

app.post('/skillz', mainCtrl.addSkillz);
    */
    
    
    
};