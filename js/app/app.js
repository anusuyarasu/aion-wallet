var web3= new Web3(new Web3.providers.HttpProvider('http://10.10.0.223:8545'));
var arr=[];

function fun(){
    $('#balance').hide();
    //$('#unlock').hide();
    var a =web3.personal.listAccounts;
  // document.getElementById('listaccount').innerHTML=a;
  $('#body_bank').html(''); 
        for(var i=0; i<a.length; i++){
         
        $("#body_bank").append('<tr><td><a href=# data-toggle="modal" data-target="#myModal" onclick="account('+i+')">'+a[i]+'</a></td></tr>');
       // arr.push(a[i]);
    }                        
}
function account(a1){
    var a =web3.personal.listAccounts;
    for(var i=0;i<a.length;i++){
        arr.push(a[i]);
    }
     document.getElementById('address').value=arr[a1];
  
}

function create_account(){

    var password1=document.getElementById('value1').value;
    var password2=document.getElementById('value2').value;
    if(password1=="" && password2 == ""){
           alert("Enter the password");
           document.getElementById('value1').value="";
           document.getElementById('value2').value="";
    }
    else if(password1 != "" && password2 != ""){
        if(password1==password2){
        var b=web3.personal.newAccount(password1);
        document.getElementById('account').innerHTML=b;
        alert("Account Created");
      //  arr.push(b);
       // document.getElementById('value1').value="";
         //  document.getElementById('value2').value="";
        //console.log(b);

    }
        else{
            alert("password mismatch");
            document.getElementById('value1').value="";
            document.getElementById('value2').value="";
        }
    }
}
function unlock_account(){
    var address=document.getElementById('address').value;
    var password=document.getElementById('pass').value;
    var unlock=web3.personal.unlockAccount(address,password);
    if(unlock== true){
        //$('#unlock').hide();
        $('#balance').show();
        alert("your logged in");
        var balance=document.getElementById('address').value;
        var b =web3.eth.getBalance(balance).shiftedBy(-18).toString();
        document.getElementById('vaddress').innerHTML= address;
        document.getElementById('vbalance').innerHTML= b;
        document.getElementById('address').value="";
        document.getElementById('pass').value="";
    }
    else{
        alert("Password wrong");
        document.getElementById('address').value="";
        document.getElementById('pass').value="";
    }
} 