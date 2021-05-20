window.addEventListener("DOMContentLoaded", function(e){

    const locationBox = document.querySelector("#location");

    const locationObj = {
        latitude: "unknown",
        longitude: "unknown"
    }

    window.navigator.geolocation.getCurrentPosition(
        function(position) {
            locationObj = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
            locationBox.value = JSON.stringify(locationObj);
        },
        function(error) {
            locationBox.value = JSON.stringify(locationObj);
        }
    );

    const order = localStorage.getItem("order");

    if(order){
        const pieOrder = JSON.parse(order);

        const orderInput = document.querySelector("#pie-order");
        orderInput.value = order;

        const pie = document.querySelector(".pie");

        const title = pie.querySelector(".title");
        const price = pie.querySelector(".price");
        const desc = pie.querySelector(".desc");

        title.innerText = pieOrder.title;
        price.innerText = pieOrder.price;
        desc.innerText = pieOrder.desc;

        const img = pie.querySelector("img");
        img.setAttribute("src", `images/${pieOrder.id}.jpg`);
        img.setAttribute("alt", pieOrder.title);
    }
});