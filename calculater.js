const number = document.querySelectorAll(".num");
const operator = document.querySelectorAll(".ope");
const AC = document.querySelector(".dull");
const display = document.querySelector(".display");
const eqaul = document.querySelector(".ans");


let s1 = "";
let s3 = "";
let s2 = [];
let ope1 = [];
let finalAns = 0;

eqaul.addEventListener("click", () => {
    s2.push(s3);
    console.log(ope1);
    console.log(s2);
    finalAns = opeartion();
    display.textContent = finalAns;
})

AC.addEventListener("click", () => {
    display.textContent = " ";
    s1 = " ";
    s2 = [];
    ope1 = [];
    s3 = "";
    finalAns = 0;
})


for (let num of number) {
    num.addEventListener("click", () => {
        if (display.textContent == finalAns) {
            s1 = " ";
            s2 = [];
            ope1 = [];
            s3 = "";
            finalAns = 0;
        }
        s1 += num.textContent;
        s3 += num.textContent;

        display.textContent = s1;
    })
}

operator.forEach((ope) => {
    ope.addEventListener("click", () => {
        if (display.textContent == finalAns) {
            s1 = " " + finalAns;
            s2 = [];
            ope1 = [];
            s3 = "";
            s2.push(s1);
            finalAns = 0;
        }
        else {
            s2.push(s3);
            s3 = "";
        }
        ope1.push(ope.textContent);



        s1 += " " + ope.textContent + " ";
        display.textContent = s1;

    })
})

const opeartion = () => {
    let i = 1;
    let j = 0;
    let ans = +s2[0];

    while (i < s2.length && j < ope1.length) {
        if (ope1[j] == "+") {
            ans += +s2[i];
            i++;
            j++;
            console.log("sum", ans);
        }
        if (ope1[j] == "-") {
            ans -= Number(s2[i]);
            i++;
            j++;
            console.log("min", ans);
        }
        if (ope1[j] == "÷") {
            ans /= +s2[i];
            i++;
            j++;
            console.log("div", ans);
        }
        if (ope1[j] == "x") {
            ans *= +s2[i];
            i++;
            j++;
            console.log("mul", ans);
        }
        console.log("hello");
    }
    console.log(ans);
    return ans;
}