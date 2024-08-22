import { useState } from 'react'
import ContactList from "./components/contactlist"
import './App.css'
import SelectedContact from './components/selectedcontact'


function App() {

const [selectedContactId, setSelectedContactId] = useState(null)

  return (
    <>
     {selectedContactId ? (
        <div>Selected Contact View

        <SelectedContact 
        selectedContactId={selectedContactId}
        />
          
        </div>

      ) : (
        <ContactList 
        setSelectedContactId={setSelectedContactId}
        />
      )}
    </>
  )
}

export default App
