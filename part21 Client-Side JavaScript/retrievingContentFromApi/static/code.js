const retrieveContentFromApi = async () => {

  const response = await fetch("/api/magic");
  console.log(response);

  const json = await response.json();
  console.log(json);
  console.log(json.magic)

  const element = document.createElement("p")
  const text = document.createTextNode(json.magic)
  element.appendChild(text)

  document.querySelector("#magic").appendChild(element)

};
  