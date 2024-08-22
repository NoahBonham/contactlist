import { useState, useEffect } from "react";

export default function SelectedContact({selectedContactId, setSelectedContactId}) {

    const [contact, setContact] = useState()

    useEffect (() => {
        async function fetchsignlecontact() {
            try {
                const response = await fetch
                (`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
                const result = await response.json()
                setContact(result)
            } catch (error) {
                console.error(error)
            }
        }
        fetchsignlecontact()
    }, [])



    return (
<>
        <div>

            <p>{contact?.name}</p>
            <p>{contact?.email}</p>
            <p>{contact?.phone}</p>

        </div>
</>
    )
}