import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ImageUploading from 'react-images-uploading';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useSelector, useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    mainHeading: {
        backgroundColor: '#fcb812',
        color: 'black',
        padding: '10px',
        margin: '30px 0px'
    },
    noteContainer: {
        marginTop: '10px',
        "& li": {
            padding: '3px 0px',
            fontSize: '15px',
            color: 'rgb(59, 70, 86)',
        },
        "& h4": {
            color: 'rgb(76, 84, 85)',
            fontWeight: 'bolder',
            fontSize: '18px'
        }
    },
    mainContainer: {
        margin: '20px auto',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'start',
        marginTop: '20px',
        marginBottom: '20px',
    },
    // addButton: {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     borderRadius: '5px',
    //     padding: '20px',
    //     border: '2px dashed silver',
    //     marginRight: '10px',
    //     backgroundColor: 'white',
    //     cursor: 'pointer',
    //     outline: 'none',
    //     "&:hover": {
    //         backgroundColor: '#ededed',
    //     },
    //     "& p": {
    //         fontWeight: 'bolder',
    //         color: 'rgb(76, 84, 85)'
    //     },
    //     "& span": {
    //         color: 'gray',
    //         fontSize: '10px'
    //     }
    // },
    imageContainer: {
        marginTop: '20px',
        display: 'flex',
        flexWrap: 'wrap',
    },
    imageWrapper: {
        marginRight: '15px',
        marginBottom: '10px',
        position: 'relative',
    },
    imageIcon: {
        marginLeft: '10px',
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.7)',
        top: '3px',
        right: '3px',
        borderRadius: '2px'
    },
    icon: {
        fontSize: '30px',
        cursor: 'pointer',
        margin: '5px',
        color: 'white',
        "&:hover": {
            transform: 'scale(1.1)'
        }
    },
    image: {
        width: '200px',
        height: '150px',
        border: '3px solid silver'
    },
    errorContainer: {
        marginTop: '15px'
    },
    errorMessage: {
        marginTop: '5px',
    },
    CoverImage: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.7)',
        bottom: '5px',
        right: '2px',
        left: '3px',
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bolder',
        padding: '8px 0px'
    },
    label: {
        display: 'inline-block',
        position: 'relative',
        height: '100px',
        width: '400px',
    },
    test: {
        position: 'absolute',
        top: '0',
        bottom: '0',
        width: '75%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'white',
        border: '2px dashed silver',
        borderRadius: '5px',
        zIndex: 10,
        cursor: 'pointer',
        padding: '20px',
        "&:hover": {
            backgroundColor: '#ededed',
        },
        "& p": {
            fontWeight: 'bolder',
            color: 'rgb(76, 84, 85)',
            textAlign: 'center'
        },
        "& span": {
            color: 'gray',
            fontSize: '10px',
            textAlign: 'center'
        }
    }

}));

const AddImages = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    // const [images, setImages] = useState([]);
    const images = useSelector(state => state.AddImages_Images_List)
    const maxNumber = 50;

    const onChange = (imageList) => {
        dispatch({ type: 'gallery_images_list', payload: imageList })
    }

    const HandleAddImages = (e) => {
        console.log(e.target.files)
    }

    return (
        <>
            <h4 className={classes.mainHeading}>ADD IMAGES</h4>
            <div className={classes.noteContainer}>
                <h4>NOTE</h4>
                <li>The First Image You Upload Will Be Treated As Cover Image Of Your Property.</li>
                <li>You Can Not Upload More Than 50 Images.</li>
                <li>Image Size Should Not Be Greater Than 5mb</li>
                <li>Only jpg & png Image Formats Are Supported</li>
            </div>
            <Container maxWidth="lg" className={classes.mainContainer}>
                <ImageUploading
                    multiple
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                    acceptType={['jpg', 'png']}
                    maxFileSize={5000000}
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


                                {/* <button
                                    style={isDragging ? { backgroundColor: 'rgb(59, 70, 86)' } : undefined}
                                    onClick={onImageUpload}
                                    {...dragProps}
                                    className={classes.addButton}
                                >
                                    <AddAPhotoIcon style={{ fontSize: '35px', marginRight: '10px' }} />
                                    <p>Upload Images <br /> <span>OR Drag Them In</span> <br /> <span>(Max FileSize 5MB, accepts .jpg, .png)</span></p>
                                </button> */}

                                {/* <input type='file' id='file-upload' multiple /> */}
                                <label htmlFor="test" className={classes.label}>
                                    <div className={classes.test}>
                                        <AddAPhotoIcon style={{ fontSize: '35px', marginRight: '10px' }} />
                                        <p>Upload Images <br /> <span>OR Drag Them In</span> <br /> <span>(Max FileSize 5MB, accepts .jpg, .png)</span></p>
                                    </div>
                                    <input type="file" id="test" />
                                </label>


                                {/* REMOVE ALL IMAGES */}
                                {imageList.length !== 0 ?
                                    <button
                                        onClick={onImageRemoveAll}
                                        className={classes.addButton}
                                    >
                                        <DeleteForeverRoundedIcon style={{ fontSize: '35px', marginRight: '10px' }} />
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
                                            <b>Maximum Number Of Images Allowed : 50</b>
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
                                            <b>Maximum File Size Limit Is : 5MB</b>
                                        </div>
                                    </Alert>
                                }
                            </div>}

                            <div className={classes.imageContainer}>
                                {imageList.map((image, index) => (
                                    <div key={index} className={classes.imageWrapper}>
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
                                        {index === 0 &&
                                            <div className={classes.CoverImage}>
                                                <h5>COVER IMAGE</h5>
                                            </div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </ImageUploading>
            </Container>
        </>
    );
}
export default React.memo(AddImages);