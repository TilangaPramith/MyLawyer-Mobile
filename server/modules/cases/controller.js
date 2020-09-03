const Case = require('./model');

exports.create_a_case = function(req, res){
    const new_case = new Case(req.body);
    console.log('new_case', new_case);
    if(!new_case.client || !new_case.cases_No || !new_case.case_day || !new_case.create_day ){
        res.status(400).send({ error: true, message: "Please provide all details"});
    }
    else{
        Case.createCase(new_case, function(err, result){
            if(err){
                res.send(err);
            }
            else{
                res.json(result);
            }
        });
    }
};

exports.list_all_case = function(req,res){
    Case.getAllCase(function(err, result){
        console.log('controller');
        if(err){
            res.send(err);
            console.log('res', result);
        }
        else{
            var result1 = [];
            var i;
            for (i = 0; i < result.length; i++){
                result1.push([result[i].cases_Id, result[i].cases_No, result[i].client, result[i].case_day, result[i].create_day])
            }    
            res.send(result1);
        }
    });
};

exports.list_current_case = function(req,res){
    const cases = new Case(req.body);
    const Today = cases.today;

    Case.getCurrentCase(Today,function(err,result){
        if(err){
            console.error("Error: ",err);
            //res.send(err)
        }
        else{
            var result1 = [];
            var i;
            for(i = 0; i< result.length; i++){
                result1.push([result[i].cases_Id, result[i].cases_No, result[i].client, result[i].case_day, result[i].create_day])
            }
            console.log(result1);
            res.send(result1);
        }
    })
}

exports.list_old_case = function(req,res){
    const cases = new Case(req.body);
    const Today = cases.today;

    Case.getOldCase(Today,function(err,result){
        if(err){
            console.error("Error: ",err);
            //res.send(err)
        }
        else{
            var result1 = [];
            var i;
            for(i = 0; i< result.length; i++){
                result1.push([result[i].cases_Id, result[i].cases_No, result[i].client, result[i].case_day, result[i].create_day])
            }
            console.log(result1);
            res.send(result1);
        }
    })
}

exports.delete_case = function(req,res){
    const cases = new Case(req.body);
    const cases_Id = cases.cases_Id;
    Case.deleteCase(cases_Id, function(err,result){
        if(err){
            console.error("Error: ", err);
        }
        else{
            var state =  true;
            res.send({state});
        }
    })
}