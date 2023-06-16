import React from 'react';
import data from './data';

const IndexedDBExample = () => {
  const handleClick = (name, classes, sex) => {
    // * 'mydatabase' is IndexedDB database
    const request = indexedDB.open('myDatabase', 9);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      //* 'student' is the name of the object within the database.
      const objectStore = db.createObjectStore('students', { keyPath: 'id', autoIncrement: true });
      objectStore.createIndex('name', 'name', { unique: true });
      objectStore.createIndex('class', 'class', { unique: false });
      objectStore.createIndex('Based on sex', 'sex', { unique: false });
    };

    request.onsuccess = (event) => {
      const db = event.target.result;

      const transaction = db.transaction('students', 'readwrite');
      console.log("transaction is -> ", transaction)
      // TODO : This creates a transaction on the IndexedDB database. A transaction is a way to group multiple database operations (such as adding, deleting, or updating data) into a single atomic unit of work.


      const objectStore = transaction.objectStore('students');
      console.log("objectStore is  -> ", objectStore);
      // TODO : This retrieves the reference to the object store named 'students' from the transaction.

      const nameIndex = objectStore.index('name');
      console.log("nameIndex is ", nameIndex);
      // TODO: Check if entry with the same name already exists, In IndexedDB, an index is an optional feature that allows you to efficiently retrieve data based on a specific property or key.

      const getRequest = nameIndex.get(classes);
      console.log("getRequest is ", getRequest)
      // TODO: In IndexedDB, the get() method of an index allows you to retrieve a single object from the object store based on a specific value of the indexed property. It returns a request object that represents the asynchronous operation to retrieve the object.

      getRequest.onsuccess = (e) => {
        const existingEntry = e.target.result;

        if (existingEntry) {
          console.log('Entry with the same name already exists.');
        } else {
          // Add new entry
          const op = {
            name: name,
            class: classes,
            sex: sex
          };
          objectStore.add(op);

          transaction.oncomplete = () => {
            console.log('Data saved to IndexedDB successfully!');
          };
        }
      };
    };
  };

  return (
    <div>
      <h2>IndexedDB Example</h2>
      {data.map((e, index) => {
        const { name, classes, sex } = e;
        return (
          <div key={index}>
            <li>Name: {name}</li>
            <li>Class: {classes}</li>
            <li>Sex: {sex}</li>
            <button onClick={() => { handleClick(name, classes, sex) }}>Add</button>
            <br />
          </div>
        );
      })}
    </div>
  );
};
const request = indexedDB.open('myDatabase', 1);

request.onsuccess = (event) => {
  const db = event.target.result;
  const transaction = db.transaction('students', 'readwrite');
  const objectStore = transaction.objectStore('students');

  // Perform operations on the object store
};

request.onerror = (event) => {
  console.error('Failed to open database:', event.target.error);
};

export default IndexedDBExample;
