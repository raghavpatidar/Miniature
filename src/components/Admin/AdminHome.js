import React from "react";
import NavBar from "../NavBar/NavBar";
import AdminTags from './AdminTags'
import ItemList from "../HorizontalItemList/ItemList";

const AdminHome = () => {
    return (
        <>
            <NavBar></NavBar>
            <div className='tags '>
                <ItemList></ItemList>
            </div>
            <AdminTags></AdminTags>

        </>
    )
}
export default AdminHome;