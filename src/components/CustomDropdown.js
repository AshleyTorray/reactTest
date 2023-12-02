import React from 'react';
import { Dropdown, Space } from 'antd';

const CustomDropdown = () => {
    

    const items = [
        {
          label: 
            <a href="/" className='flex items-center hover:text-[#00B3A4]'>
               Вакансии
            </a>,
          key: '0',
        },
        {
          label: <a href="/" className='flex items-center hover:text-[#00B3A4]'> Поиск и подбор персонала</a>,
          key: '1',
        },
        {
          label: <a href="/" className='flex items-center hover:text-[#00B3A4]'>Сообщения</a>,
          key: '2',
        },
    ];

    return (
       
        <div className='lg:hidden sm:flex flex-shrink-0 items-center justify-end'>
            <Dropdown overlayStyle={{width: 250}} className='flex items-center hover:text-[#00B3A4]' menu={{ items }} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()} className='cursor-pointer'>
                    <Space>
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path>
                    </svg>
                        {/* <DownOutlined /> */}
                    </Space>
                </a>
            </Dropdown>
        </div>
    );
};

export default CustomDropdown;