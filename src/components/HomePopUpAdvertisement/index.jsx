import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import PopUp from './popup.jpg'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" exit={false} ref={ref} {...props} />;
});

const useStyles = makeStyles({
    content: {
        height: '100%',
        width: '100%',
        padding: '20px',
        zIndex: 1,

    },
    dialogPaper: {
        height: '55%',
        position: 'relative',
        backgroundColor: 'rgba(0, 0, 0,0.3)',
        zIndex: -1,
    },
    icon: {
        cursor: 'pointer',
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 50,
        color: 'white',
        fontSize: '22px',
    }
});

export default function AlertDialogSlide() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                classes={{ paper: classes.dialogPaper }}
                transitionDuration={1500}
            >
                <CloseIcon className={classes.icon} onClick={handleClose} />
                <div className={classes.content}>
                    <img src={PopUp} alt="Pop Up" height={'100%'} width={'100%'} />
                </div>
            </Dialog>
        </div>
    );
}