
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
                    'fishfood1',
                    '<p>Bread: <input type="number" class="cartInput" id = "cartfishfood1" pName = "fishfood1" price="3.2" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 3.2)
                    + '</p>');
            break;
        case "addfishfood":
            qty = document.getElementById("fishfoodQty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>fishfood: <input type="number" class="cartInput" id = "cartfishfood" pName = "fishfood" price="2.9" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 2.9)
                    + '</p>');
            break;
        case "addpetfd":
            qty = document.getElementById("petfdQty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>petfd: <input type="number" class="cartInput" id = "cartpetfd" pName = "petfd" price="9" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 9)
                    + '</p>');
            break;
        case "addchickfood":
            qty = document.getElementById("chickfoodQty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>Chickenfood: <input type="number" class="cartInput" id = "cartchickfood" pName = "chickfood" price="4.5" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 4.5)
                    + '</p>');
            break;
        case "addchickfd1":
            qty = document.getElementById("chickfd1Qty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>chickfd1: <input type="number" class="cartInput" id = "cartchickfd1" pName = "chickfd1" price="2.32" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 2.32)
                    + '</p>');
            break;
        case "henfd":
            qty = document.getElementById("henfdQty").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>Henfood: <input type="number" class="cartInput" id = "henfd" pName = "henfd" price="2.32" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 2.32)
                    + '</p>');

            break;
        case "parrotfd":
            qty = document.getElementById("parrotfd").value;
            cart
                .insertAdjacentHTML(
                    'beforeend',
                    '<p>Parrotfood: <input type="number" class="cartInput" id = "parrotfd" pName = "parrotfd" price="2.32" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 2.32)
                    + '</p>');

            break;
        case "henfd1":
            qty = document.getElementById("henfd1").value;
            cart
                .insertAdjacentHTML(
                    'henfd1',
                    '<p>Henfood: <input type="number" class="henfd1" id = "henfd1" pName = "henfd1" price="2.32" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 2.32)
                    + '</p>');

            break;
        case "birdfd":
            qty = document.getElementById("birdfd").value;
            cart
                .insertAdjacentHTML(
                    'birdfd',
                    '<p>birdfd: <input type="number" class="birdfd" id = "birdfd" pName = "birdfd" price="2.32" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 2.32)
                    + '</p>');

            break;
        case "birdfd1":
            qty = document.getElementById("birdfd1").value;
            cart
                .insertAdjacentHTML(
                    'birdfd1',
                    '<p>birdfd1: <input type="number" class="birdfd1" id = "birdfd1" pName = "birdfd1" price="2.32" value="'
                    + qty
                    + '"> Price:$'
                    + (Number(qty) * 2.32)
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
                        '<p class = "items">fishfood1: Qty:'+ qty +' Price:$' + (Number(qty) * 3.2)+ '</p>');
                    Total += (Number(qty) * 3.2);
                    break;
                case "cartfishfood":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">fishfood: Qty:'+ qty +' Price:$' + (Number(qty) * 2.9)+ '</p>');
                    Total += (Number(qty) * 2.9);
                    break;
                case "cartSpread":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">Spread: Qty:'+ qty +' Price:$' + (Number(qty) * 9)+ '</p>');
                    Total += (Number(qty) * 9);
                    break;
                case "cartMilk1":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">Spread: Qty:'+ qty +' Price:$' + (Number(qty) * 4.5)+ '</p>');
                    Total += (Number(qty) * 4.5);
                    break;
                case "cartMilk2":
                    voiceContent.insertAdjacentHTML(
                        'beforeend',
                        '<p class = "items">Spread: Qty:'+ qty +' Price:$' + (Number(qty) * 2.32)+ '</p>');
                    Total += (Number(qty) * 2.32);
                    break;
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
