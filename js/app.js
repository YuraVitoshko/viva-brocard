(() => {
    "use strict";
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    document.addEventListener("DOMContentLoaded", (function() {
        const buttons = document.querySelectorAll(".hero__btn");
        const manSection = document.getElementById("man");
        const womanSection = document.getElementById("woman");
        buttons.forEach((button => {
            button.addEventListener("click", (function() {
                buttons.forEach((btn => btn.classList.remove("btn--active")));
                this.classList.add("btn--active");
                if (this.textContent.trim() === "Для нього") {
                    manSection.style.display = "block";
                    womanSection.style.display = "none";
                } else {
                    manSection.style.display = "none";
                    womanSection.style.display = "block";
                }
            }));
        }));
        document.querySelector(".hero__btn.btn--active")?.click();
    }));
    document.addEventListener("DOMContentLoaded", (function() {
        const buttons = document.querySelectorAll(".hero__btn");
        const manSection = document.getElementById("man");
        const womanSection = document.getElementById("woman");
        function handleClick() {
            buttons.forEach((btn => btn.classList.remove("btn--active")));
            this.classList.add("btn--active");
            if (this.textContent.trim() === "Для нього") {
                manSection.style.display = "block";
                womanSection.style.display = "none";
            } else {
                manSection.style.display = "none";
                womanSection.style.display = "block";
            }
        }
        buttons.forEach((button => {
            button.addEventListener("click", handleClick);
            button.addEventListener("touchstart", handleClick, {
                passive: true
            });
        }));
        if (document.querySelector(".hero__btn.btn--active")?.textContent.trim() === "Для нього") {
            manSection.style.display = "block";
            womanSection.style.display = "none";
        } else {
            manSection.style.display = "none";
            womanSection.style.display = "block";
        }
    }));
    window["FLS"] = true;
})();