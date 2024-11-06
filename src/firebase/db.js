import { 
    getFirestore, 
    collection, 
    getDocs, 
    query, 
    where, 
    doc, 
    getDoc} from "firebase/firestore";
import { app } from "./config"

const db = getFirestore(app);

export const getProperties = async () => {
    const properties = []

    const querySnapshot = await getDocs(collection(db, "properties"));
    querySnapshot.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data()}`);
        //console.log(doc.data());
        properties.push(doc.data())
    });

    return properties
}

export const getTypeProperties = async (type) => {

    const properties = []

    const q = query(collection(db, "properties"), where("tipo", "==", type));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        properties.push(doc.data())
    });

    return properties
}

export const getDetailPropertie = async (id) => {
    const docRef = doc(db, "properties", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }

    return 
}


