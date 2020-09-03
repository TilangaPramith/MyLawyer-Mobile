const Deed = require('./model');

exports.create_a_deed = function(req, res){
    const new_deed = new Deed(req.body);
    console.log("new_deed", new_deed);
    if(!new_deed.client || !new_deed.signed_day || !new_deed.handover_day || !new_deed.deed_No ){
        res.status(400).send({ error: true, message: "Please provide all details"});
    }
    else{
        Deed.createDeed(new_deed, function(err, result){
            if(err){
                res.send(err);
            }
            else{
                res.json(result);
            }
        });
    }
};

exports.list_all_deed = function(req,res){
    Deed.getAllDeed(function(err, result){
        console.log('controller');
        if(err){
            res.send(err);
            console.log('res', result);
        }
        else{
            var result1 = [];
            var i;
            for(i = 0; i< result.length; i++){
                result1.push([result[i].deed_Id, result[i].deed_No, result[i].client, result[i].signed_day, result[i].handover_day])
            }
            res.send(result1);
        }
    });
};

exports.list_current_deed = function(req,res){
    const deed = new Deed(req.body);
    const Today = deed.today;
    Deed.getCurrentDeed(Today,function(err,result){
        if(err){
            console.log('eeeeee');
            console.error("Error: ",err);
            //res.send(err);
        }
        else{
            var result1 = [];
            var i;
            for(i = 0; i< result.length; i++){
                result1.push([result[i].deed_Id, result[i].deed_No, result[i].client, result[i].signed_day, result[i].handover_day])
            }
            res.send(result1);
        }
    })
}

exports.list_old_deed = function(req,res){
    const deed = new Deed(req.body);
    const Today = deed.today;
    Deed.getOldDeed(Today,function(err,result){
        if(err){
            console.log('eeeeee');
            console.error("Error: ",err);
            //res.send(err);
        }
        else{
            var result1 = [];
            var i;
            for(i = 0; i< result.length; i++){
                result1.push([result[i].deed_Id, result[i].deed_No, result[i].client, result[i].signed_day, result[i].handover_day])
            }
            res.send(result1);
        }
    })
}

exports.delete_deed = function(req,res){
    const deed = new Deed(req.body);
    const deed_Id = deed.deed_Id;
    Deed.deleteDeed(deed_Id, function(err,result){
        if(err){
            console.error("Error: ", err);

        }
        else{
            var state = true;
            res.send({state});
        }
    })
}