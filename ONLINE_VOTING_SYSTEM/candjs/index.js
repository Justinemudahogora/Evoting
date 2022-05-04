// javascript for index.html
const conteiner = document.querySelector('.candidates');
const voteBtn=document.querySelector('.voteBtn');
const url = 'http://localhost:3000/candidates/';
const Alert = new URLSearchParams(window.location.search).get('Alert');
if (Alert){
  alert("Your ballot has been successfully recorded")
}
const getingcandidate = async () => {
  var my_candidates=[]
  var my_data=[]
  const res = await fetch(url);
  const candidates_ = await res.json();
  const candidates = candidates_.sort(function(a,b){
    return b.votes - a.votes;
  });
  
  for (var i=0;i<candidates.length;i++){
    my_candidates.push(candidates[i].fname + candidates[i].lname)}
   
    for (var i=0;i<candidates.length;i++){
      my_data.push(parseInt(candidates[i].votes))}
  let template = '';
// console.log(my_candidates)
// console.log(my_data)
  candidates.forEach(candidate => {
    template += `
    
    <div class="candidates col-md-3">
    <table style="border:none"><tr><td>
    <img src=${candidate.img} width="150" height="150" style="object-fit:cover;"/></td></tr>
    <tr><td><b>Names:  ${candidate.fname}  ${candidate.lname}</b></td></tr>
    <tr><td><b>Code:  ${candidate.candidatecode}</b></p></tr>
    <tr><td><b>Votes: ${candidate.votes}</b></td></tr>
    <tr><td><a href="/details.html?id=${candidate.id}"><p style="color:#043058">read more</p></a></td></tr>
    <tr><td><button class="btn" style="background-color:#043058;color:white" onclick="openForm(${candidate.id})">Vote</button></td></tr>
    </tr>
    </table>
    </div>
   `;
  });
  conteiner.innerHTML = template;
  var my_chart=document.getElementById('my_chart').getContext('2d')
 

					var barChart=new Chart(my_chart,{
						type:'line',
						data:{
							labels:my_candidates,
							datasets:[{
								label:'votes',
								data:my_data,
								backgroundColor:['#4974a5','#b48b3d' , '#849684', '#926ce9', '#685374', 
												'#043058', '#3366E6', '#999966', '#99FF99','#B34D4D' ,
												'#80B300', '#FFB399']
              
							}]
						},
						options:{},
					})
console.log(my_candidates)		
};
const votes=async(candidate_id)=>{
 const respo= await fetch(url+candidate_id)
 const candidate=await respo.json()
  
 const res= await fetch(url+candidate_id,{
method:"PUT",
 body:JSON.stringify({
 img:candidate.img,
  fname:candidate.fname,
  lname:candidate.lname,
  gender:candidate.gender,
  address:candidate.address,
  candidatecode:candidate.candidatecode,
  description:candidate.description,
  born:candidate.born,
  education:candidate.education,
  position:candidate.position,
  email:candidate.email,
  contact:candidate.contact,
  status:candidate.status,
  votes:candidate.votes+1
  
 }),
  headers:{'content-type':'application/json'},
    });
    console.log(candidate.born)
  } 
 
    window.addEventListener('DOMContentLoaded', () => getingcandidate());



					






