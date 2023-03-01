import React from 'react'
import FooterCommon from '../common/FooterCommon';
import HeaderCommon from '../common/HeaderCommon';
import Navbar from '../common/Navbar/Navbar';
import CategoryContent from '../component/CategoryContent/CategoryContent'
import { useStore } from '../store'
import Forbidden from './Forbidden';
import {
    useLocation
} from "react-router-dom";

function Category() {
    const [state] = useStore();
    function useQuery() {
        const { search } = useLocation();

        return React.useMemo(() => new URLSearchParams(search), [search]);
    }
    let query = useQuery();

    return (
        <div className="App">
            {state.auth ?
                <>
                    <HeaderCommon />
                    <Navbar />
                    <CategoryContent page={query.get("page")} filter={query.get("filter")} />
                    <FooterCommon />
                </>
                :
                <Forbidden />
            }
        </div>
    )
}

export default Category