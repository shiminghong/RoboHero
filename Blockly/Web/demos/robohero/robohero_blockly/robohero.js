
/*
this is basic function for control robohero;
blockly version
the async function is differenct from Scratch ;

*/

// Scratch Extension to demonstrate some simple web browser functionality
// 2014 Shane M. Clements


// set robohero url
// ap mode: 192.168.4.1
// client & ddns mode: robohero.local ;

var robohero_ap_url = "http://192.168.4.1/"; ;
var robohero_mdns_url = "http://robohero.local/";

var robohero_url = robohero_ap_url ;

// motion embeded in robohero firmware and it's execute time ;
var controllerPM = [ 99,1,2,3,5,4,6,11,12 ]
var controllerPM_time = [100,2900,2540,5250,560,5250,560,6400,4200]


// set run pms and it's execute time ;
var controllerPMS = [1,2,3,4,5,6,7,8] ;
var controllerPMS_time = [2300, 3300, 4800, 3800, 6600, 9300, 2990, 3300, 19750] ;
var pmsMotionNames = [ "Bow", "Pass", "Strength", "Attention", "Balance", "Warm-Up", "Clap", "Pray", "Dance"] ;

var sportMotionNames = [ "To Push-Up", "Push-Up Up", "Push-Up Down", "End Push-Up", "Splits", "Sit Down", "Sit-Up Down", "Sit-Up Up", "Flip Back to Front", "Flip Front To Back"] ;


var motionDic = { // put all motion with name here

"motion_topushup": {"state":0,"name":"To Push-Up","id":"no_id_now","mid":35,"tt":0,"static_image":"basic_plus_32","author":"","motion":[[135,135,114,109,135,135,200,135,135,60,135,135,161,156,135,135,90,200],[135,135,104,92,135,135,200,135,135,60,135,135,178,158,135,135,90,200],[135,98,141,64,135,82,200,135,135,60,188,135,206,129,172,135,90,200],[135,98,156,50,135,50,200,135,135,60,220,135,220,114,172,135,90,200],[136,145,156,78,135,50,200,135,135,60,220,135,192,114,125,134,90,200],[136,145,156,122,135,50,200,135,135,60,220,135,148,114,125,134,90,200],[135,135,135,135,135,68,200,135,135,60,202,135,135,135,135,135,90,500]],"type":0,"create_time":1491881900}
,
"mtoion_pushupup": {"state":0,"name":"Push-Up Up","id":"no_id_now","mid":36,"tt":0,"static_image":"basic_plus_33","author":"","motion":[[135,135,135,135,135,68,115,49,221,145,202,135,135,135,135,135,90,200],[135,135,135,135,135,68,200,133,137,60,202,135,135,135,135,135,90,306]],"type":0,"create_time":1491881900}
,
motion_pushupdown: {"state":0,"name":"Push-Up Down","id":"no_id_now","mid":37,"tt":0,"static_image":"basic_plus_34","author":"","motion":[[135,135,135,135,135,68,200,135,135,60,202,135,135,135,135,135,90,200],[135,135,135,135,135,68,115,49,221,145,202,135,135,135,135,135,90,200]],"type":0,"create_time":1491881900}
,
motion_endpushup: {"state":0,"name":"End Push-Up ","id":"no_id_now","mid":38,"tt":0,"static_image":"basic_plus_35","author":"","motion":[[135,135,135,135,135,68,200,135,135,60,202,135,135,135,135,135,90,200],[135,167,135,90,137,68,200,135,135,60,202,133,180,135,103,135,85,368],[135,158,135,68,137,36,200,135,135,60,234,133,202,135,112,135,90,200],[135,172,157,50,137,39,200,135,135,60,231,133,220,113,98,135,90,200],[135,105,170,60,137,62,200,135,135,60,208,133,210,100,165,135,90,666],[135,88,154,60,137,137,200,135,135,60,133,133,210,116,182,135,90,818],[135,90,170,97,134,154,200,135,135,60,116,136,173,100,180,135,90,427],[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,500]],"type":0,"create_time":1491881900}
,
motion_splits: {"state":0,"name":"Splits","id":"no_id_now","mid":22,"tt":0,"static_image":"basic_plus_17","author":"","motion":[[132,137,131,131,131,134,190,133,133,68,134,138,137,137,132,137,88,435],[117,136,137,135,111,135,152,135,135,108,135,159,135,135,135,161,90,500],[95,136,137,135,95,135,114,135,135,146,135,175,135,133,134,175,90,500],[62,136,137,135,65,135,114,135,135,146,135,205,135,133,134,208,90,500],[136,136,137,135,50,135,114,135,135,146,135,220,135,133,134,134,90,500]],"type":0,"create_time":1491881900}
,
motion_wramup: {"state":0,"name":"Warm Up","id":"no_id_now","mid":9,"tt":"1477648040386","author":"","motion":[[135,135,135,135,135,135,170,60,200,90,135,135,135,135,135,135,90,300],[135,135,135,135,135,135,170,60,200,90,135,135,135,135,135,135,60,400],[135,135,135,135,135,135,170,60,200,90,135,135,135,135,135,135,60,400],[135,135,135,135,135,135,170,60,200,90,135,135,135,135,135,135,120,400],[135,135,135,135,135,135,170,60,200,90,135,135,135,135,135,135,120,400],[135,135,135,135,135,135,170,60,200,90,135,135,135,135,135,135,90,400],[125,135,135,135,125,135,170,60,200,90,135,125,135,135,135,125,90,400],[145,135,135,135,145,135,170,60,200,90,135,145,135,135,135,145,90,400],[125,135,135,135,125,135,170,60,200,90,135,125,135,135,135,125,90,400],[145,135,135,135,145,135,170,60,200,90,135,145,135,135,135,145,90,400],[135,135,135,135,135,135,170,60,200,90,135,135,135,135,135,135,90,300],[135,175,40,80,135,180,170,60,200,90,190,135,185,220,90,135,90,400],[135,175,40,80,135,180,170,60,200,90,190,135,185,220,90,135,90,300],[135,135,135,135,135,135,170,60,200,90,135,135,135,135,135,135,300],[135,175,40,80,135,80,170,60,200,90,90,135,185,220,90,135,90,400],[135,175,40,80,135,80,170,60,200,90,90,135,185,220,90,135,90,300],[135,135,135,135,135,135,170,60,200,90,135,135,135,135,135,135,90,300],[135,135,135,135,135,45,210,135,180,45,270,135,135,135,135,135,90,300],[135,135,135,135,135,45,210,135,180,45,270,135,135,135,135,135,90,500],[135,135,135,135,135,135,170,60,200,90,135,135,135,135,135,135,90,500],[135,135,135,135,135,5,210,90,135,45,230,135,135,135,135,135,90,300],[135,135,135,135,135,5,210,90,135,45,230,135,135,135,135,135,90,500],[135,135,135,135,135,135,170,60,200,90,135,135,135,135,135,135,90,500],[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,500]],"type":0,"create_time":1491881900}
,
motion_strength: {"state":0,"name":"Strength","id":"no_id_now","mid":10,"tt":"1477648040386","author":"","motion":[[145,135,135,135,145,135,200,180,40,145,135,145,135,135,135,145,60,300],[145,135,135,135,145,135,200,180,40,145,135,145,135,135,135,145,60,800],[125,135,135,135,125,135,125,220,80,60,135,125,135,135,135,125,120,300],[125,135,135,135,125,135,125,220,80,60,135,125,135,135,135,125,120,800],[135,135,135,135,135,45,170,135,135,90,225,135,135,135,135,135,90,300],[135,135,135,135,135,45,170,135,135,90,225,135,135,135,135,135,90,500],[135,117,135,110,135,45,210,220,40,45,225,135,160,135,153,135,90,500],[135,117,135,110,135,45,210,220,40,45,225,135,160,135,153,135,90,800],[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,500]],"type":0,"create_time":1491881900}
,
motion_squatdown: {"state":0,"name":"Squat Down","id":"no_id_now","mid":28,"tt":0,"static_image":"basic_plus_25","author":"","motion":[[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,200],[135,108,135,112,135,135,200,135,135,60,135,135,113,135,120,135,90,200],[135,82,151,99,135,135,200,135,135,60,135,135,113,159,78,135,90,200],[135,84,124,82,135,135,200,135,135,60,135,135,113,180,69,135,90,200],[135,86,96,53,134,135,200,135,135,60,135,135,103,183,53,135,90,200],[135,105,72,50,134,135,200,135,135,60,135,135,100,180,51,135,90,200]],"type":0,"create_time":1491881900}
,
motion_squatup: {"state":0,"name":"Squat UP","id":"no_id_now","mid":29,"tt":0,"static_image":"basic_plus_26","author":"","motion":[[135,105,72,50,134,135,200,135,135,60,135,135,100,180,51,135,90,200],[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,500]],"type":0,"create_time":1491881900}

,
motion_victory: {"state":0,"name":"Victory","mid":55,"static_image":"basic_plus_40","author":"","motion":[[107,124,135,121,122,48,128,135,191,45,217,141,205,215,118,126,125,500]],"type":0,"create_time":1491881900}
,
motion_bow: {"state":0,"name":"Bow","id":"no_id_now","mid":12,"tt":"1477648040386","author":"","motion":[[135,135,135,135,135,160,200,110,200,50,210,135,135,135,135,135,90,300],[135,120,135,100,135,160,200,110,200,50,210,135,165,135,150,135,90,500],[135,120,135,100,135,160,200,110,200,50,210,135,165,135,150,135,90,1000],[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,500]],"type":0,"create_time":1491881900}
,
motion_clap: {"state":0,"name":"Clap","id":"no_id_now","mid":13,"tt":"1477648040386","author":"","motion":[[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,50],[135,135,135,135,135,66,200,135,135,60,195,135,135,135,135,135,90,450],[135,135,135,135,135,66,200,89,181,60,195,135,135,135,135,135,90,150],[135,135,135,135,135,68,230,82,187,35,193,135,135,135,135,135,90,180],[135,135,135,135,135,68,215,82,187,50,193,135,135,135,135,135,90,250],[135,135,135,135,135,68,230,82,187,35,193,135,135,135,135,135,90,180],[135,135,135,135,68,215,82,187,50,193,135,135,135,135,135,90,250],[135,135,135,135,135,68,230,82,187,35,193,135,135,135,135,135,90,180],[135,135,135,135,135,68,215,82,187,50,193,135,135,135,135,135,90,250],[135,135,135,135,135,66,184,115,155,76,195,135,135,135,135,135,90,350],[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,700]],"type":0,"create_time":1491881900}
,
motion_pass: {"state":0,"name":"Pass","id":"no_id_now","sound":"sound_standup","mid":11,"tt":0,"author":"","motion":[[125,135,135,135,125,135,200,135,135,60,250,125,135,135,135,125,60,500],[125,135,135,135,125,135,200,135,135,90,250,125,135,135,135,125,60,300],[125,135,135,135,125,135,200,135,135,60,250,125,135,135,135,125,60,300],[125,135,135,135,125,135,200,135,135,90,250,125,135,135,135,125,60,300],[145,135,135,135,145,20,200,135,135,60,135,145,135,135,135,145,120,500],[145,135,135,135,145,20,170,135,135,60,135,145,135,135,135,145,120,300],[145,135,135,135,145,20,200,135,135,60,135,145,135,135,135,145,120,300],[145,135,135,135,145,20,170,135,135,60,135,145,135,135,135,145,120,300],[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,500]],"type":0,"create_time":1491881900}
,
motion_attention: {"create_time":1491881900,"state":0,"name":"Attention","id":"no_id_now","mid":17,"tt":"1477648040386","author":"","motion":[[125,135,135,135,125,135,170,60,135,145,135,125,135,135,135,125,90,500],[125,135,135,135,125,135,170,60,135,145,135,125,135,135,135,120,90,300],[125,135,135,135,125,135,170,60,135,145,135,150,135,135,135,115,90,600],[125,135,135,135,125,135,170,60,210,50,270,150,135,135,135,115,120,400],[125,135,135,135,125,135,170,60,210,50,270,150,135,135,135,115,120,1000],[125,135,135,135,125,135,170,60,135,55,135,125,135,135,135,120,90,500],[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,500]],"type":0,"alias":["apache","helicopter"]}
,
motion_twist: {"create_time":1491881900,"state":0,"name":"Attention","id":"no_id_now","mid":17,"tt":"1477648040386","author":"","motion":[[125,135,135,135,125,135,170,60,135,145,135,125,135,135,135,125,90,500],[125,135,135,135,125,135,170,60,135,145,135,125,135,135,135,120,90,300],[125,135,135,135,125,135,170,60,135,145,135,150,135,135,135,115,90,600],[125,135,135,135,125,135,170,60,210,50,270,150,135,135,135,115,120,400],[125,135,135,135,125,135,170,60,210,50,270,150,135,135,135,115,120,1000],[125,135,135,135,125,135,170,60,135,55,135,125,135,135,135,120,90,500],[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,500]],"type":0,"alias":["apache","helicopter"]}
,
motion_fly: {"state":0,"name":"Fly","id":"no_id_now","mid":30,"tt":0,"static_image":"basic_plus_27","author":"","motion":[[135,135,135,135,135,135,69,135,135,193,135,135,135,135,135,135,90,200],[135,135,135,135,135,135,150,135,135,112,135,135,135,135,135,135,106,500],[135,135,135,135,135,135,69,135,135,193,135,135,135,135,135,135,64,500],[135,135,135,135,135,135,150,135,135,112,135,135,135,135,135,135,106,500],[135,135,135,135,135,135,69,135,135,193,135,135,135,135,135,135,64,500]],"type":0,"create_time":1491881900}
,
motion_shakehand: {"state":0,"name":"Shake Hand","id":"no_id_now","mid":34,"tt":0,"static_image":"basic_plus_31","author":"","motion":[[135,135,135,135,135,179,200,135,135,60,179,135,135,135,135,135,90,401],[135,135,135,135,135,90,200,135,135,60,91,135,135,135,135,135,90,419],[135,135,135,135,135,179,200,135,135,60,179,135,135,135,135,135,90,401],[135,135,135,135,135,90,200,135,135,60,91,135,135,135,135,135,90,401],[135,135,135,135,135,179,200,135,135,60,179,135,135,135,135,135,90,401],[135,135,135,135,135,90,200,135,135,60,91,135,135,135,135,135,90,401]],"type":0,"create_time":1491881900}
,
motion_balance: {"state":0,"name":"Balance","id":"no_id_now","mid":16,"tt":"1477648040386","author":"","motion":[[145,135,135,135,145,100,125,135,135,145,170,145,135,135,135,145,90,500],[150,135,135,135,145,100,125,135,135,145,170,145,135,135,135,145,90,300],[150,135,135,135,125,100,125,135,135,145,170,145,135,135,135,145,90,500],[150,135,135,135,125,100,125,135,135,145,170,145,135,135,135,145,90,600],[150,110,135,60,125,100,125,135,135,145,170,145,135,135,135,145,90,900],[150,110,135,60,125,100,100,135,135,170,170,145,135,135,135,145,60,500],[150,110,135,60,125,100,150,135,135,120,170,145,135,135,135,145,120,500],[150,110,135,60,125,100,100,135,135,170,170,145,135,135,135,145,60,500],[150,110,135,60,125,100,150,135,135,120,170,145,135,135,135,145,120,500],[150,110,135,60,125,100,125,135,135,145,170,145,135,135,135,145,90,500],[150,135,135,135,125,100,125,135,135,145,170,145,135,135,135,145,90,800],[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,500]],"type":0,"create_time":1491881900}
,
motion_forward:{"create_time":1491881899,"state":0,"name":"Forward","id":"no_id_now","sound":"sound_forward","mid":1,"tt":0,"type":0,"motion":[[149,135,135,135,145,135,189,123,147,71,135,145,135,135,135,149,90,200],[149,139,135,135,145,135,189,123,147,71,135,145,167,196,102,149,90,120],[149,139,135,135,145,121,189,123,147,71,116,145,179,175,127,155,90,200],[124,155,118,135,127,107,189,123,147,71,120,127,160,165,121,120,90,250],[124,168,74,102,127,135,189,123,147,71,135,127,135,135,131,120,90,120],[124,143,95,90,127,154,189,123,147,71,149,127,135,135,131,120,90,200],[149,149,105,112,145,150,189,123,147,71,163,145,135,152,115,149,90,250],[149,139,135,135,145,135,189,123,147,71,135,145,167,196,102,149,90,120],[149,139,135,135,145,121,189,123,147,71,116,145,179,175,127,155,90,200],[124,155,118,135,127,107,189,123,147,71,120,127,160,165,121,120,90,250],[124,168,74,102,127,135,189,123,147,71,135,127,135,135,131,120,90,120],[124,143,95,90,127,154,189,123,147,71,149,127,135,135,131,120,90,200],[149,149,105,112,145,150,189,123,147,71,163,145,135,152,115,149,90,250],[149,135,135,135,142,135,189,123,147,71,135,145,162,196,106,149,90,120],[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,300]],"author":"","alias":["go","walk"]}
,
motion_backward:{"create_time":1491881899,"state":0,"name":"Backward","id":"no_id_now","sound":"sound_forward","mid":2,"tt":0,"type":0,"motion":[[149,135,135,135,145,135,189,123,147,71,135,145,135,135,135,149,90,200],[149,135,135,135,145,135,189,123,147,71,135,145,162,196,106,149,90,120],[149,135,125,119,145,150,189,123,147,71,163,145,137,152,116,149,90,160],[120,138,95,96,129,154,189,123,147,71,149,129,135,135,135,124,90,200],[124,164,74,108,129,135,189,123,147,71,135,129,135,135,135,124,90,120],[124,154,118,133,129,107,189,123,147,71,120,129,151,145,135,124,90,160],[149,135,135,135,145,121,189,123,147,71,116,145,174,175,132,154,90,200],[149,135,135,135,145,135,189,123,147,71,135,145,162,196,106,149,90,120],[149,135,125,119,145,150,189,123,147,71,163,145,137,152,116,149,90,160],[120,138,95,96,129,154,189,123,147,71,149,129,135,135,135,124,90,200],[124,164,74,108,129,135,189,123,147,71,135,129,135,135,135,124,90,120],[124,154,118,133,129,107,189,123,147,71,120,129,151,145,135,124,90,160],[149,135,135,135,145,121,189,123,147,71,116,145,174,175,132,154,90,200],[149,135,135,135,145,135,189,123,147,71,135,145,162,196,106,149,90,120],[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,300]],"author":"","alias":["back"]}
,
motion_turnleft:{"state":0,"name":"Turn Left","id":"no_id_now","sound":"sound_turnleft","mid":3,"tt":0,"author":"","motion":[[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,200],[140,127,95,90,130,135,170,135,135,90,135,140,120,145,110,145,120,350],[150,130,115,95,140,135,200,135,135,60,135,140,165,165,110,145,90,200],[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,300],[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,200],[140,127,95,90,130,135,170,135,135,90,135,140,120,145,110,145,120,350],[150,130,115,95,140,135,200,135,135,60,135,140,165,165,110,145,90,200],[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,300],[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,200],[140,127,95,90,130,135,170,135,135,90,135,140,120,145,110,145,120,350],[150,130,115,95,140,135,200,135,135,60,135,140,165,165,110,145,90,200],[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,300],[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,200],[140,127,95,90,130,135,170,135,135,90,135,140,120,145,110,145,120,350],[150,130,115,95,140,135,200,135,135,60,135,140,165,165,110,145,90,200],[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,300],[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,200],[140,127,95,90,130,135,170,135,135,90,135,140,120,145,110,145,120,350],[150,130,115,95,140,135,200,135,135,60,135,140,165,165,110,145,90,200],[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,300]],"type":0,"create_time":1491881899}
,
motion_turnright:{"state":0,"name":"Turn Right","id":"no_id_now","sound":"sound_turnright","mid":4,"tt":0,"author":"","motion":[[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,200],[122,155,125,150,130,135,170,135,135,90,135,140,180,175,140,132,60,350],[125,160,105,105,130,135,200,135,135,60,135,130,175,155,140,120,90,200],[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,300],[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,200],[122,155,125,150,130,135,170,135,135,90,135,140,180,175,140,132,60,350],[125,160,105,105,130,135,200,135,135,60,135,130,175,155,140,120,90,200],[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,300],[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,200],[122,155,125,150,130,135,170,135,135,90,135,140,180,175,140,132,60,350],[125,160,105,105,130,135,200,135,135,60,135,130,175,155,140,120,90,200],[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,300],[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,200],[122,155,150,130,135,170,135,135,90,135,140,180,175,140,132,60,350],[125,160,105,105,130,135,200,135,135,60,135,130,175,155,140,120,90,200],[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,300],[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,200],[122,155,125,150,130,135,170,135,135,90,135,140,180,175,140,132,60,350],[125,160,105,105,130,135,200,135,135,60,135,130,175,155,140,120,90,200],[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,300]],"type":0,"create_time":1491881899}
,
motion_moveleft:{"state":0,"name":"Move Left","id":"no_id_now","sound":"sound_moveleft","mid":5,"tt":0,"type":0,"motion":[[129,135,135,135,133,135,200,135,135,60,135,133,135,135,135,129,90,50],[133,151,100,117,131,135,190,135,135,70,135,132,135,135,136,127,90,50],[122,144,114,124,120,135,190,135,135,70,135,132,135,135,136,130,90,50],[125,151,105,117,120,135,190,135,135,70,135,133,144,148,130,138,90,50],[143,140,122,126,142,135,190,135,135,70,135,150,140,137,140,157,90,120],[141,140,122,126,138,135,190,135,135,70,135,139,156,176,116,145,90,120],[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,120]],"author":"","alias":["left"]}
,
motion_moveright:{"state":0,"name":"Move Right","id":"no_id_now","sound":"sound_moveright","mid":6,"tt":0,"author":"","motion":[[141,135,135,135,136,135,200,135,135,60,135,136,135,135,135,141,90,50],[143,134,135,135,138,135,190,135,135,70,135,137,153,170,119,137,90,50],[140,134,135,135,138,135,190,135,135,70,135,145,146,156,126,148,90,50],[132,140,122,126,138,135,190,135,135,70,135,145,153,165,119,143,90,50],[113,130,133,130,122,135,190,135,135,70,135,130,144,148,130,127,90,120],[125,154,94,114,132,135,190,135,135,70,135,133,144,148,130,129,90,120],[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,120]],"type":0,"create_time":1491881899}
,
motion_getup:{"state":0,"name":"Get Up","id":"no_id_now","sound":"sound_getup","mid":7,"tt":0,"author":"","motion":[[135,225,135,135,135,45,200,135,135,60,230,135,135,135,35,135,90,500],[135,225,135,50,135,45,210,135,135,45,230,135,215,135,35,135,90,500],[135,225,135,50,35,45,210,135,135,45,230,225,215,135,35,135,90,500],[50,135,135,125,35,45,210,135,135,45,230,225,145,135,135,210,90,800],[135,135,90,170,35,45,210,135,135,45,230,225,90,180,135,135,90,800],[135,135,90,170,135,45,210,135,135,45,230,135,90,180,135,135,90,600],[135,185,135,30,135,20,210,135,135,45,250,135,230,135,80,135,90,800],[135,70,165,30,135,20,210,135,135,45,250,135,230,105,190,135,90,600],[135,85,165,100,135,135,200,135,135,60,135,135,165,105,175,135,90,800],[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,500]],"type":0,"create_time":1491881899}
,
motion_standup:{"state":0,"name":"Stand Up","id":"no_id_now","sound":"sound_standup","mid":8,"tt":0,"author":"","motion":[[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,500],[135,135,135,135,135,135,125,135,135,145,135,135,135,135,135,135,90,500],[135,135,135,135,135,20,125,135,135,145,250,135,135,135,135,135,90,500],[135,185,135,30,135,20,210,135,135,45,250,135,230,135,80,135,90,800],[135,70,165,30,135,20,210,135,135,45,250,135,230,105,190,135,90,600],[135,85,165,100,135,135,200,135,135,60,135,135,165,105,175,135,90,800],[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,500]],"type":0,"create_time":1491881900}
,
motion_stand:{"state":0,"name":"No Name","mid":0,"author":"","motion":[[135,135,135,135,135,135,200,135,135,60,135,135,135,135,135,135,90,500]],"type":0,"create_time":1506672402}

} ;



var isRoboheroAlive = false ; // check robohero is alive or not, this at other ui
var lastCheckTime = 0

var checkRoboheroAlive = function() {
  // check every 5 seconds
  if ((new Date().getTime() / 1000 - lastCheckTime) < 5 ) {
    return ;
  }

  lastCheckTime = new Date().getTime() / 1000 ;
  $.ajax({
      url: robohero_url + "eeprom" ,
      type: 'get',
      cache: false,
      success: function(){
        isRoboheroAlive = true ;
      },
      error: function(){
        isRoboheroAlive = false ;
      }
  });
} ;


var runPMcallback = function(pm, callback ) {
  var url = robohero_url + "controller?pm=" + pm ;
  $.get( url, function() {

  });

  for (i = 0; i < controllerPM.length; i++) {
      if ( controllerPM[i] == pm ) {
        window.setTimeout( function() {
          callback() ; // has callback @@ ;
        }, controllerPM_time[i] * 1.1 + 100 ) ; // longer time for its execute
        break ;
      }
  }
} ;

// advance motion
var runPMScallback = function(pms, callback ) {
  var url = robohero_url + "controller?pms=" + pms ;
  $.get( url, function() {
  });

  for (i = 0; i < controllerPMS.length; i++) {
      if ( controllerPMS[i] == pms ) {
        window.setTimeout( function() {
          callback() ;
        }, controllerPMS_time[i] ) ; // longer time for its execute
        break ;
      }
  }
} ;

var findRobohero = function(callback) {
  console.log("Find robohero start") ;

  $.ajax({
      url: robohero_ap_url + "eeprom" ,
      type: 'get',
      cache: false,
      timeout: 300,
      success: function(){
        callback(robohero_ap_url) ;
      },
      error: function(){
        console.log( robohero_ap_url + " fail, try mdns url") ;

        // find again
        $.ajax({
            url: robohero_mdns_url + "eeprom" ,
            type: 'get',
            cache: false,
            timeout: 300,
            success: function(){
              console.log(" using mdns url") ;
              callback( robohero_mdns_url ) ;
            },
            error: function(){
              console.log(robohero_mdns_url + "fail, can't find robohero") ;
              callback( robohero_ap_url ) ;
            }
        });
      }
  });
} ;


var controllerServo = function( arr, callback) {
  console.log("controllerServo func run") ;
  var url = robohero_url + "online?" ;
  url = url + "m0=" + arr[0] ;
  for ( var j = 1 ; j <= 16 ; j++ ) {
      url = url + "&m" + j + "=" + arr[j] ;
  }
  url = url + "&t1=" + arr[17] ;

  console.log("Control Servo raw url=" + url ) ;
}


var breakMotion = false ;
var executeMotion_global = function( data, callback ) {
  breakMotion = false ;
  var motionIndex = 0 ;
  var motion = data["motion"] ;

  try {
		iframe.contentWindow.executeMotion(data) ;
  } catch(e) {
	  console.log(e) ;
	  console.log("@@@ can't execute here @@") ;
  }

  var loopSendMotion = function() {
    console.log("lopSendMotion looped at frame = " + motionIndex) ;
    if (motion[motionIndex] != undefined ) {
      if ( motion[motionIndex].length == 18 ) {
        controllerServo( motion[motionIndex] ) ;
        var ms = motion[motionIndex][17] ;
        motionIndex = motionIndex + 1 ;
		if ( ms < 50 ) {
			setTimeout( loopSendMotion, ms + 20) ;
		}
		else {
			setTimeout( loopSendMotion, ms + 10) ;
		}
      }
      else {
        console.log("server count error @@" + motion[motionIndex].length ) ;
        console.log("error row = " + JSON.stringify( motion[motionIndex] )) ;
      }
    }
    else {
      // running end
	  setTimeout( callback, 100) ;
    }
  }
  loopSendMotion() ;

}

/*
  set servo degree
*/
var controlServo = function( servo, value ) {
  var url = "" ;
  if ( servo >= 0 && servo <= 15) { // is servo from wire
    url = robohero_url + "controller?servo=" + servo + "&value=" + value  ;
  }
  else { // servo from head
    url = robohero_url + "controller?gpid=12&value=" + value ;
  }

  $.get( url, function() {
  });

	try {
		iframe.contentWindow.setServo(servo, value) ;
	} catch(e) {
		console.log(e) ;
		console.log("controlServo to setServo Error") ;
	}
} ;

var runMotionInIFrame = function(name) {
	var data = motionDic[name] ;
	if ( data != undefined ) {
		try {
			iframe.contentWindow.executeMotion(data) ;
		} catch(e) {
			console.log(e) ;
			console.log("@@@ can't execute here @@") ;
		}
	}
	else {
		console.log("Motion is unefined @@") ;
	}
}
/*
	must of robohero motion is block function, so register them all (acron lib) ;
*/
var registerBlocklyWithRoboheroAsyncFunction = function(interpreter, scope) {

	var wrapper = interpreter.createAsyncFunction(
    function( key, callback) {

    var debug = 1 ;
    if ( debug ) {
      key = "" ;
    }
		if ( key == "motion_forward") {
			runPMcallback(1, callback) ;
			runMotionInIFrame(key) ;
		}
		else if ( key == "motion_backward") {
			runPMcallback(2, callback) ;
			runMotionInIFrame(key) ;
		}
		else if ( key == "motion_turnleft") {
			runPMcallback(4, callback) ;
			runMotionInIFrame(key) ;
		}
		else if ( key == "motion_turnright") {
			runPMcallback(3, callback) ;
			runMotionInIFrame(key) ;
		}
		else if ( key == "motion_moveleft") {
			runPMcallback(5, callback) ;
			runMotionInIFrame(key) ;
		}
		else if ( key == "motion_moveright") {
			runPMcallback(6, callback) ;
			runMotionInIFrame(key) ;
		}
		else if ( key == "motion_getup") {
			runPMcallback(12, callback) ;
			runMotionInIFrame(key) ;
		}
		else if ( key == "motion_standup") {
			runPMcallback(11, callback) ;
			runMotionInIFrame(key) ;
		}
		else if ( key == "motion_stand") {
			runPMcallback(99, callback) ;
			runMotionInIFrame(key) ;
		}
		else {

			var json = motionDic[key] ;
			console.log( "json = " + json) ;
			if ( json == undefined) {
				console.log("Error Wrong Key @@ , no Normal Motion found bbb ") ;
				setTimeout( callback, 100) ;
			}
			else {
				executeMotion_global( json, callback) ;
			}
		}
    });
	interpreter.setProperty(scope, 'Normal_Motion', wrapper);
}
