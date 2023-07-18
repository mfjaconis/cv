
function updateProfileInfo(profileData) {
  
   const name = document.querySelector('.name')
   name.innerText = profileData.name


   const job = document.querySelector('.job')
   job.innerHTML = `<i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-indigo"></i><a href="${profileData.jobUrl}">${profileData.job} </a>`

   const location = document.querySelector('.location')
   location.innerHTML = `<i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-indigo"></i><a href="${profileData.locationUrl}">${profileData.location} </a>`
   
   const phone = document.querySelector('.phone')
   phone.innerHTML = `<i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-indigo"></i><a href="tel:${profileData.phone}">${profileData.phone} </a>`

   const email = document.querySelector('.email')
   email.innerHTML = `<i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-indigo"></i><a href="mailto:${profileData.email}">${profileData.email} </a>`
}



function updatePortfolio(profileData){
   const portfolio = document.querySelector('#projetos')
   portfolio.innerHTML = profileData.portfolio.map(project => {
      return `
         <h6 class="w3-text-indigo">
              <i class="fa fa-github fa-fw w3-margin-right"></i>
             <a href="${project.url}" target="_blank">${project.name}</a>
         </h6>          
         <hr>
      `
   }).join('')
}



(async () => {

   const profileData = await fetchProfileData()
   updateProfileInfo(profileData)
   updatePortfolio(profileData)
})() 