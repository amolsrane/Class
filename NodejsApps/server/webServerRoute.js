// 1. Create the emp Array with the Data as empNO,empName,deptName,salary,designation
//2. create http server useing node  which will accept serach critr. to read emp. this critr. may 
// accept deptname, desig,empName and should returmn emp data based on this criteria.
// 3. go to google  type the search as Mahesh Sabnis + Node js + Post 


// MVC using javascript
// 

var http = require('http')
var fs = require('fs');

var searchPage = fs.readFileSync('./../views/serachPage.html');

var server = http.createServer(function (req, resp) {
    console.log('req.method', req.method);





    var filter = req.url;
    var acceptData = filter.split('/')
    // console.log('acceptData', acceptData)
    var employee = [
        { empNo: 101, empName: 'Amol', empDept: 'IT', empSal: '90000', designation: 'ENG' },
        { empNo: 102, empName: 'B', empDept: 'QA', empSal: '20000', designation: 'QEN' },
        { empNo: 103, empName: 'C', empDept: 'QA', empSal: '50000', designation: 'QEN' },
        { empNo: 104, empName: 'D', empDept: 'IT', empSal: '60000', designation: 'SE' },
        { empNo: 105, empName: 'E', empDept: 'Temp', empSal: '90000', designation: 'SE' },
        { empNo: 106, empName: 'F', empDept: 'QA', empSal: '80000', designation: 'QEN' },
        { empNo: 107, empName: 'G', empDept: 'IT', empSal: '30000', designation: 'ENG' },
        { empNo: 108, empName: 'H', empDept: 'Temp', empSal: '10000', designation: 'SE' },
    ];
    
    var dataResponse1 = [];
    for (var i = 0; i < acceptData.length; i++) {
        var serach = acceptData[i];
        var serchno = serach.split('=');
        console.log('serchno', serchno)

        if (serchno[0] == 'empNo') {
            for (var j = 0; j < employee.length; j++) {
                if (employee[j].empNo == serchno[1]) {
                    dataResponse1.push(employee[j]);
                }
            }
        }

        if (serchno[0] == 'empDept') {
            for (var j = 0; j < employee.length; j++) {
                if (employee[j].empDept == serchno[1]) {
                    dataResponse1.push(employee[j]);
                }
            }
        }

        if (serchno[0] == 'empName') {
            for (var j = 0; j < employee.length; j++) {
                if (employee[j].empName == serchno[1]) {
                    dataResponse1.push(employee[j]);
                }
            }
        }
    }


    console.log('listening on port 9091',JSON.stringify(dataResponse1))

    resp.write(JSON.stringify(dataResponse1))// writing response
    resp.end();// end response


//------------------------------------------------------

    // var dataResponse=[];
    // for (var i=0;i<employee.length;i++){
    //     // if(employee[i].empNo=="101"){
    //         dataResponse.push(employee[i]);
    //     // }
    // }


    // resp.write(JSON.stringify(dataResponse))// writing response
    // resp.end();// end response

    // if (req.method === "GET") {
    //     resp.writeHead(200, { 'content-type': 'text/html' });
    //     resp.end(searchPage);
    // }   
    // if (req.method === "POST") {
    //     var productData = '';
    //     var dataResponseA=[];
    //     req.on('data', function (prd) {
    //         var data=JSON.parse(prd)

    //          for (var i=0;i<data.length;i++){
    //             dataResponseA.push(data[i]);
    // }
    // console.log('The received data is ' + dataResponseA.toString());

    //         console.log('prd ' + prd.toString());
    //         // productData += prd;
    //     }).on('end', function () {
    //         console.log('The received data is ' + productData.toString());
    //         resp.end('Data received  from you is ' + productData.toString());
    //     }); 
    // }





});

server.listen('9091')

console.log('listening on port 9091')

