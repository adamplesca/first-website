function filterProducts() {
    const searchBar = document.getElementById("searchBar");
    const product = document.getElementsByTagName("Product"); 
    
    for(x = 0; x < product.length; x++) {
        const name = product[x].querySelector("Name").textContent.toLocaleLowerCase();
        const code = product[x].querySelector("Code").textContent;
        const search = searchBar.value.toLocaleLowerCase();

        if(name.includes(search)) {
            product[x].style.display = "block";
        }
        else if(code.includes(search)) {
            product[x].style.display = "block";
        } 
        else{
            product[x].style.display = "none"; 
        }
    }
}