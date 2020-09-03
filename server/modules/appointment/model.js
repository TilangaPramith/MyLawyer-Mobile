const sql = require('../../database/db');

const Appointment = function(appointment){
    this.client = appointment.client;
    this.abstract_day = appointment.abstract_day;
    this.time  = appointment.time;
    this.create_day = new Date();
    this.appointment_Id = appointment.appointment_Id;
    this.today = new Date();
}

Appointment.getAllAppointment = function(res){
    sql.query("select * from appointment ", function( err, result){
        if(err){
            console.error('error: ', err);
            res(null, err);
        }
        else{
            console.log('appointment: ',result.length);
            res(null, result);
        }
    });
};

Appointment.createAppointment = function(newAppointment, res){
    console.log('come', newAppointment)
    var client = newAppointment.client;
    var abstract_day = newAppointment.abstract_day;
    var create_day = newAppointment.create_day;
    var time = newAppointment.time;

    const appoin = {
        client ,
        abstract_day,
        create_day,
        time,
    }

    sql.query('Insert into appointment set ?', appoin, function(err1, result){
        if(err1){
            console.error('Error: ', err1);
            res(err1, null);
        }
        else{
            console.log(result.insertId);
            var id  = result.insertId;
            var state = true;
            res(null, {id, state});
        }
    });
}

Appointment.getCurrentAppointment = function(Today,res){
    console.log('aaaaaaaaaaaa', Today);
    sql.query('select * from appointment where abstract_day >= ?',[Today],function(err,result){
        if(err){
            console.error("Error: ",err);
            res(err, null);
        }
        else{
            console.log('appointment: ',result.length);
            res(null,result);
        }
    })
}

Appointment.getOldAppointment = function(Today,res){
    console.log('aaaaaaaaaaaa', Today);
    sql.query('select * from appointment where abstract_day < ?',[Today],function(err,result){
        if(err){
            console.error("Error: ",err);
            res(err, null);
        }
        else{
            console.log('appointment: ',result.length);
            res(null,result);
        }
    })
}

Appointment.deleteAppointment = function(appointment__Id, res){
    console.log("model",appointment__Id);
    sql.query('delete from appointment where appointment_Id = ?',[appointment__Id], function(err,result){
        if(err){
            console.error("Error: ",err);
            res(err, null);
        }
        else{
            res(null,result);
        }
    })
}

module.exports = Appointment;