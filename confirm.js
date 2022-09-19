const join = confirm("Do you want to register on the site?");

if (join) {
  const firstname = prompt("Enter your name");
  const lastname = prompt("Enter your lastname");
  const age = +prompt("Enter your age");
  const pw = +prompt("Enter your password");

  if (!firstname || !lastname || !age || !pw) {
    alert("please fill the form again!");
  } else if (age < 18) {
    alert("you are not of legal age!");
  } else if (pw.length < 6) {
    alert(" your password is weak! at least 6 characters");
  } else {
    alert(
      `dear ${firstname} ${lastname} your registration is complete. your password is ${pw}`
    );
  }
}
