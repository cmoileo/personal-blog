import DeleteIcon from '../../assets/delete-icon.png'
import ModifyIcon from '../../assets/modify-icon.png'
import { UserContext } from '../../Contexts/UserContext'
import { useContext } from 'react'
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../../Firebase/FirebaseConfig';

export default function ArticlesList() {
  const {collectionData, setCollectionData} = useContext(UserContext)

  async function handleDelete(e) {
    await deleteDoc(doc(db, "Articles", e.nativeEvent.composedPath()[2].id));
    setCollectionData(oldArray => {
      oldArray.splice(e.nativeEvent.path[2].id, 1);
      return [...oldArray];
      });
  }

  return (
    <>
    {collectionData.map((article, index) => {
       return (
        <div className="articles-list-container" key={index} id={collectionData[index].index} >
        <div className="articles-list-container__texts">
        <h3 className="third-title pointer"><i>{collectionData[index].name}</i></h3>
        <p className="main-text pointer"><i>{collectionData[index].date}</i></p>
         </div>
        <div className="articles-list-container__icons">
        <img src={ModifyIcon} className="pointer" />
        <img src={DeleteIcon} className="pointer" onClick={(e) => handleDelete(e)}/>
          </div>
        </div>
  )
})}
</>
  )
}
