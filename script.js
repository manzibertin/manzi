function isrepdigit(){
    let num = document.getElementById("text").value;
    let isnegative = num < 0;
    if(isnegative) return false;
    let strnum = String(num);
    let splitNum = strnum.split("");
    let result = splitNum.every((char) => char === strnum[0]);
    let answer =document.getElementById("answers");
    answer.innerHTML = result;
    return result;
}