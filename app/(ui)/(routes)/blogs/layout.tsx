import { Suspense } from "react";


const DashboardLayout = async ({
    children
}: { children: React.ReactNode }) => {

    return (
        <>
            <Suspense>
                <div className='max-w-7xl mx-auto mt-20 px-2 md:px-0'>
                    {children}
                </div>
            </Suspense>
        </>

    )
}

export default DashboardLayout