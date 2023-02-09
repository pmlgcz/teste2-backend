import useState from "React"
import [Button,TextField] from "@mui/material/button"






export default function FormDialog(props){
    const [editValues, setEditValues] = useState({
        id:props.id,
        name: props.title,
        cost: props.cost,
        category: props.cost,
    });

    const handleChangeValues = (values) => {
        setEditValues((prevValues) => ({
            ...prevValues,
            [values.target.id]: values.target.value,
        }));
    };



    const handleClose = () => {
        props.setOpen(false);

    };

    const handleEditGame = () => {
        Axios.put("http://localhost:3001/edit",{
            id: editValues.id,
            name:editValues.name,
            cost: editValues.cost,
            category: editValues.category,
        }
        )
            .then(() => {
                props.setListCard(
                    props.listCard.map((value) =>{
                        return value.idgames ==editValues.idgames ?
                            {
                            id: editValues.id,
                            name:editValues.name,
                            cost: editValues.cost,
                            category: editValues.category,
                            } : value;

                                                }
                                    )
                                )
                        }
            )
                            
            handleClose();
    };
    const handleDeleteGame = () => {
        Axios.delete(`http://localhost:3001/delete/${editValues.id}`)
        .then(() =>{
            props.setListCard(
                props.listCard.filter((values) =>{
                    return value.id != editValues.id;
                })
            )
        })
        handleClose();
    };

    return(
        <>
        <div>
            <Dialog
            open={props.open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Editar</DialogTitle>
                    <DialogContent>
                        <TextField disabled margin= "dense" id="id" label="Código do Jogo" defaulValue={props.id} type="text"  fullWidth/>

                        <TextField autofocus margin= "dense" id="name" label="Nome do Jogo" defaulValue={props.name} type="text" onChange={handleChangeValues} fullWidth/>

                        <TextField autofocus margin= "dense" id="cost" label="Valor do Jogo" defaulValue={props.cost} type="text" onChange={handleChangeValues} fullWidth/>

                        <TextField autofocus margin= "dense" id="category" label="Categoria do Jogo" defaulValue={props.category} type="text" onChange={handleChangeValues} fullWidth/>
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={handleClose} color ="prymary">Cancelar</Button>
                        <Button onClick={() => handleDeleteGame()} color ="prymary">Excluir</Button>
                        <Button onClick={() => handleEditGame()} color ="prymary">Salvar</Button>


                    </DialogActions>
                
                </Dialog>
        </div>
        </>
    )
}