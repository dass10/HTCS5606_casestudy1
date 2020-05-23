
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}
function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}

function register (){
    window.open("register.html", "_self");
}

function login(){
    window.open("loginregister.html", "_self");
}



//add to cart

function addToCart(e) {
    cart = document.getElementById("cartDiv");
    switch (e.id) {
        case "addfishfood1":
            qty = document.getElementById("fishfood1Qty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>fishfood1: <input type="number" class="cartInput" id = "cartfishfood1" pName = "fishfood1" price="9.99" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 9.99)
                    + '</p>');
            break;
        case "addfishfood":
            qty = document.getElementById("fishfoodQty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>fishfood: <input type="number" class="cartInput" id = "cartfishfood" pName = "fishfood" price="11.99" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 11.99)
                    + '</p>');
            break;
        case "addpetfd":
            qty = document.getElementById("petfdQty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>petfd: <input type="number" class="cartInput" id = "cartpetfd" pName = "petfd" price="19.99" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 19.99)
                    + '</p>');
            break;
        case "addchickfood":
            qty = document.getElementById("chickfoodQty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>chickfood: <input type="number" class="cartInput" id = "cartchickfood" pName = "chickfood" price="19.99" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 19.99)
                    + '</p>');
            break;
        case "addchickfd1":
            qty = document.getElementById("chickfd1Qty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>chickfd1: <input type="number" class="cartInput" id = "cartchickfd1" pName = "chickfd1" price="19.99" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 19.99)
                    + '</p>');
            break;
        case "henfd":
            qty = document.getElementById("henfdQty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>henfd: <input type="number" class="cartInput" id = "henfd" pName = "henfd" price="44.99" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 44.99)
                    + '</p>');

            break;
        case "parrotfd":
            qty = document.getElementById("parrotfd").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>parrotfd: <input type="number" class="cartInput" id = "parrotfd" pName = "parrotfd" price="19.99" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 19.99)
                    + '</p>');

            break;
        case "henfd1":
            qty = document.getElementById("henfd1").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>henfd1: <input type="number" class="cartInput" id = "henfd1" pName = "henfd1" price="10.99" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 10.99)
                    + '</p>');

            break;
        case "birdfd":
            qty = document.getElementById("birdfd").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>birdfd: <input type="number" class="cartInput" id = "birdfd" pName = "birdfd" price="14.99" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 14.99)
                    + '</p>');

            break;
        case "birdfd1":
            qty = document.getElementById("birdfd1").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>birdfd1: <input type="number" class="cartInput" id = "birdfd1" pName = "birdfd1" price="9.99" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 9.99)
                    + '</p>');
        default:
        // code block
    }

}

function addToInvoice() {

}

/**
 * Show invoice page
 */
function invoice() {

    voicePage = document.getElementById("voicePage");
    //Get the button that opens the modal
    var btn = document.getElementById("showInvoiceBut");

    //Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    //When the user clicks on the button, open the modal
    btn.onclick = function() {
        cart = document.getElementsByClassName("cartInput");
        voiceContent = document.getElementById("voice-content");
        Total = 0;
        var elems = document.getElementsByClassName("items");
        i = 0
        while (i<elems.length){
            elems[i].parentNode.removeChild(elems[i]);
        }


        i = 0;
        while (i < cart.length) {
            console.log(cart[i].id);
            qty = cart[i].value;
            switch (cart[i].id) {
                case "cartfishfood1":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">fishfood1: Qty:'+ qty +' Price:$' + (Number(qty) * 9.99)+ '</p>');
                    Total += (Number(qty) * 9.99);
                    break;
                case "cartfishfood":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">fishfood: Qty:'+ qty +' Price:$' + (Number(qty) * 11.99)+ '</p>');
                    Total += (Number(qty) * 11.99);
                    break;
                case "cartpetfd":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">petfd: Qty:'+ qty +' Price:$' + (Number(qty) * 19.99)+ '</p>');
                    Total += (Number(qty) * 19.99);
                    break;
                case "chickfood":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">chickfood: Qty:'+ qty +' Price:$' + (Number(qty) * 19.99)+ '</p>');
                    Total += (Number(qty) * 19.99);
                    break;
                case "chickfd1":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">chickfd1: Qty:'+ qty +' Price:$' + (Number(qty) * 19.99)+ '</p>');
                    Total += (Number(qty) * 19.99);
                    break;

                case "henfd":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">henfd: Qty:'+ qty +' Price:$' + (Number(qty) * 44.99)+ '</p>');
                    Total += (Number(qty) * 44.99);
                    break;

                case "parrotfd":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">parrotfd: Qty:'+ qty +' Price:$' + (Number(qty) * 19.99)+ '</p>');
                    Total += (Number(qty) * 19.99);
                    break;

                case "henfd1":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">henfd1: Qty:'+ qty +' Price:$' + (Number(qty) * 10.99)+ '</p>');
                    Total += (Number(qty) * 10.99);
                    break;

                case "birdfd":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">birdfd: Qty:'+ qty +' Price:$' + (Number(qty) * 14.99)+ '</p>');
                    Total += (Number(qty) * 14.99);
                    break;

                case "birdfd1":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">birdfd1: Qty:'+ qty +' Price:$' + (Number(qty) * 9.99)+ '</p>');
                    Total += (Number(qty) * 9.99);



                default:
                // code block
            }

            i++;

        }
        voiceContent.insertAdjacentHTML(
            'beforeend',
            '<p class = "items">Total: $'+ Total+'</p>');

        voicePage.style.display = "block";
    }

    //When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        voicePage.style.display = "none";
    }

    //When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == voicePage) {
            voicePage.style.display = "none";
        }
    }
}
