import React from 'react';
import '../css/Table.css';
import { PrItem } from './PrItem';

interface PrItemsListProps{
    prs : Array<PR>,
    deletePr : DeletePr,
    handleUpdate : HandleUpdate,
    submitUpdate: SubmitUpdate,
}

export const PrItemsList : React.FC<PrItemsListProps> = ({prs,deletePr,handleUpdate,submitUpdate})=> {
    const settingPrToUpdate : SubmitUpdate = selectedPr=>{
        //
        }
    return (
        <table className="main-table">
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