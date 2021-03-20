var selectedRow=null;

function onformsubmit(){
    if(validation()){
        var formdata=readformdata();
    if(selectedRow==null)
       insertNewRecord(formdata);
    else
    updatedata(formdata);

    resetform();

    }
}

function readformdata(){
    var formdata={};
    formdata["fullname"]=document.getElementById("fullname").value;
    formdata["empcode"]=document.getElementById("empcode").value;
    formdata["salary"]=document.getElementById("salary").value;
    formdata["city"]=document.getElementById("city").value;
    return formdata;
}

function insertNewRecord(data){
    var table=document.getElementById("employeelist").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);
    cell1=newRow.insertCell(0);
    cell1.innerHTML=data.fullname;
    cell2=newRow.insertCell(1);
    cell2.innerHTML=data.empcode;
    cell3=newRow.insertCell(2);
    cell3.innerHTML=data.salary;
    cell4=newRow.insertCell(3);
    cell4.innerHTML=data.city;
    cell4=newRow.insertCell(4);
    cell4.innerHTML=`<a onclick="onedit(this)">edit</a>
                     <a onclick="ondelete(this)">delete</a>`;

}
function resetform(){
    document.getElementById("fullname").value="";
    document.getElementById("empcode").value="";
    document.getElementById("salary").value="";
    document.getElementById("city").value="";
    selectedRow=null;
}
function onedit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById("fullname").value=selectedRow.cells[0].innerHTML;
    document.getElementById("empcode").value=selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value=selectedRow.cells[2].innerHTML;
    document.getElementById("city").value=selectedRow.cells[3].innerHTML;
 
}
function updatedata(formdata){
    selectedRow.cells[0].innerHTML=formdata.fullname;
    selectedRow.cells[1].innerHTML=formdata.empcode;
    selectedRow.cells[2].innerHTML=formdata.salary;
    selectedRow.cells[3].innerHTML=formdata.city;
}
function ondelete(td){
    if(confirm("Are you sure you want to delete this record?")){
        row=td.parentElement.parentElement;
    document.getElementById("employeelist").deleteRow(row.rowIndex);
    resetform();
    }
}
function validation(){
    isValid=true;
    if(document.getElementById("fullname").value==""){
        isValid=false;
        document.getElementById("fullnamevalidationerror").classList.remove("hide");
    }
    else{
        isValid=true;
        if(!document.getElementById("fullnamevalidationerror").classList.contains("hide"))
        document.getElementById("fullnamevalidationerror").classList.add("hide");
    }
    return isValid;
}