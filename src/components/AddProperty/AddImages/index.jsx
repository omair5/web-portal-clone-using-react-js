import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ImageUploading from 'react-images-uploading';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    mainHeading: {
        backgroundColor: 'rgb(76, 84, 85)',
        color: 'white',
        padding: '10px',
        margin: '30px 0px'
    },
    noteContainer: {
        marginTop: '10px',
        "& li": {
            padding: '3px 0px',
            fontSize: '15px',
            color: 'rgb(59, 70, 86)'
        }
    },
    mainContainer: {
        margin: '20px 0px',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'start',
    },
    addButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',
        border: '2px solid rgb(59, 70, 86)',
        padding: '7px',
        marginRight: '10px',
        backgroundColor: 'white',
        cursor: 'pointer',
        outline: 'none',
        "&:hover": {
            backgroundColor: 'rgb(59, 70, 86)',
            color: 'white'
        },
        "& p": {
            fontWeight: 'bolder',
            color: '#fcb812'
        }
    },
    imageContainer: {
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'start'

    },
    imageIcon: {
        marginLeft: '10px',
    },
    icon: {
        fontSize: '30px',
        cursor: 'pointer',
        margin: '5px',
        color: 'rgb(59, 70, 86)',
        "&:hover": {
            transform: 'scale(1.1)'
        }
    },
    image: {
        width: '200px',
        height: '150px',
        border: '3px solid rgb(59, 70, 86)'
    },
    errorContainer: {
        marginTop: '15px'
    },
    errorMessage: {
        marginTop: '5px',
    }
}));

const AddImages = () => {
    const classes = useStyles();
    const [images, setImages] = useState([]);
    const maxNumber = 10;

    const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    }
    return (
        <>
            <h4 className={classes.mainHeading}>ADD IMAGES</h4>
            <div className={classes.noteContainer}>
                <h4>NOTE</h4>
                <li>you are not allowed to upload more than 10 images</li>
                <li>image size should not be greater than 200kb</li>
                <li>only jpg & png image formats are supported</li>
            </div>
            <Container maxWidth="sm" className={classes.mainContainer}>
                <ImageUploading
                    multiple
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                    acceptType={['jpg', 'png']}
                    maxFileSize={200000}
                >
                    {({
                        imageList,
                        onImageUpload,
                        onImageRemoveAll,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps,
                        errors
                    }) => (

                        // write your building UI
                        <div className="upload__image-wrapper">
                            <div className={classes.buttonContainer}>
                                {/* ADD IMAGES */}
                                <button
                                    style={isDragging ? { backgroundColor: 'rgb(59, 70, 86)' } : undefined}
                                    onClick={onImageUpload}
                                    {...dragProps}
                                    className={classes.addButton}
                                >
                                    <AddAPhotoIcon style={{ fontSize: '25px', marginRight: '10px' }} />
                                    <p>Add Images</p>
                                </button>

                                {/* REMOVE ALL IMAGES */}
                                {imageList.length !== 0 ?
                                    <button
                                        onClick={onImageRemoveAll}
                                        className={classes.addButton}
                                    >
                                        <p>Remove All Images</p>
                                    </button> : null
                                }
                            </div>

                            {errors && <div className={classes.errorContainer}>
                                {errors.maxNumber && <span>Number of selected images exceed maxNumber</span>}
                                {errors.maxNumber &&
                                    <Alert severity="error">
                                        <AlertTitle>Error</AlertTitle>
                                        <div className={classes.errorMessage}>
                                            <b >Number Of Selected Images Exceed Maximum Number Of Images Allowed!</b>
                                            <br />
                                            <b>Maximum Number Of Images Allowed : 10</b>
                                        </div>
                                    </Alert>}
                                {errors.acceptType &&
                                    <Alert severity="error">
                                        <AlertTitle>Error</AlertTitle>
                                        <div className={classes.errorMessage}>
                                            <b >Your Selected File Type Is Not Allowed!</b>
                                            <br />
                                            <b>Only jpg & png Image Formats Are Supported</b>
                                        </div>
                                    </Alert>}
                                {errors.maxFileSize &&
                                    <Alert severity="error">
                                        <AlertTitle>Error</AlertTitle>
                                        <div className={classes.errorMessage}>
                                            <b >Selected File Size Exceed Maximum File Size Limit!</b>
                                            <br />
                                            <b>Maximum File Size Limit Is : 200kb</b>
                                        </div>
                                    </Alert>
                                }
                            </div>}

                            {imageList.map((image, index) => (
                                <div key={index} className={classes.imageContainer}>
                                    <img src={image['data_url']} alt="" className={classes.image} />

                                    <div className={classes.imageIcon}>
                                        <DeleteForeverRoundedIcon
                                            className={classes.icon}
                                            onClick={() => onImageRemove(index)}
                                        />
                                        <CreateRoundedIcon
                                            className={classes.icon}
                                            onClick={() => onImageUpdate(index)}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </ImageUploading>
            </Container>
        </>
    );
}
export default React.memo(AddImages);