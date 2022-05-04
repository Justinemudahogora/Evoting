// javascript for create.html

const createForm = document.querySelector('form');
const createBtn = document.querySelector('button');

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});



const addcandidate = async (e) => {
  e.preventDefault();
  const file = document.getElementById('img').files[0];
  

  let info = {
    img: await toBase64(file),
    fname: createForm.fname.value,
    lname: createForm.lname.value,
    gender: createForm.gender.value,
    address: createForm.address.value,
    email: createForm.email.value,
    contact: createForm.contact.value,
    candidatecode: createForm.candidatecode.value,
    description: createForm.description.value,
    born: createForm.born.value,
    position: createForm.position.value,
    education: createForm.education.value,
    status: createForm.status.value,
    votes:0,
  };

  await fetch('http://localhost:3000/candidates/', {
    method: 'POST',
  body: JSON.stringify(info),
 headers: { 'Content-Type': 'application/json' },
 });
  console.log(info)
 window.location.replace('/candidates.html');
};

createForm.addEventListener('submit', addcandidate);