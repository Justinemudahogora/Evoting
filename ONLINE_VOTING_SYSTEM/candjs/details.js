// javascript for details.html

const id = new URLSearchParams(window.location.search).get('id');


const candidatecontent =document.querySelector('.details')
const deleteBtn=document.querySelector('.deleteBtn');

const getDetails = async () => {
  const res = await fetch('http://localhost:3000/candidates/' + id);
 //const res = await fetch(url + id);
  const candidate = await res.json();

  let template = `
  <div class="container">
  <a href="allcandidate.html" style="color:#043058;margin-left:25px;" class="navbar-brand headerFont text-lg"><strong><i class="fas">&#xf0a8;</i>All Candidates</strong></a>
                  
      <div class="card">
  
            <div class="preview col-md-2">
        
              <div class="image overflow-hidden"style="margin-right:20px;background-color:white;">
                <img style="object-fit:cover;" src=${candidate.img} />
              <div>
              <h5 class="price"><span>${candidate.fname}&nbsp;${candidate.lname}</span></h5>
              <h5 class="price"> <span>Votes:${candidate.votes}</span></h5>
              <h6 class="price"><span>Description:${candidate.description}</span></h6>
              <h5 class="price"><span>Candidate's Code:${candidate.candidatecode}</span></h5>
                 </div> 
                 </div> 
              </div>
              <div>
                <!-- Profile tab -->
                <!-- About Section -->
                <div class="preview">
                
                <div style="background-color:white;border-radius:8px;height='300';">
                    <br>
                    <h5 class="price"><span class="tracking-wide"><i style="font-size:24px;" class="fa">&#xf406;</i>About</span></h5>
                            <div class="grid col-md-6">
                            <divclass="details col-md-2">
                            <h5 class="price"><span>First Name: ${candidate.fname}</span></h5>
                            <h5 class="price"><span>Last Name: ${candidate.lname}</span></h5>
                          
                                <h5 class="price"><span>Gender: ${candidate.gender}</span></h5>
                                <h5 class="price"><span>Birthday: ${candidate.born}</span></h5>
                                
                                </div>
                                
                            <h5 class="price"><span>Current Address: ${candidate.address}</span></h5>
                                <h5 class="price"><span>Email: ${candidate.email}</span></h5>
                                <h5 class="price"><span>Maritial Status: ${candidate.status}</span></h5>
                                <h5 class="price"><span>Contact no: ${candidate.contact}</span></h5>
                                <br>
                                
                      
                            </div>
              </div>
              </div>
              <br>
              <div class="details col-md-6" style="background-color:white;border-radius:8px;width:83%;margin-left:4.5px;">
         
         <h5 class="price"><span class="tracking-wide"><i style="font-size:24px;" class="fa">&#xf19d;</i>Education</span></h5>
            <h5 class="price"><span>${candidate.education}</span></h5>

            <div class="details col-md-4">
            <h5 class="price"><span class="tracking-wide"><i style="font-size:24px;" class="fa">&#xf15c;</i>Experience</span></h5>
              <h5 class="price"><span>${candidate.position}</span></h5>
              </div>
            </div>
              </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   `;
   candidatecontent.innerHTML = template;
};
deleteBtn.addEventListener("click",async()=>{
await fetch('http://localhost:3000/candidates/' + id ,{
  method: "DELETE"
});
window.location.replace('/allcandidates.html');
})
window.addEventListener('DOMContentLoaded', () => getDetails());
