import React,{ useState } from 'react';
import { VscEdit } from "react-icons/vsc";
import { VscTrash } from "react-icons/vsc";
import { BsSave } from "react-icons/bs";

interface PrItemProps{
    pr: PR,
    deletePr : DeletePr,
    submitUpdate  : SubmitUpdate,
    handleUpdate : HandleUpdate;
}

export const  PrItem: React.FC<PrItemProps> = ({pr,deletePr,handleUpdate,submitUpdate})=> {
    const [updatingOnProgress,setUpdatingOnProgress] = useState<boolean>(false);
    const [updateIconStatus,setUpdateIconStatus] = useState<boolean>(false);

    const handleUpdateIcon = (): void =>{
        let test : boolean = !updateIconStatus;
        setUpdateIconStatus(test);
    }

    const updatePr = () : void =>{
        handleUpdateIcon();
        if(updatingOnProgress === false){
            setUpdatingOnProgress(true);
            handleUpdate(pr);
        }

        else{
            setUpdatingOnProgress(false);
            handleUpdate(pr);
            submitUpdate(pr);
        }
        
    }


    return (
        <tr>
            <td>{pr.date}</td>
            <td>{pr.SE}</td>
            <td>{pr.id}</td>
            <td>{pr.Platform}</td>
            <td>{pr.Version}</td>
            <td>{pr.Comment}</td>
            <td>{pr.PR}</td>
            <td>{pr.Size}</td>
            <td>{pr.Difficulty}</td>
            <td>{pr.Status}</td>
            <td>{pr.BYStatus}</td>
            <td>{pr.AHStatus}</td>
            <td>{pr.HTStatus}</td>
            <td><button className="update-Button" onClick={updatePr}>
                { updateIconStatus === false && <VscEdit />}
                { updateIconStatus === true && <BsSave />}
                </button></td>
            <td><button className="delete-Button" onClick={()=>deletePr(pr)}><VscTrash /></button></td>
        </tr>
    )
}