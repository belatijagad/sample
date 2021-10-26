function navbarToggle() {
    var x = document.getElementById("navlink-sm");
    var y = document.getElementById("navlink-sm-toggle");
    
    if (x.className === "navlink-sm display-none") {
        x.className = "navlink-sm navlink-sm-active";
    } else if (x.className === "navlink-sm navlink-sm-active") {
        x.className = "navlink-sm display-none"
    }

    if (y.className === "navlink-sm-toggle p-2") {
        y.className = "navlink-sm-toggle-rotated p-2"
    } else if (y.className === "navlink-sm-toggle-rotated p-2") {
        y.className = "navlink-sm-toggle p-2"
    }
}