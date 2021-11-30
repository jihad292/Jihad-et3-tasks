import React from 'react';
import '../css/Table.css';
import { PrItem } from './PrItem';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';

interface PrItemsListProps{
    prs : Array<PR>,
    deletePr : DeletePr,
    handleUpdate : HandleUpdate,
}

export const PrItemsList : React.FC<PrItemsListProps> = ({prs,deletePr,handleUpdate})=> {
  
const showNotification = () : void =>{
    store.addNotification({
        title:"Success Message",
        message:"Your update has been submited!!",
        type:"success",
        container:"bottom-right",
        insert:"top",
        // animationIn:["animated","fadeIn"],
        // animationOut:["animated","fadeOut"],
        dismiss:{
            duration:2000
        }
    })
}

const submitUpdate : SubmitUpdate = () =>{
    showNotification();
}
    return (
        <table className="main-table">
            <ReactNotification />
            <thead>
                <tr>
                    <th>Date</th>
                    <th>SE</th>
                    <th>#</th>
                    <th>Platform</th>
                    <th>Release Version</th>
                    <th>Comments</th>
                    <th>PR Link</th>
                    <th>Size</th>
                    <th>Difficulty</th>
                    <th>Status</th>
                    <th>Review By BY</th>
                    <th>Review By AH</th>
                    <th>Review By HT</th>
                    <th id="edit-title">Edit</th>
                    <th id="delete-title">Delete</th>
                </tr>
            </thead>
            <tbody>
                {prs.map(pr=>{
                    return  <PrItem  key={pr.id} pr={pr} deletePr={deletePr} handleUpdate={handleUpdate} submitUpdate={submitUpdate} />
                    
                })}
            </tbody>
        </table>
    )
}