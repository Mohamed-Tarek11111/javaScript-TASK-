// let email = prompt("Enter your email");
// let password;
let e = /[A-z0-9]+@(hotmail|yahoo|gmail)\.com/;
// let n = e.test(email);

// while (email === "" || email === null) {
//   email = prompt("Enter your email");
// }
// try {
//   while (n == false) {
//     try {
//       while (email.includes("@") === false) {
//         throw new Error("Your email should include @");
//       }
//     } catch (error) {
//       alert(error);
//       email = prompt("Enter your email");
//     }

//     try {
//       while (
//         (email.endsWith("hotmail") == false) &
//         (email.endsWith("yahoo") == false) &
//         (email.endsWith("gmail") == false)
//       ) {
//         throw new Error("Your email should include (hotmail|yahoo|gmail)");
//       }
//     } catch (error) {
//       alert(error);
//       email = prompt("Enter your email");
//     }
//     try {
//       while (email.endsWith(".com") === false) {
//         throw new Error("Your email should include .com");
//       }
//     } catch (error) {
//       alert(error);
//       email = prompt("Enter your email");
//     }
//     throw new Error("Enter the correct email");
//   }
// } catch (error) {
//   alert(error);
//   email = prompt("Enter your email");
// }

// password = prompt("Enter your password");
// while (password.length < 8) {
//   alert("Error:Your password must be at least 8 characters long");
//   password = prompt("Enter your password");
// }
// email = prompt("Enter your email");
// while (email === "" || email === null) {
//   email = prompt("Enter your email");
// }

// password = prompt("Enter your password");
// while (password.length < 8) {
//   alert("Error:Your password must be at least 8 characters long");
//   password = prompt("Enter your password");
// }



function getCredentials() {
  try {
    const email = prompt("Enter your email");

    if (!/^.{5,}/gi.test(email)) throw Error("You must provide a subdomain");
    if (!/^.{5,}@/gi.test(email))
      throw Error("Your email must include the @ sign");
    if (!/^.{5,}@(.*?)/gi.test(email)) throw Error("You must provide a domain");
    if (!/^.{5,}@(.*?).com/gi.test(email))
      throw Error("You must provide a super-domain");

    const password = prompt("Enter you password");

    if (!/(\w\d)+/gi.test(password)) throw Error("Go to hell");
  } catch (err) {
    alert(err);
    getCredentials();
  }
}

getCredentials();



