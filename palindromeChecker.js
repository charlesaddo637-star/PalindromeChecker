const input=document.getElementById("text-input");
const check_btn=document.querySelector("#check-btn");
const result =document.querySelector("#result");
function cleanString(str){
  return str.replace(/[^a-zA-Z0-9]/,"")
}
function isPalindrome(word){
  let nword=word.toLowerCase()
  if (cleanString(nword).split("").reverse().join("")==cleanString(nword)){
    return true;
  }else {
    return false;
  }
}
function check(){
  if (input.value==""){
    alert("Please input a value")
  }
  if (isPalindrome(input.value)){
    result.textContent=`${input.value} is a palindrome`
  }else {
    result.textContent=`${input.value} is not a palindrome`
  }
  input.value="";
}
check_btn.addEventListener("click",()=>check())