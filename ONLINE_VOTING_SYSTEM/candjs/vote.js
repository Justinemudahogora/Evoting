
// const voteform = document.querySelector('form');
// voteform.addEventListener('submit',function(e){
    const Email = new URLSearchParams(window.location.search).get('email');
    const id = new URLSearchParams(window.location.search).get('id');
    var email;
    var candidat=null
    var closebtns = document.getElementsByClassName("close");
    var i;
for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    document.getElementById("alert").style.display = "none";
  });
}
    const getvotes = async () => {
    const res = await fetch('http://localhost:3000/myEmail/');
    const emails_ = await res.json();
    email= await emails_.find(element => element.email== Email);
    
    }
    const votes = async() =>{
    var mycode=document.getElementById("code").value
     
    if(mycode==email.code){
   
    const response = await fetch('http://localhost:3000/candidates/'+id);
    const candidate= await response.json();
 const res= await fetch('http://localhost:3000/candidates/'+id,{
method:"PATCH",
 body:JSON.stringify({
  votes:parseInt(candidate.votes)+1
  }),
  headers:{'content-type':'application/json'},
  
    });
  
window.location.replace('/allcandidate.html?Alert=true')  
    }
    else{
document.getElementById("alert").style.display="block";

    }
    
    }
    
    
    
    
    
    window.addEventListener('DOMContentLoaded', () => getvotes());


