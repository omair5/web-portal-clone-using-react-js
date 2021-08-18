import React from 'react';
import CDA from './ApprovedLogos/cda.png'
import FBR from './ApprovedLogos/fbr.png'
import KDA from './ApprovedLogos/kda.png'
import LDA from './ApprovedLogos/lda.png'
import SBCA from './ApprovedLogos/sbca.png'
import { v4 as uuidv4 } from 'uuid';

const ShowApprovedLogo = ({ approval_list }) => {
    const generatingLogo = (value) => {
        switch (value) {
            case 'KDA':
                return KDA
            case 'CDA':
                return CDA
            case 'FBR':
                return FBR
            case 'LDA':
                return LDA
            case 'SBCA':
                return SBCA
            default:
                break;
        }
    }
    return (
        <>
            {
                approval_list.map(value => (
                    <img src={generatingLogo(value)} key={uuidv4()} alt={value} height={80} width={80} />
                ))
            }
        </>
    );
}

export default ShowApprovedLogo;