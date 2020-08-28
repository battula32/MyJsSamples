console.log("The rest sample");
// var HttpClient = function(){
//     this.get = function(myUrl, myCallback){
//         var myHttpRequest = new XMLHttpRequest();
//         myHttpRequest.onreadystatechange = function(){
//             if(myHttpRequest.readyState == 4 && myHttpRequest.status == 200)
//             {
//                 myCallback(myHttpRequest.responseText);
//             }
//         }

//         myHttpRequest.open("GET", myUrl, true);
//         myHttpRequest.send(null);
//     }
// }

// var url = "http://localhost:43915/WcfRestServiceSample.MyService/Employees"
// var client = new HttpClient();
// client.get(url, function(response)
// {
//     //var response1 = JSON.parse(response);
//     console.log(response);
//     alert(response);
// });
var url = "https://myazurelearnfunctionapp-brb.azurewebsites.net/api/HttpTrigger1?code=28MEPFKRh7dyE27n9Uu7hlNo1e9qIR5ja5YbKVfUM/VG57LqL7kqcw=="
let h = new Headers();
h.append('Accept', 'application/json');
let req = new Request(url,{
    method: 'POST',
    headers: h,
    body:JSON.stringify({
        "readings": [
            {
                 "driveGearId": 1,
                 "timestamp": 1534263995,
                 "temperature": 25
            },
            {
                 "driveGearId": 3,
                 "timestamp": 1534264048,
                 "temperature": 45
            },
            {
                "driveGearId": 18,
                "timestamp": 1534264050,
                "temperature": 60
            }
        ]
    }),
    mode:'no-cors'
});

var result = fetch(req).then((response)=>{
    if(response.ok)
    {
        console.log(response);
       return response.json();
    }else{
        console.log(response.status);
        throw new Error('Bad status code: ' +response.status);
    }

    }).then((jsonData)=>{
            console.log(jsonData);
            }).catch((err)=>{
                console.log("Error: " +err.message);
            });

console.log(result);