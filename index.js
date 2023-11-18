// Add your code here
function submitData( userName = 'name', userEmail = 'email' ) {

    const allData = {
        name: "Ammar",
        email: "ammar.kolko87@gmail.com",
      };
      
      const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(allData),
      };
      
      return fetch("http://localhost:3000/users", configurationObject)
      .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        console.log(object);
      })
      .catch(function (error) {
        alert("Bad things! Ragnarők!");
        console.log(error.message);
      });
}
submitData(userName = 'name', userEmail = 'email');

