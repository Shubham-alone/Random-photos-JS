const ImageContainerElement = document.querySelector(".image-container")

const changeBtn = document.querySelector(".btn")

changeBtn.addEventListener("click", () => {
    imageNum = 3;
     addNewImages();
});

function addNewImages () {

    for (let index = 0; index < imageNum; index++) {
        const newImgElement = document.createElement("img");
        newImgElement.src = 
           `https://picsum.photos/300?random=${Math.floor(Math.random()
                * 2000)}`;
    
        ImageContainerElement.appendChild(newImgElement);
        
    }
    
};

