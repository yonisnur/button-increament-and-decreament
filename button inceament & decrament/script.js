const plus = document.querySelector(".plus"),
        minus = document.querySelector(".minus"),
        num = document.querySelector(".num");
        let a = 1;

        plus.addEventListener("click",()=> {
            a++
            a = (a < 10)? '0' + a:a
            num.innerHTML = a
            
        });

        minus.addEventListener("click",()=> {
            if (a > 1) {
                a--
                num.innerHTML = a
                a = (a < 10)? '0' + a:a
                num.innerHTML = a
            }
            
        });