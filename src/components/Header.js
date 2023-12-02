import React from 'react';
import CustomDropdown from './CustomDropdown';
import logo from '../assets/img/logo.png';
import { Dropdown, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { LiaSignInAltSolid } from "react-icons/lia";

const Header = () => {
    const items = [
        {
          label: 
            <a href="/" className='flex items-center hover:text-[#00B3A4]'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alert-triangle align-middle me-1" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> 
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> 
                    <path d="M12 9v2m0 4v.01"></path>    
                    <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75"></path>
                </svg>
                Заполнить информацию
            </a>,
          key: '0',
        },
        {
          label: <a href="/" className='flex items-center hover:text-[#00B3A4]'><UserOutlined className='pr-2'/> Настройки входа</a>,
          key: '1',
        },
        {
          type: 'divider',
        },
        {
          label: <a href="/" className='flex items-center hover:text-[#00B3A4]'><LiaSignInAltSolid className='pr-2 text-[20px]'/> Выход</a>,
          key: '3',
        },
    ];


    return (
        <header className='sticky p-4 top-0 z-50 w-full font-Nunito bg-[#FFFFFF]'>
            <div className='container relative flex h-full mx-auto max-w-[1116px]'>
                <div className='flex justify-start w-3/4 gap-6 items-center'>
                    <a href='/' className='sm:ml-10'>
                        <img src={logo} alt='logo' width={144} height={42}/>
                    </a>
                    <ul className='lg:flex  sm:hidden leading-6 gap-6 items-center bg-transparent opacity-95 text-[13px] font-bold text-[#212529] tracking-[1px] uppercase'>
                        <li>
                            <a href='/' className='pl-[14px] pr-[14px] hover:text-[#00B2A4]'>
                                Вакансии
                            </a>
                        </li>
                        <li>
                            <a href='/' className=' pl-[14px] pr-[14px] hover:text-[#00B2A4]'>
                                Поиск и подбор персонала
                            </a>
                        </li>
                        <li>
                            <a href='/' className=' pl-[14px] pr-[14px] hover:text-[#00B2A4]'>
                                Сообщения
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center w-1/4 lg:justify-end sm:justify-start '>
                    <Dropdown overlayStyle={{width: 250}} className='flex items-center hover:text-[#00B3A4]' menu={{ items }} trigger={['click']}>
                        <a onClick={(e) => e.preventDefault()} className='cursor-pointer'>
                            <Space>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-alert-triangle align-middle me-1" width="18" height="18" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> 
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> 
                                    <path d="M12 9v2m0 4v.01"></path>    
                                    <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75"></path>
                                </svg>
                                Ник контрагента
                                {/* <DownOutlined /> */}
                            </Space>
                        </a>
                    </Dropdown>
                </div>
                <CustomDropdown />
            </div>
        </header>
    );
};

export default Header;