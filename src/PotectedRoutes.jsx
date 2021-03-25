import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

const ProtectedRoutes = ({ Component }) => {
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if (!localStorage.getItem('user-info')) {
            history.push('/')
            dispatch({ type: 'OpenSignInDialog' })
        }
    }, [dispatch, history])

    return (
        <>
            <Component />
        </>
    );
}
export default ProtectedRoutes;