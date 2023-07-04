const accessKey="VRWwnG9WiFCL1D1_X_nG10yCnffsLUTMESpUKlqCCuQ";

const searchForm =document.getElementById("search-from");
const searchBox =document.getElementById("search-box");
const searchResult =document.getElementById("search-result");
const showMoreBtn =document.getElementById("show-more-btn");

let keyword="";
let page = 1;
async function searchImages(){
    keyword =searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;



    const reponse =await fetch(url);
    const data=await reponse.json();


    if (page===1){
        searchResult.innerHTML="";
    }




    console.log(data);

    const  results=data.results;

    results.map((result)=>{
        const  image = document.createElement("img");
        image.src=result.urls.small;

        const imageLink=document.createElement("a");
        imageLink.href= result.links.html;

        imageLink.target ="_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display = "block";

}
searchForm.addEventListener("submit",(e) =>{
    e.preventDefault();

    page=1;
    searchImages();
alert("wada")
})

showMoreBtn.addEventListener("click",()=>{
    page++;
    searchImages();
})
