import React, { ReactNode } from 'react'

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='h-full flex items-center justify-center bg-gray-900'>
            {children}
        </div>
    )
}

export default AuthLayout