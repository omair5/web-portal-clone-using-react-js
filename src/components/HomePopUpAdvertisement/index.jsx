import React, { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import HomeGetPopUp from '../../Services/HomeGetPopUp';
import Skeleton from '@material-ui/lab/Skeleton';
import { Link } from 'react-router-dom'




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
        cursor: 'pointer',
        width: '50%'
    },
    icon: {
        cursor: 'pointer',
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 50,
        color: 'white',
        fontSize: '22px',
    },
    link: {
        textDecoration: 'none'
    }
});

export default function AlertDialogSlide() {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const [popup, setpopup] = useState('')

    const handleClose = () => {
        setOpen(false);
    };

    // FETCHING POP UP DATA
    useEffect(() => {
        (
            async () => {
                try {
                    setpopup(await HomeGetPopUp())
                }
                catch { console.log('unable to fetch') }
            }
        )()
    }, [])

    // GENERATE SLUGS
    const GenerateSlugTitle = (value) => {
        return value.trim().toLowerCase().replace(/ /g, '-')
    }


    return (
        <>
            {
                popup ?
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
                                {
                                    popup ?
                                        <Link to={`/project/${GenerateSlugTitle(popup.project_name)}/${popup.project_id}`} className={classes.link}>
                                            <img src={popup.homepopup_image} alt="Pop Up" height={'100%'} width={'100%'} />
                                        </Link>
                                        :
                                        <Skeleton variant="rect" height={'100%'} width={'100%'} />
                                }
                            </div>
                        </Dialog>
                    </div> : null
            }
        </>
    );
}