import { Modal, Stack, Typography } from "@mui/material";
import { useState } from "react";
import NoteModal from "./NoteModal";
import { useStore } from "zustand";
import myStore from "../../../store/Create/Create";

interface Iprops{
  children?:IcardData[]
}

export default function NoteCard(props:Iprops){
  const [open, setOpen] = useState(false);
  const [lastClicked, setLastClicked] = useState<IcardData | null>(null);
  const {deleteObject} = useStore(myStore)

  const handleOpen = (child: IcardData) => {
    setOpen(true);
    setLastClicked(child);
  };
  const handleDeletion = ()=>{

    if(!lastClicked) lastClicked
    else deleteObject(lastClicked.id | 0)
    handleClose()
  }
  const handleClose = () => {
    setOpen(false);
  };

  const ModalContent = () => (
    lastClicked && (
    <>
        <Stack sx={{width:'100%', alignItems:'center', flexDirection:'column', wordBreak:'break-all'}}>
            <Typography sx={{ mt: 2 }} variant="h4">
            {lastClicked.title}
            </Typography>
            <Typography >

            {lastClicked.text}
            </Typography>
        </Stack>
    </>
    )
    
  );

  return(
    <>
        {
        props.children?.map(
            (object, key)=>{
                return(
                <Stack 
                    key={key}
                    sx={{
                    width:'170px', 
                    height:'170px', 
                    direction:'row',
                    borderRadius:'6px',
                    justifyContent:'center',
                    alignItems:'center', 
                    border:'5px solid #000',
                    wordBreak:'break-all',
                    padding:'1em'}}
                    onClick={() => handleOpen(object)}>
                    {
                        object.title
                    }
                </Stack>
                )
            })
        }
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          
        >
           <>
           
          <NoteModal child={<ModalContent/>} handler={handleDeletion}/>
           </>
                
        </Modal>
    </>)
}
