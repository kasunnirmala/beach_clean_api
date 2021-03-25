var fcm = require('fcm-notification');
var FCM = new fcm('./fcm.json');
 
    var message = {
        data: { 
            post_id: '850',
        },
        notification:{
            title : 'New Post',
            body : 'New Polluted Beach is Listed'
        },
       topic:"tomobile"
        };
 
FCM.send(message, function(err, response) {
    if(err){
        console.log('error found', err);
    }else {
        console.log('response here', response);
    }
})