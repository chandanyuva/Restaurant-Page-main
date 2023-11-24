const createmenuPage=()=>{
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const heading = document.createElement('h1');
    heading.textContent='our menu';

    const menuList = document.createElement('ul');
    
    const item1 = document.createElement('li');
    item1.textContent='pizaaa'
    const item2 = document.createElement('li');
    item2.textContent='burgurr'
    const item3 = document.createElement('li');
    item3.textContent='friess'
    menuList.appendChild(item1);
    menuList.appendChild(item2);
    menuList.appendChild(item3);

    pageContent.appendChild(heading);
    pageContent.appendChild(menuList);
    content.appendChild(pageContent);
};

export default createmenuPage;