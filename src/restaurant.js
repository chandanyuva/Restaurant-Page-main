const createRestaurantHomePage =()=>{
    const content = document.querySelector("#content");
    const pageContent =  document.createElement("div");
    pageContent.classList.add('page-content');

    //create and append image
    const image = document.createElement('img');
    image.src = "./image.jpg"
    image.height = '300';
    pageContent.appendChild(image);

    //create and append heading
    const heading = document.createElement('h1');
    heading.innerText = 'welcome to our restaurent';
    pageContent.appendChild(heading);

    content.appendChild(pageContent);
}

export default createRestaurantHomePage;