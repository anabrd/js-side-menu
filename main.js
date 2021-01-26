function $(query, arr) {
    let res = document.querySelectorAll(query);
    let output = undefined;

    switch (res.length) {
        case 0:
            break;
        case 1:
            if (arr) {
                output = [];
                output.push(res[0]);
            } else {
                output = res[0];
            }
            break;

        default:
            output = [];
            for (let i = 0; i < res.length; i++) {
                output.push(res[i])
            }
            break;
    }
    return output;
}

function expandToggle(e) {
    // console.log(e)
    e.stopPropagation();
    for (let i = 0; i < e.target.children.length; i++) {

        let display = e.target.children[i].style.display;

        if (display == "none" || display == "") {
            e.target.children[i].style.display = "block";
            if (e.target.children[i].classList.contains("collapsable") == false) {
                e.stopPropagation();
                e.target.children[i].addEventListener("click", info)
            }
        } else {
            e.target.children[i].style.display = "none";
        }
    }
}

for (let i = 0; i < $(".collapsable").length; i++) {
    $(".collapsable")[i].addEventListener("click", expandToggle);
}


function info(e) {
    alert(`You are being redirected to ${e.target.innerText}`)
}

