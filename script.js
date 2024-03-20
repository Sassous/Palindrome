const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
    let text = textInput.value.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let reverseText = text.split("").reverse().join("");
    if(text === "") {
        result = alert("Please input a value");
    }
    if (text === reverseText) {
        result.innerText = `${textInput.value} is a Palindrome`;
        result.style.color = "var(--light-green)";
    } else {
        result.innerText = `${textInput.value} is not a Palindrome`;
        result.style.color = "var(--light-pink)";
    }
});


