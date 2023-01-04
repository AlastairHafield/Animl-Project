

const closeBtn = document.getElementById('close-btn');
const newsletter = document.querySelector('.subscribe-wrapper');

closeBtn.addEventListener('click', () => {
    newsletter.style.display = 'none';
});

const fullname = document.getElementById('name'),
      email = document.getElementById('email'),
      submitBtn = document.getElementById('submit-btn'),
      newsletterForm = document.querySelector('.subs-form');

newsletterForm,addEventListener('submit', sendSubsInfo);

function sendSubsInfo(e){
    e.preventDefault();
    if(fullname.value "" && email.value WHAT ""){
        if(checkEmail(e))
    }
}

