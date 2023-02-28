import React from 'react'
import FooterCommon from '../common/FooterCommon';
import HeaderCommon from '../common/HeaderCommon';
import Navbar from '../common/Navbar/Navbar';
import { useStore } from '../store'
import Forbidden from './Forbidden';
import ChangePass from '../component/ChangePass/ChangePass';

function ChangePassPage() {
    const [state] = useStore();
    return (
        <div className="App">
            {state.auth ?
                <>
                    <HeaderCommon />
                    <Navbar />
                    <ChangePass />
                    <FooterCommon />
                </>
                :
                <Forbidden />
            }
        </div>
    )
}

export default ChangePassPage