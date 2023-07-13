
 

function submit() {

    if(document.getElementById("item").value != "") {

        let li = document.createElement("li");
        li.innerHTML = document.getElementById("item").value + " ";


        let xButton = document.createElement("button");
        xButton.innerHTML = "X";



        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        // checkbox.style.float = "left";

        xButton.style.float = "right";
        xButton.style.marginLeft = "5px";
        xButton.style.backgroundColor = "#D2122E";
        xButton.style.border = "none";

        document.getElementById("list").appendChild(li);
        document.getElementById("item").value = "";

        li.appendChild(xButton);
        li.appendChild(checkbox);

        xButton.addEventListener("click", function() {
            li.remove();
        });

        checkbox.addEventListener("change", function() {
            if(checkbox.checked) {  
                li.style.backgroundColor = "#ff8928";
            } else {
                li.style.backgroundColor = "#2d545e";
            }
        });

    } 

}

function clearList() {

    document.getElementById("list").innerHTML = "";

}       

// document.getElementById("item").addEventListener("keydown", function(event) {
//     if(KeyboardEvent.keyCode === 13) {
//         event.preventDefault();
//         submit();
//     }
// });