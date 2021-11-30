import "./App.css";
import { useState } from "react";
import contacts from "./contacts.json";

const remainingContacts = [...contacts];
const initAgenda = remainingContacts.splice(0, 5);

function App() {
  const [agenda, setAgenda] = useState(initAgenda);
  const addContact = () => {
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts.splice(randomIndex, 1);
    // const randomContact = randomContact[randomIndex] // It will also return a random contact, but won't modify the original array.
    setAgenda(agenda.concat(randomContact));
    // setAgenda([...agenda, randomContact]);
  };
  const deleteContact = () => {
    const deleteContact = agenda.splice(agenda.id);
    // const deleteContact = deleteContact[deleteIndex] // It will also return a delete contact, but won't modify the original array.
    setAgenda(agenda.concat(deleteContact));
    // setAgenda([...agenda, deleteContact]);
    console.log(deleteContact);
  };

  const sortByName = () => {
    const sortedArrName = agenda
      .sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      })
      .slice();
    setAgenda(sortedArrName);
    console.log("sortedArrName", sortedArrName);
  };

  const sortByPopularity = () => {
    const sortedArrPopu = agenda
      .sort((a, b) => {
        if (a.popularity > b.popularity) {
          return -1;
        }
        if (a.popularity < b.popularity) {
          return 1;
        }
        return 0;
      })
      .slice();
    setAgenda(sortedArrPopu);
    console.log("sortedArrPopu", sortedArrPopu);
  };

  return (
    <>
      <h1>IRONCONTACTS</h1>
      <button onClick={addContact}>Add contact</button>
      <button onClick={sortByName}>Sort By Name</button>
      <button onClick={sortByPopularity}>Sort By Popularity</button>

      <div className="App">
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Oscar Winner?</th>
              <th>Emmy Winner?</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {agenda.map((contacts) => {
              return (
                <tr key={contacts.id}>
                  <td>
                    <img
                      src={contacts.pictureUrl}
                      alt={contacts.name}
                      width="100px"
                      height="150px"
                    />
                  </td>
                  <td>{contacts.name}</td>
                  <td>{contacts.popularity.toFixed(2)}</td>
                  <td>{contacts.wonOscar ? "🏆" : "X"}</td>
                  <td>{contacts.wonEmmy && "🏆"}</td>
                  <td>
                    <button onClick={deleteContact}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
