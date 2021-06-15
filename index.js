body = document.querySelector(".body");
social=document.querySelector('.social');

toggleBtn=document.querySelector('.toggleBtn');
darkMode=document.querySelector('.dark-mode');
mode=document.querySelector('.mode');

socialFollower=document.querySelectorAll('.follower-count');
username=document.querySelectorAll('.user-name');
box1=document.querySelector('.box-1');
box2=document.querySelector('.box-2');
box3=document.querySelector('.box-3');
box4=document.querySelector('.box-4');
OverText=document.querySelector('.Over-text');
over=document.querySelectorAll(".over1");
overcount=document.querySelectorAll('.over-count');
overpara=document.querySelectorAll('.over-para');



toggleBtn.addEventListener('click',() =>{
  body.classList.toggle("light-Body");
  toggleBtn.classList.toggle("light-Toggle");
  social.classList.toggle("light-social");
  darkMode.classList.toggle("light-mode");
  mode.classList.toggle("lightMode");
  box1.classList.toggle("light-box");
  box2.classList.toggle("light-box");
  box3.classList.toggle("light-box");
  box4.classList.toggle("light-box");
  OverText.classList.toggle("light-social");
  socialFollower.forEach(socialFollower=>{
    socialFollower.classList.toggle("light-socialFollower");
  });
  username.forEach(username=>{
    username.classList.toggle("light-username");
  });
  over.forEach(over=>{
    over.classList.toggle("light-box");
  });
  overcount.forEach(overcount=>{
    overcount.classList.toggle("light-socialFollower");
  });
  overpara.forEach(overpara=>{
    overpara.classList.toggle("light-para");
  });



});
