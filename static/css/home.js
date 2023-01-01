function cr_openSearchDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function cr_closeSearchDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function cr_selectFilteredValue() {
    document.getElementById("search_input").value = event.target.getAttribute("data-value");
    closeSearchDropdown();
}

function cr_filterSearchDropdown() {
    var input, filter, ul, li, span, i;
    input = document.getElementById("search_value");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    span = div.getElementsByTagName("span");
    for (i = 0; i < span.length; i++) {
        txtValue = span[i].textContent || span[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            span[i].style.display = "";
        } else {
            span[i].style.display = "none";
        }
    }
}

function openSearchDropdown() {
    document.getElementById("dis_myDropdown").classList.toggle("show");
}

function closeSearchDropdown() {
    document.getElementById("dis_myDropdown").classList.toggle("show");
}

function selectFilteredValue() {
    document.getElementById("dis_search_input").value = event.target.getAttribute("data-value");
    closeSearchDropdown();
}

function filterSearchDropdown() {
    var input, filter, ul, li, span, i;
    input = document.getElementById("dis_search_value");
    filter = input.value.toUpperCase();
    div = document.getElementById("dis_myDropdown");
    span = div.getElementsByTagName("span");
    for (i = 0; i < span.length; i++) {
        txtValue = span[i].textContent || span[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            span[i].style.display = "";
        } else {
            span[i].style.display = "none";
        }
    }
}