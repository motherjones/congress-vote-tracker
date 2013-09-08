function validemail ( form )
{
  action1 = "http://ga";
  action2 = "3.org/offsite";
  action3 = "-join.tcl";
  form.action = action1+action2+action3;
  form.ema_signup_url.value = document.URL;
  
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var address = form.email.value;
  if(reg.test(address) != false) {
    return true;
  } else {
    alert("Please enter a valid email address in the white box next to the signup button.");
    form.email.focus();
    return false;
  }  
}
