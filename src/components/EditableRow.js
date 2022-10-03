import React from 'react'

const EditableRow = ({ editFormData, handleEditFormChange, handleCancelClick  }) => {
  return (
        <tr>
            <td>
                <input 
                type="text" 
                required = "required"
                placeholder= "Enter a name..."
                name= "fullname"
                value={editFormData.fullname}
                onChange={handleEditFormChange}
                />
            </td>
            <td>
            <input 
                type="email" 
                required = "required"
                placeholder= "Enter a email..."
                name= "email"
                value={editFormData.email}
                onChange={handleEditFormChange}
                />
            </td>
            <td>
            <input 
                type="text" 
                required = "required"
                placeholder= "Enter a address..."
                name= "address"
                value={editFormData.address}
                onChange={handleEditFormChange}
                />
            </td>
            <td>
            <input 
                type="text" 
                required = "required"
                placeholder= "Enter your NIK..."
                name= "NIK"
                value={editFormData.NIK}
                onChange={handleEditFormChange}
                />
            </td>
            <td>
                <button type="submit">Save</button>
                <button type="submit" onClick={handleCancelClick}>Cancel</button>
            </td>
        </tr>

  )
}

export default EditableRow