"use client";

import { FaUser, FaHome } from 'react-icons/fa';
import Image from 'next/image';
import logo from '../assets/logo.png';
import CreateUser from './createuser';
import Table from './table';

const AdminPanel = () => {

    return (
        <div className="flex min-h-screen bg-[#F5F7FA]">
            <aside className="w-1/5 bg-white p-6 shadow-md">
                <Image src={logo.src} alt="Logo Willinn" width={100} height={100} className="w-24 mx-auto mb-8" />
                <nav className="space-y-6">
                    <div className="flex items-center text-pink-600">
                        <FaHome className="mr-3" />
                        <span>Inicio</span>
                    </div>
                    <div className="flex items-center text-pink-600 font-bold">
                        <FaUser className="mr-3" />
                        <span>Usuarios</span>
                    </div>
                </nav>
            </aside>
            <Table/>
            <CreateUser />
        </div>
    );
};


export default AdminPanel;
