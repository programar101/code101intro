fetch("https://randomuser.me/api/")
  .then(response => response.json())
  .then(json => {
    let profilePic = json.results[0].picture.large;
    let name = `${json.results[0].name.first} ${json.results[0].name.last}`;
    document.getElementById("extrastudent1").innerHTML = `
            <img src="${profilePic}" />
            <h3>${name}</h3>
            `
})
