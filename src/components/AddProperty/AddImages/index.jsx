import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ImageUploading from 'react-images-uploading';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';

const useStyles = makeStyles((theme) => ({
    mainHeading: {
        backgroundColor: 'rgb(59, 70, 86)',
        color: 'white',
        padding: '10px'
    },
    mainContainer: {
        // backgroundColor: 'red',
        margin: '20px auto'
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    addButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',
        border: '2px solid rgb(59, 70, 86)',
        padding: '7px',
        margin: '0px 10px',
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
        // backgroundColor: 'red',
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
}));

const AddImages = () => {
    const classes = useStyles();

    const [images, setImages] = React.useState([]);
    const [error, seterror] = useState(false)
    const maxNumber = 10;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    }
    const onError = (errors, files) => {
        // data for submit
        console.log(errors, files);
        seterror(true)
        // setImages(imageList);
    }
    return (
        <>
            <h4 className={classes.mainHeading}>PROPERTY DETAILS</h4>
            <Container maxWidth="sm" className={classes.mainContainer}>
                <ImageUploading
                    multiple
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                    acceptType={['jpg', 'png']}
                    maxFileSize={200000}
                    onError={onError}
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
                                {errors && <div>
                                    {errors.maxNumber && <span>Number of selected images exceed maxNumber</span>}
                                    {errors.acceptType && <span>Your selected file type is not allow</span>}
                                    {errors.maxFileSize && <span>Selected file size exceed maxFileSize</span>}
                                    {errors.resolution && <span>Selected file is not match your desired resolution</span>}
                                </div>}
                                {/* ADD IMAGES */}
                                <button
                                    style={isDragging ? { color: 'red' } : undefined}
                                    onClick={onImageUpload}
                                    {...dragProps}
                                    className={classes.addButton}
                                >
                                    <AddAPhotoIcon style={{ fontSize: '25px', marginRight: '10px' }} />
                                    <p>Add Images</p>
                                </button>

                                {/* REMOVE ALL IMAGES */}
                                <button
                                    onClick={onImageRemoveAll}
                                    className={classes.addButton}
                                >
                                    <p>Remove All Images</p>
                                </button>
                            </div>

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