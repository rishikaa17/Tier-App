const tierInput = document.getElementById("tier");
console.log(tierInput);
const submitBtn = document.getElementById("submit");
const imageForm = document.getElementById("image-form");

imageForm.addEventListener('submit' , (event) =>{
event.preventDefault;
console.log("form submited");
// const formData = new FormData(imageForm);
// console.log(formData);
const imageItemInput = document.getElementById('image-item');
// if(tierInput.value === ''){
//     alert('please enter a valid image url');
//     return;
// }
const imageUrl = imageItemInput.value;
console.log(imageUrl);
imageItemInput.value = '';
});
submitBtn.addEventListener('dblclick' , (event) => {
    event.preventDefault();
    //to get access of the element on which this event was fired 
    const target = event.target;
    if(tierInput.value == ''){
        alert('Please enter a tier name ');
        return;
    }
    createTierList(tierInput.value);
    tierInput.value = '';
  
})
function createTierList (tierListName){

     const newTierList = document.createElement('div');
     newTierList.classList.add("tier-list");

     const heading = document.createElement("h1");
     heading.textContent = tierListName;

     const newTierListItems = document.createElement('div');
     newTierListItems.classList.add('tier-list-items');
     
     newTierList.appendChild(heading);
     newTierList.appendChild(newTierListItems);

     const tierSection =document.getElementById("tier-list-section");
     tierSection.appendChild(newTierList);
}
function createTierListItem(imageUrl){
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('item-container');
    const img = document.createElement('img');
    img.src = imageUrl;

    imageDiv.appendChild(img);

    const nonTierSection = document.getElementById('non-tier-section');
    nonTierSection.appendChild(imageDiv);
}