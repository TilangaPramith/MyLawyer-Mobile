const Appointment = require('./model');

exports.create_an_appointment = function(req, res){
    const new_appointment = new Appointment(req.body);
    
    if(!new_appointment.client || !new_appointment.abstract_day ){
        res.status(400).send({ error: true, message: "Please provide all details"});
    }
    else{
        Appointment.createAppointment(new_appointment, function(err, result){
            if(err){
                res.send(err);
            }
            else{
                res.json(result);
            }
        });
    }
};

exports.list_all_appointment = function(req,res){
    Appointment.getAllAppointment(function(err, result){
        console.log('controller');
        if(err){
            console.log('res', result);
            res.send(err);
        }
        else{
            var result1 = [];
            var i;
            for (i = 0; i < result.length; i++){
                result1.push([result[i].appointment_Id,result[i].client,result[i].abstract_day, result[i].create_day,result[i].time])
            }
            console.log(result1);
            res.send(result1);
        }
    });
};

exports.list_current_appointment = function(req,res){
    const current_appointment = new Appointment(req.body)
    const Today = current_appointment.today;
    console.log('eeeeeeeeee');
    Appointment.getCurrentAppointment(Today,function(err, result){
        if(err){
            console.error('Error: ',err);
            //res.send(err);
        }
        else{
            var result1 = [];
            var result2 = [];
            var i;
            for (i = 0; i < result.length; i++){
                result1.push([result[i].appointment_Id,result[i].client,result[i].abstract_day, result[i].create_day,result[i].time])
            }
            // for (i = 0; i < result.length; i++){
            //     result2.push([result1[i].appointment_Id,result1[i].client,result1[i].abstract_day, result1[i].create_day,result1[i].time])
            // }
            console.log(result1);
            res.send(result1);
        }
    });
};

exports.list_old_appointment = function(req,res){
    const old_appointment = new Appointment(req.body)
    const Today = old_appointment.today;
    console.log('eeeeeeeeee');
    Appointment.getOldAppointment(Today,function(err, result){
        if(err){
            console.error('Error: ',err);
            //res.send(err);
        }
        else{
            var result1 = [];
            var result2 = [];
            var i;
            for (i = 0; i < result.length; i++){
                result1.push([result[i].appointment_Id,result[i].client,result[i].abstract_day, result[i].create_day,result[i].time])
            }
            // for (i = 0; i < result.length; i++){
            //     result2.push([result1[i].appointment_Id,result1[i].client,result1[i].abstract_day, result1[i].create_day,result1[i].time])
            // }
            console.log(result1);
            res.send(result1);
        }
    });
};

exports.delete_appointment = function(req,res){
    console.log('controller')
    const Id = new Appointment(req.body);
    const appointment_Id = Id.appointment_Id;
    Appointment.deleteAppointment(appointment_Id, function(err,result){
        if(err){
            console.error("Error: ",err);
        }
        else{
            var state = true;
            res.send({state});
        }
    })
}