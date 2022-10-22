(function () {
    let btns = document.querySelectorAll(".btn");
    let imgs = document.querySelectorAll(".box-img");

    btns.forEach((bt) => {
        bt.addEventListener("click", (e) => {
            e.preventDefault()
            
            let filter = e.target.dataset.filter;

            imgs.forEach((item) => {
                if (filter === 'all') {
                    item.style.display = 'block';
                } else {
                    if (item.classList.contains(filter)) {
                        item.style.display = 'block';
                    }
                    else {
                        item.style.display = 'none';
                    }
                }
            })
        })
    })
})();
