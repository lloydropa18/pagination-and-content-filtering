
// Variables
const searchInput = document.getElementById('search');
const searchBtn  = document.getElementById('searchBtn');
const pages =  document.getElementById('pages');
const userName = document.querySelectorAll('.userName');
const students = document.querySelectorAll('.student');


// Search Function
function search(){
    const value = searchInput.value;
    const exp = new RegExp(value, 'i'); 
    userName.forEach(name => {
        const match = exp.test(name.innerHTML);
        // If the input does not match add hide class to the element
        if (!match){ 
            name.parentNode.parentNode.parentNode.parentNode.classList.add('hide');       
        } else if (match){
            name.parentNode.parentNode.parentNode.parentNode.classList.remove('hide');
            if (value === ""){
                addHideClass('page1');
            }
        }
    })  
}

// Hide the student 
function addHideClass(page){
    students.forEach(student => {
        if (!student.classList.contains(page)){
            student.classList.add('hide');
        } else {
            student.classList.remove('hide');
        }
    })
}


// Event Handlers
pages.addEventListener('click',(e)=>{
    if (e.target.tagName === 'BUTTON'){
        if (e.target.textContent === '1'){
            addHideClass('page1');
        } else if (e.target.textContent === '2'){
            addHideClass('page2');
        } else if (e.target.textContent === '3'){
            addHideClass('page3');
        } else if (e.target.textContent === '4'){
            addHideClass('page4');
        }
    }
})
searchBtn.addEventListener('click',search,false);

searchInput.addEventListener('focus',()=>{
    searchInput.removeAttribute('placeholder');
})
    
searchInput.addEventListener('blur',()=>{
    searchInput.setAttribute('placeholder','Search for Students..');
})