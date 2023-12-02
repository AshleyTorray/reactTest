import React from 'react';

const Footer = () => {
    return (
        <footer className='h-[93px] flex w-full p-10 font-Nunito bg-[#202942] text-[#adb5bd]'>
            <div className='container relative flex h-full mx-auto max-w-[1116px] items-start'>
                <div className='flex w-[50%]'>
                    <a href='/' className=''>Связаться с тех. поддержкой</a>
                </div>
                <div className='flex w-[50%] justify-end'>
                    <a href='/' className='text-[22px]'>8 999 999 99 99</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;