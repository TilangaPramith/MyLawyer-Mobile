const sql = require('../../database/db');

const Case = function(cases){
    this.client = cases.client;
    this.case_day = cases.case_day;
    this.create_day = new Date();
    this.cases_No = cases.cases_No;
    this.cases_Id = cases.cases_Id;
    this.today = new Date();
}

Case.getAllCase = function(res){
    sql.query("select * from cases ", function( err, result){
        if(err){
            console.error('error: ', err);
            res(null, err);
        }
        else{
            console.log('case: ',result);
            res(null, result);
        }
    });
};

Case.createCase = function(newCase, res){
    console.log('NEW CASE',newCase);
    const caseN = {
        cases_No : newCase.cases_No,
        client: newCase.client,
        case_day: newCase.case_day,
        create_day: newCase.create_day
    }
    sql.query('Insert into cases set ?', caseN, function(err1, result){
        if(err1){
            console.error('Error: ', err1);
            res(err1, null);
        }
        else{
            var state = true;
            var id = result.insertId;
            console.log(result.insertId);
            res(null, {state, id});
        }
    });
}

Case.getCurrentCase = function(Today,res){
    console.log(Today);
    sql.query('select * from cases where case_day >= ?',[Today],function(err,result){
        if(err){
            console.error('Error: ',err);
            res(err, null);
        }
        else{
            res(null,result);
        }
    })
}

Case.getOldCase = function(Today,res){
    console.log(Today);
    sql.query('select * from cases where case_day < ?',[Today],function(err,result){
        if(err){
            console.error('Error: ',err);
            res(err, null);
        }
        else{
            res(null,result);
        }
    })
}

Case.deleteCase = function(cases_Id,res){
    sql.query('delete from cases where cases_Id = ?',[cases_Id],function(err,result){
        if(err){
            console.error("Error: ",err);
            res(err,null);
        }
        else{
            res(null,result);
        }
    })
}

module.exports = Case;