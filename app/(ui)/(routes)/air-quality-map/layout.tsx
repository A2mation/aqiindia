import React from 'react'


const layout = async ({
    children
}: {
    children: React.ReactNode
}) => {

    return (
        <>

            {children}
            <div className='h-1/2 md:h-0 '/>
        </>
    )
}

export default layout