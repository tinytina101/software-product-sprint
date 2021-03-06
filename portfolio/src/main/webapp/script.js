// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

function loadTasks() {
  fetch("/list-messages")
    .then((response) => response.json())
    .then((notes) => {
      const noteListElement = document.querySelector(".messageNotes");
      notes.forEach((note) => {
        noteListElement.appendChild(createMsgElement(note));
      });
    });
}

function createMsgElement(note) {
  const msgElement = document.createElement("div");
  msgElement.className = "projectNote";

  const message = document.createElement("h3");
  message.className = "userMessage";
  message.innerText = note.message;
  const name = document.createElement("h6");
  name.className = "userName";
  name.innerText = note.name;

  msgElement.appendChild(message);
  msgElement.appendChild(name);
  return msgElement;
}

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings = [
    "I don't like papaya.",
    'I\'m currently watching "Our Blues","Sh**ting Stars", and "House".',
    "I've crocheted the Among Us characters.",
    "My art has been in the High Museum of Arts (Atlanta) in High School.",
  ];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById("greeting-container");
  greetingContainer.innerText = greeting;
}

/** Fetches the Hello MSG from the server and adds it to the page. */
async function showHello() {
  const responseFromServer = await fetch("/hello");

  //for step 2:
  //const textFromResponse = await responseFromServer.text();

  // The json() function returns an object that contains fields that we can
  // reference to create HTML.
  const json = await responseFromServer.json();

  const helloContainer = document.getElementById("hello-container");
  helloContainer.innerHTML = "";
  // Pick a random greeting.
  const fact = json[Math.floor(Math.random() * json.length)];
  helloContainer.innerText = fact;
}
