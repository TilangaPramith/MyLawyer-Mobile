const sql = require('../../database/db');

const Deed = function(deed){
    this.client = deed.client;
    this.signed_day = deed.signed_day;
    //this.create_day = new Date();
    this.handover_day = deed.handover_day;
    this.deed_No = deed.deed_No;
    this.deed_Id = deed.deed_Id;
    this.today  = new Date();
}

Deed.getAllDeed = function(res){
    sql.query("select * from deed ", function( err, result){
        if(err){
            console.error('error: ', err);
            res(null, err);
        }
        else{
            console.log('deed: ',result);
            res(null, result);
        }
    });
};

Deed.createDeed = function(newDeed, res){

    const deedN = {
        deed_No: newDeed.deed_No,
        client: newDeed.client,
        signed_day: newDeed.signed_day,
        handover_day: newDeed.handover_day
    }

    sql.query('Insert into deed set ?', deedN, function(err1, result){
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

Deed.getCurrentDeed = function(Today, res){
    sql.query('select * from deed where handover_day >= ?',[Today],function(err, result){
        if(err){
            console.error('Error: ', err);
            res(err, null);
        }
        else{
            res(null, result);
        }
    })
}

Deed.getOldDeed = function(Today, res){
    sql.query('select * from deed where handover_day < ?',[Today],function(err, result){
        if(err){
            console.error('Error: ', err);
            res(err, null);
        }
        else{
            res(null, result);
        }
    })
}

Deed.deleteDeed = function(deed_Id,res){
    sql.query('delete from deed where deed_Id = ?',[deed_Id],function(err,result){
        if(err){
            console.error("Error: ",err);
            res(err,null);
        }
        else{
            res(null,result);
        }
    })
}

module.exports = Deed;