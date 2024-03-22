import React from 'react'

const index = () => {
    return (
        <>
            <div className='flex searchBarContainer'>
                <div className='search'>
                    <input type="text" className='searchBar' placeholder='Search' />
                </div>

                <div className='profile_container'>
                    <div className="profile flex">
                        <img src="https://via.placeholder.com/25" alt=""
                            style={{
                                width: "25px",
                                height: "25px",
                                borderRadius: "50%"


                            }} />
                        <div className='profile_info'>
                            <h3>John Doe</h3>
                            <i>Admin</i>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default index
