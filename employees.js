let employees=[
    {"code":100,"name":"ABC Electronics","phone":"9988998899","city":"chennai"},
    {"code":101,"name":"XYZ Electronics","phone":"9988998899","city":"chennai"},
];

module.exports.getemployees=(request,response)=>{
    response.writeHead(200,{"Content-type":"application/json"});
    response.write(JSON.stringify(employees));
    response.end();
}

module.exports.getemployees=(request,response,code)=>{
    response.writeHead(200,{"Content-type":"application/json"});
    
    let employeeResult=employees.find((employee)=>{
        return employee.code==code;
    });

    response.write(JSON.stringify(employeeResult));
    response.end();
}

module.exports.addemployee=(request,response,requestBody)=>{
    response.writeHead(200,{"Content-type":"application/json"});
    let inputData=JSON.parse(requestBody);
    console.log(inputData);
    if(inputData){
        employees.push(inputData);
    }
    response.end();
}