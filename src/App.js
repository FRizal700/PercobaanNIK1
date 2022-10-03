import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import './App.css';
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";


function App() {

  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullname: "",
    email: "",
    address: "",
    NIK: ""
  });

  const [editFormData, setEditFormData] = useState({
    fullname: "",
    email: "",
    address: "",
    NIK: ""
  })

  const [editContactId, setEditContactId] = useState(null)

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };


  const handleEditFormChange = (event) => {
    event.preventDefault();
    
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = {...editFormData};
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact ={
      id: nanoid(),
      fullname: addFormData.fullname,
      email: addFormData.email,
      address: addFormData.address,
      NIK: addFormData.NIK,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  }


  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    
    const EditedContact = {
      id: editContactId,
      fullname: editFormData.fullname,
      email: editFormData.email,
      address: editFormData.address,
      NIK: editFormData.NIK,
    }

    const newContact = [...contacts];

    const index = contacts.findIndex(contact => contact.id === editContactId);

    newContact[index] = EditedContact;

    setContacts(newContact);
    setEditContactId(null);
  
  }


  const handleEditClick = (event, contact) =>{
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullname: contact.fullname,
      email: contact.email,
      address: contact.address,
      NIK: contact.NIK,
    }

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  }

  const handleDeleteClick = (contactId) => {
    const newContact = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContact.splice(index, 1);

    setContacts(newContact);
  }

  return (
    <div className="App">
      {/* FormInput menerima Props isEdit */}
      <div className="app-container" style={{ marginTop: 50 }}>
      <h2>Tambahkan Data</h2>
          <form onSubmit={handleAddFormSubmit}>
            <input 
            type="text"
            name="fullname" 
            required="required"
            placeholder="Enter your fullname"
            onChange={handleAddFormChange} 
            />
            <input 
            type="text"
            name="email" 
            required="required"
            placeholder="Enter your email"
            onChange={handleAddFormChange}  
            />
            <input 
            type="text"
            name="address" 
            required="required"
            placeholder="Enter your address"
            onChange={handleAddFormChange}  
            />
            <input 
            type="text"
            name="NIK" 
            required="required"
            placeholder="Enter your NIK" 
            onChange={handleAddFormChange} 
            />
            <button type="submit">Add</button>
          </form>

        <h2 style={{ marginTop: 80 }}>Daftar Nama </h2>
        <form onSubmit={handleEditFormSubmit} >
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>NIK</th>
                  <th>Button</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <Fragment>
                    {editContactId === contact.id ? (
                    <EditableRow 
                    editFormData={editFormData} 
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                    /> 
                    ) : ( 
                    <ReadOnlyRow 
                      contact={contact}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </form>

          {/* <h2>Add a Person</h2>
          <form onSubmit={handleAddFormSubmit}>
            <input 
            type="text"
            name="fullname" 
            required="required"
            placeholder="Enter your fullname"
            onChange={handleAddFormChange} 
            />
            <input 
            type="text"
            name="email" 
            required="required"
            placeholder="Enter your email"
            onChange={handleAddFormChange}  
            />
            <input 
            type="text"
            name="address" 
            required="required"
            placeholder="Enter your address"
            onChange={handleAddFormChange}  
            />
            <input 
            type="text"
            name="NIK" 
            required="required"
            placeholder="Enter your NIK" 
            onChange={handleAddFormChange} 
            />
            <button type="submit">Add</button>
          </form> */}
      </div>
    </div>
  );

}

export default App;
