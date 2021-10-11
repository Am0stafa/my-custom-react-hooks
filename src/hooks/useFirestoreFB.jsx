//bylef 3ala el database collections w ye return el gowa el document and we use doc.{ay 7aga gowa el doc} to get a specific data
import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/firebaseConfig';

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore.collection(collection)
      .orderBy('createdAt', 'desc') //so that the newst are in the top
      .onSnapshot(snap => {
        let documents = [];
        snap.forEach(doc => {
 //...doc.data gets us kol el gowa el document fel collection and as we also want the id do doc.id as the id is stored up
          documents.push({...doc.data(), id: doc.id});
        });
        setDocs(documents);
      });

  //to stop listing
    return () => unsub();
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, [collection]);

  return  [docs] ;
}

export default useFirestore;