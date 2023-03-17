// create task object
function Task(title, disc) {
  const getInfo = () => {
    console.log(title);
    console.log(disc);
  };
  return { title, disc, getInfo };
}

// get user input
function getUserInput() {
  const title = document.getElementById('title').value;
  const disc = document.getElementById('disc').value;
  return Task(title, disc);
}

export default getUserInput;
