var product_center = document.getElementsByClassName("product-center container");
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    console.log(this);
    if (this.readyState == 4 && this.status == 200) {
        //products.innerHTML = JSON.stringify(this.response);
        var data = this.response;
        var products = data.products;
        console.log(products);
        product_center.innerHTML = '';
        for (var i = 0; i < products.length; i++) {
            var div1 = document.createElement('p');
            div1.innerHTML = products[i].title;
            product_center.appendChild(div1);



            /*  products[i].title
                products[i].image
                products[i].price
             */

        }

        //console.log(JSON.parse(this.response));
    }
};
xhr.open("GET", "products.json", true);
xhr.responseType = "json";
xhr.send();

