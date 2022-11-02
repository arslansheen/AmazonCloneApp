import { ConstructionOutlined } from "@mui/icons-material";
import { onSnapshot } from "firebase/firestore";
import { getDocs,doc,firestore,collection,setDoc,query,orderBy } from "../firebase.js";
const db=firestore();
export default class Customer {
    static async getOrders(userUID,setOrders){

        const ordersRef=collection(db,"users",userUID,"orders")
        const q=query(ordersRef,orderBy("created","desc"));
        const querySnapshot = await getDocs(q);
        let orders=[];
        let unSub;
querySnapshot.forEach((productDoc) => {
//   doc.data() is never undefined for query doc snapshots
  unSub=onSnapshot(doc(db,"users",userUID,"orders",productDoc.id),(snapshot)=> {
    setOrders((previous)=>[...previous,{data:snapshot.data(),id:snapshot.id}])
    // orders.push({id:snapshot.id,data:productDoc.data()});
  })
//   console.log(doc.id,doc.data());
});
// return {orders:orders,unSubscribe:unSub};
return unSub;
    }
static StorePaymentIntent({userId,paymentIntentID,basket,amount,createdDate}){
    if(!userId){    
     userId="DxcXobA7WlNIZUjFZkgnoQzfDkw2";

    } 
    else if(!paymentIntentID){
        throw "connot connect the server";
    }
    try{
          
        const paymentRef = doc(db, "users", userId, "orders",paymentIntentID);
        ;
        setDoc(paymentRef, {
            basket: basket,
            amount: amount,
            created: createdDate,
        });
    }
    catch(e){
    throw e; 
    }
    console.log('helloe')
    
    // const docRef=await addDoc(collection(db,"customers"))
    // db.collection('customers').doc(userId).collection('orders').doc(paymentIntentID)
    // .set({
        //     basket:basket,
        //     amount:amount,
        //     created:createdDate
    // })
    // }
}
}
// Customer.StorePaymentIntent({
//     userId:"asdfasdfasdfasdfaa",
//     paymentIntentID:"asdfasdf34r",
//     basket:{
//         a:"sdfds",
//         b:"sdfds",
//         c:"sdfds",
// },amount:4444,
// createdDate:"12/9/2022"
// })

// Customer.getOrders("DxcXobA7WlNIZUjFZkgnoQzfDkw2");    