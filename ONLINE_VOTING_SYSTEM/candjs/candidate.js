
	var myid=null;
	var image2=null;
	 async function openForm (id) {
		const res = await fetch(url);
  const candidates_ = await res.json();
  const candidates = candidates_.sort(function(a,b){
    return b.votes - a.votes;
  });
 

 var candidate= await candidates.find(element => element.id == id);
 console.log(candidate)
 todof.fname.value=candidate.fname;
 todof.lname.value=candidate.lname;
 todof.candidatecode.value=candidate.candidatecode;
 todof.description.value=candidate.description;
 todof.votes.value=candidate.votes;
 todof.born.value=candidate.born;
 todof.position.value=candidate.position;
 todof.education.value=candidate.education;
 todof.gender.value=candidate.gender;
 todof.address.value=candidate.address;
 todof.email.value=candidate.email;
 todof.contact.value=candidate.contact;
 todof.status.value=candidate.status;
//  todof.image.value=candidate.img;
		console.log(id)
image2=candidate.img;
  document.getElementById("myForm").style.display = "block";
myid=id
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
	  $(".nav").click(function(){
	    $("#mySidenav").css('width','70px');
	    $("#main").css('margin-left','70px');
	    $(".logo").css('visibility', 'hidden');
	    $(".logo span").css('visibility', 'visible');
	     $(".logo span").css('margin-left', '-10px');
	     $(".icon-a").css('visibility', 'hidden');
	     $(".icons").css('visibility', 'visible');
	     $(".icons").css('margin-left', '-8px');
	      $(".nav").css('display','none');
	      $(".nav2").css('display','block');
	  });

	$(".nav2").click(function(){
	    $("#mySidenav").css('width','300px');
	    $("#main").css('margin-left','300px');
	    $(".logo").css('visibility', 'visible');
	     $(".icon-a").css('visibility', 'visible');
	     $(".icons").css('visibility', 'visible');
	     $(".nav").css('display','block');
	      $(".nav2").css('display','none');
	 });
// javascript for index.html

const conteiner = document.querySelector('.candidates')
const url = 'http://localhost:3000/candidates/';

const getingcandidate = async () => {
  var my_candidates=[]
  var my_data=[]
  const res = await fetch(url);
  const candidates_ = await res.json();
  const candidates = candidates_.sort(function(a,b){
    return b.votes - a.votes;
  });
  
  for (var i=0;i<candidates.length;i++){
    my_candidates.push(candidates[i].name)}
   
    for (var i=0;i<candidates.length;i++){
      my_data.push(parseInt(candidates[i].votes))}
  let template = `
  <div class="candidates col-md-4" style="margin-top:20px">
    <table>
        <tr>
        <th>Image</th>
        <th>Names</th>
        <th>Candidate's Code</th>
<th>Gender</th>
<th>Email</th>
<th>Contact</th>
<th>Martial Status</th>
</tr>
`;
  candidates.forEach(candidate => {
    template += `
    
   
<tr>
    <td><img src=${candidate.img} width="50" height="50"style="object-fit:cover;"/></td>
    <td><b> ${candidate.fname} ${candidate.lname}</b></td>
    <td><b> ${candidate.candidatecode}</b></p>
	<td><b>${candidate.gender}</b></td>
    <td><b> ${candidate.email}</b></td>
	<td><b> ${candidate.contact}</b></td>
	<td><b> ${candidate.status}</b></td>
    <td><a  href="#" class="EditBtn" style="color:white;" onclick="openForm(${candidate.id})"><i class="fa fa-edit icons">Edit</a></td>
    <td><a  href="#" class="deleteBtn" style=color:white;" onclick="deletes(${candidate.id})"><i class="fa fa-trash icons">Delete</a></td>
</tr>
    
   `;
  });
  template+=`</table>
    </div>`;
  conteiner.innerHTML = template;
  
		
};
const deletes=async(candidate_id)=>{


if (window.confirm("are you sure you want to delete this Candidate?")){
await fetch('http://localhost:3000/candidates/' +candidate_id ,{
  method: "DELETE"
});
window.location.replace('/candidates.html');
}
else{
console.log("cancelled")
window.location.replace('/candidates.html')
}
}
const candidate_id= new URLSearchParams(window.location.search).get('id')
const todof=document.querySelector('#edit')
const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
const editTodo = async () => {
const file = document.getElementById('img').files
var image="";
if(file.length===0){
image=image2
 }
else{
	image= await toBase64(file[0])
}
const res= await fetch('http://localhost:3000/candidates/'+myid,
{
    method:'PUT',
    body:JSON.stringify({
        img:image,
        fname:todof.fname.value,
		lname:todof.lname.value,
		candidatecode:todof.candidatecode.value,
		votes:todof.votes.value,
		description:todof.description.value,
		born:todof.born.value,
		position:todof.position.value,
		education:todof.education.value,
		gender:todof.gender.value,
		address:todof.address.value,
		email:todof.email.value,
		contact:todof.contact.value,
		status:todof.status.value,
        
		
    }),
    headers:{'content-type':'application/json'},
});

console.log(res)

//window.location.replace('candidates.html')
};


// todof.addEventListener('submit',editTodo);
// window.addEventListener('DOMContentLoaded',async (e)=>{
//     e.preventDefault();
//     const respo=await fetch('http://localhost:3000/candidates/' +candidate_id);
//      const data2= await respo.json();
// todof.img.src=data2.img;
// todof.name.value=data2.name;
// todof.candidatecode.value=data2.candidatecode;
// todof.description.value=data2.description;
// console.log(data2.candidatecode)
// })


    window.addEventListener('DOMContentLoaded', () => getingcandidate());

