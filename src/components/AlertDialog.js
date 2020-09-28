import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog(props) {
    const [open, setOpen] = React.useState(props.isOpen);

    // const handleClickOpen = () => {
    //     setOpen(props.isOpen);
    // };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>

            {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open alert dialog</Button> */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{`Data for ${props.location} not found | Invalid Location`}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Error: {props.location} cannot be found in database please enter a valid Location or double click the search field and select valid location list from the dropdown option
                        presented in the search field. </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>  Okay </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
