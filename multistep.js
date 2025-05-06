const x = document.getElementsByClassName("tab");
let currentTab = 0;
showTab(currentTab);

function showTab(n){
  x[n].style.display = "block";
  if(n === 0){ document.getElementById("prevBtn").style.display = "none"; }
  else       { document.getElementById("prevBtn").style.display = "inline"; }
  if(n === (x.length-1)){ document.getElementById("nextBtn").innerHTML = "Submit"; }
  else                   { document.getElementById("nextBtn").innerHTML = "Next"; }
  fixStepIndicator(n);
}

function nextPrev(n){
  if(n === 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if(currentTab >= x.length){
    document.getElementById("regForm").submit();
    return false;
  }
  showTab(currentTab);
}

function validateForm(){
  let valid = true;
  const inputs = x[currentTab].getElementsByTagName("input");
  const areas  = x[currentTab].getElementsByTagName("textarea");
  [...inputs, ...areas].forEach(el=>{
     if(el.value === ""){
        el.className += " invalid";
        valid = false;
     }
  });
  if(valid){
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid;
}

function fixStepIndicator(n){
  const steps = document.getElementsByClassName("step");
  for(let i=0;i<steps.length;i++){ steps[i].className = steps[i].className.replace(" active",""); }
  steps[n].className += " active";
}
