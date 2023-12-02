import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Button} from 'antd';
import avatar from '../assets/img/avatar.jpg';
import { Dropdown, Space } from 'antd';



const Vacancy = () => {
    const items = [
        {
          label: 
            <a href="/" className='flex items-center hover:text-[#00B3A4]'>
                Активные 
            </a>,
          key: '0',
        },
        {
          label: <a href="/" className='flex items-center hover:text-[#00B3A4]'> Неактивные </a>,
          key: '1',
        },
        {
          label: <a href="/" className='flex items-center hover:text-[#00B3A4]'>На модерации</a>,
          key: '2',
        },
        {
            label: <a href="/" className='flex items-center hover:text-[#00B3A4]'>Удаленные</a>,
            key: '3',
        },
    ];

    return (
        <>
            <Header />
            <div className='w-full font-Nunito p-1'>
                <div className='container relative flex flex-row h-full mx-auto max-w-[1116px]'>
                    <div className='flex justify-start w-[51%] sm:w-full sm:ml-10 flex-col'>
                        <div className='flex flex-wrap basic-full items-center relative w-full'>
                            <h2 className='text-[32px] tracking-[1px] font-semibold'>Мои вакансии</h2>
                        </div>
                        <div className='lg:flex items-center sm:hidden relative justify-start basic-full w-full mt-2 mb-2'>
                            <ul className='flex flex-wrap relative'>
                                <li className='active pr-3'>
                                    <a href='/'>Активные</a>
                                </li>
                                <li className='text-[#8492a6] pr-3'>
                                    <a href='/' className='customDotted'>Неактивные</a>
                                </li>
                                <li className='text-[#8492a6] pr-3'>
                                    <a href='/' className='customDotted'>На модерации</a>
                                </li>
                                <li className='text-[#8492a6] pr-3'>
                                    <a href='/' className='customDotted'>Удаленные</a>
                                </li>
                                <li className='text-[#8492a6] pr-3'>
                                    <a href='/' className='customDotted'>Создать вакансию</a>
                                </li>
                            </ul>
                        </div>
                        <div className='lg:hidden sm:inline-block w-1/6 items-center relative'>
                            <Dropdown overlayStyle={{width: 250}} className='flex items-center hover:text-[#00B3A4]' menu={{ items }} trigger={['click']}>
                                <a onClick={(e) => e.preventDefault()} className='cursor-pointer'>
                                    <Space>
                                        Активные
                                        <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                        </svg> 
                                        {/* <DownOutlined /> */}
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                        <div className='flex flex-col items-start w-full mt-2 pr-10 pb-10 max-h-[1000px]'>
                            <div className='flex w-full justify-start items-stretch rounded-md shadow-[0_0_3px_#C4C4C4] mt-[25px]' >
                                <div className='flex relative w-10 justify-center items-start pt-5 customBorder'>
                                    <input type='checkbox' className='text-green-500 border-gray-300 rounded-lg w-[1em] h-[1em] focus:ring-0' />
                                </div>
                                <div className='flex flex-col relative w-[75%] p-4 customBorder leading-[1.5]'>
                                    <div className='flex relative w-full justify-start mb-3'>
                                        <span className='underline decoration-solid'>
                                            <h6 className="text-[#212529] font-semibold leading-[1.4]">Грузчик на склад срочно</h6>
                                        </span>
                                    </div>
                                    <div className='flex relative w-full justify-start mb-3'>
                                        <small className='text-[#8492a6]'>1jjce-2434</small>
                                    </div>
                                    <div className='flex relative w-full justify-start mb-3'>
                                        <small className='text-[#212529] !text-[14px] text-left'>
                                            Здесь описание вакансии Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </small>
                                    </div>
                                    <div className='flex relative w-full justify-start'>
                                        <a href="/" className="text-[#8492a6] text-[14px] customDotted">Отклики (2)</a>
                                    </div>
                                </div>
                                <div className='flex relative justify-end items-center pr-6 w-40'>
                                    <Button className='text-[10px] bg-[#00B2A4] text-[#FFFFFF]'>Транслирование</Button>
                                </div>
                            </div>
                            <div className='flex w-full justify-start items-stretch rounded-md shadow-[0_0_3px_#C4C4C4] mt-[25px]' >
                                <div className='flex relative w-10 justify-center items-start pt-5 customBorder'>
                                    <input type='checkbox' className='text-green-500 border-gray-300 rounded-lg w-[1em] h-[1em] focus:ring-0' />
                                </div>
                                <div className='flex flex-col relative w-[75%] p-4 customBorder leading-[1.5]'>
                                    <div className='flex relative w-full justify-start mb-3'>
                                        <span className='underline decoration-solid'>
                                            <h6 className="text-[#212529] font-semibold leading-[1.4]">Грузчик на склад срочно</h6>
                                        </span>
                                    </div>
                                    <div className='flex relative w-full justify-start mb-3'>
                                        <small className='text-[#8492a6]'>1jjce-2434</small>
                                    </div>
                                    <div className='flex relative w-full justify-start mb-3'>
                                        <small className='text-[#212529] !text-[14px] text-left'>
                                            Здесь описание вакансии Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </small>
                                    </div>
                                    <div className='flex relative w-full justify-start'>
                                        <a href="/" className="text-[#8492a6] text-[14px] customDotted">Отклики (2)</a>
                                    </div>
                                </div>
                                <div className='flex relative justify-end items-center pr-6 w-40'>
                                    <Button className='text-[10px] bg-[#00B2A4] text-[#FFFFFF]'>Транслирование</Button>
                                </div>
                            </div>
                            <div className='flex w-full justify-start items-stretch rounded-md shadow-[0_0_3px_#C4C4C4] mt-[25px]' >
                                <div className='flex relative w-10 justify-center items-start pt-5 customBorder'>
                                    <input type='checkbox' className='text-green-500 border-gray-300 rounded-lg w-[1em] h-[1em] focus:ring-0' />
                                </div>
                                <div className='flex flex-col relative w-[75%] p-4 customBorder leading-[1.5]'>
                                    <div className='flex relative w-full justify-start mb-3'>
                                        <span className='underline decoration-solid'>
                                            <h6 className="text-[#212529] font-semibold leading-[1.4]">Грузчик на склад срочно</h6>
                                        </span>
                                    </div>
                                    <div className='flex relative w-full justify-start mb-3'>
                                        <small className='text-[#8492a6]'>1jjce-2434</small>
                                    </div>
                                    <div className='flex relative w-full justify-start mb-3'>
                                        <small className='text-[#212529] !text-[14px] text-left'>
                                            Здесь описание вакансии Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </small>
                                    </div>
                                    <div className='flex relative w-full justify-start'>
                                        <a href="/" className="text-[#8492a6] text-[14px] customDotted">Отклики (2)</a>
                                    </div>
                                </div>
                                <div className='flex relative justify-end items-center pr-6 w-40'>
                                    <Button className='text-[10px] bg-[#00B2A4] text-[#FFFFFF]'>Транслирование</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex justify-start w-[49%] sm:hidden flex-col'>
                        <div className='flex items-center relative w-full'>
                            <h2 className='text-[32px] tracking-[1px] font-semibold'>Отклики на:</h2>
                        </div>
                        <div className='flex items-center relative justify-start basic-full w-full mt-2 mb-2 gap-1'>
                            <div className='flex items-center font-bold text-[#212529]'>
                                Грузчики на склад срочно
                            </div>
                            <a className='text-[#212529] cursor-pointer text-2xl pl-2'>←</a>
                            <a className='text-[#212529] cursor-pointer text-2xl'>→</a>
                        </div>
                        <div className='flex items-center flex-col pt-4'>
                            <div className='flex flex-col items-start w-full mt-2 pb-10 '>
                                <ul className='w-full justify-around rounded-md shadow-[0_0_3px_#C4C4C4] p-3 pr-5 list-item'>
                                    <li className='flex w-full mx-atuo customBottomBorder mb-2 p-2'>
                                        <div className='flex justify-content'>
                                            <img src={avatar} className='w-[45px] h-[45px]'/>
                                        </div>
                                        <div className='flex flex-col text-left text-[#212529] font-bold pl-3'>
                                            <p>18:55 15.06.2022</p>
                                            <p>Васильев Василий Васильевич</p>
                                        </div>
                                    </li>
                                    <li className='flex w-full customBottomBorder mb-2 p-2'>
                                        <div className='flex justify-content'>
                                            <img src={avatar} className='w-[45px] h-[45px]'/>
                                        </div>
                                        <div className='flex flex-col text-left text-[#212529] font-bold pl-3'>
                                            <p>18:55 15.06.2022</p>
                                            <p>Васильев Василий Васильевич</p>
                                        </div>
                                    </li>
                                    <li className='flex w-full customBottomBorder p-2'>
                                        <div className='flex justify-content'>
                                            <img src={avatar} className='w-[45px] h-[45px]'/>
                                        </div>
                                        <div className='flex flex-col text-left text-[#212529] font-bold pl-3'>
                                            <p>18:55 15.06.2022</p>
                                            <p>Васильев Василий Васильевич</p>
                                        </div>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Vacancy;