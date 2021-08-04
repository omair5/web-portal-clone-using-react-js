import React from 'react';
import { v4 as uuidv4 } from 'uuid';
const MemberOfInstitutions = ({ membersList }) => {
    console.log('mcnckdfepwojdclk', membersList)
    return (
        <>
            <ul>
                {
                    membersList.map(value => (
                        <li key={uuidv4()}><p>{value.member_list_name}</p></li>
                    ))
                }
                {/* <li><p>ABAAD</p></li>
                <li><p>SBCA</p></li>
                <li><p>LDA</p></li> */}
            </ul>
        </>
    );
}

export default MemberOfInstitutions;