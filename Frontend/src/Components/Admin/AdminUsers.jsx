import {Pagination} from "antd";
import {useState} from "react";
import {MdOutlineMoreVert} from "react-icons/md";

const AdminUsers = () => {
    const [showAction, setShowAction] = useState(false);

    const handleShowAction = () => {
        setShowAction(true);
    };

    return (
        <>
            <div className="w-full h-[89vh]">
                <div className="w-full h-14 flex items-center justify-between px-5">
                    <h1 className="text-lg">Users</h1>
                    <div className="w-40 h-8">
                        <select name="" id="" className="w-full h-full">
                            <option value="">All Users</option>
                            <option value="">Admins</option>
                            <option value="">Drivers</option>
                            <option value="">Pro Members</option>
                            <option value="">Regular Users</option>
                        </select>
                    </div>
                </div>
                <div className="w-full h-[78%] bg-red-500">
                    <div className="w-full h-16 flex justify-between items-center px-5">
                        <div className="w-80 h-12 flex items-center ">NAME</div>
                        <div className="w-56 h-12 flex items-center ">
                            EMAIL
                        </div>
                        <div className="w-52 h-12 flex items-center ">
                            PHONE
                        </div>
                        <div className="w-32 h-12 flex items-center ">ROLE</div>
                        <div className="w-32 h-12 flex items-center ">
                            STATUS
                        </div>
                        <div className="w-24 h-12 flex items-center ">
                            ACTION
                        </div>
                    </div>
                    <div className="w-full h-[87%] bg-orange-50">
                        <div className="w-full h-16 bg-amber-600  border-b border-blue-950 flex justify-between items-center px-5">
                            <div className="w-80 h-12 flex items-center gap-3">
                                <img
                                    src=""
                                    alt=""
                                    className="w-10 h-10 bg-purple-500 rounded-full"
                                />
                                <p>Rapheal Ukachukwu</p>
                            </div>
                            <div className="w-56 h-12 flex items-center">
                                raphealjunior07@gmail.com
                            </div>
                            <div className="w-52 h-12 flex items-center">
                                +2348129931343
                            </div>
                            <div className="w-32 h-12 flex items-center">
                                User
                            </div>
                            <div className="w-32 h-12 flex items-center">
                                <span></span>
                                <p>Active</p>
                            </div>
                            <div className="w-24 h-12 flex items-center relative">
                                <MdOutlineMoreVert
                                    className=" w-8 h-10 cursor-pointer"
                                    onClick={handleShowAction}
                                />
                                {showAction ? (
                                    <>
                                        <div className="w-40 h-40 rounded-md absolute top-10 right-5 bg-slate-100 p-1">
                                            <ul className="w-full h-full flex flex-col">
                                                <li className="w-full h-10 bg-slate-100 flex items-center justify-center cursor-pointer border-b border-black">
                                                    Make Admin
                                                </li>
                                                <li className="w-full h-10 bg-slate-100 flex items-center justify-center cursor-pointer border-b border-black">
                                                    Make Driver
                                                </li>
                                                <li className="w-full h-10 bg-slate-100 flex items-center justify-center cursor-pointer border-b border-black">
                                                    Block User
                                                </li>
                                                <li className="w-full h-10 bg-slate-100 flex items-center justify-center cursor-pointer border-b border-black">
                                                    Other
                                                </li>
                                            </ul>
                                        </div>
                                    </>
                                ) : null}
                            </div>
                        </div>
                        <div className="w-full h-16 bg-amber-600 border-b border-blue-950 flex justify-between items-center px-5">
                            <div className="w-80 h-12 flex items-center gap-3">
                                <img
                                    src=""
                                    alt=""
                                    className="w-10 h-10 bg-purple-500 rounded-full"
                                />
                                <p>Rapheal Ukachukwu</p>
                            </div>
                            <div className="w-56 h-12 flex items-center">
                                raphealjunior07@gmail.com
                            </div>
                            <div className="w-52 h-12 flex items-center">
                                +2348129931343
                            </div>
                            <div className="w-32 h-12 flex items-center">
                                User
                            </div>
                            <div className="w-32 h-12 flex items-center">
                                <span></span>
                                <p>Active</p>
                            </div>
                            <div className="w-24 h-12 flex items-center">
                                <MdOutlineMoreVert />
                            </div>
                        </div>
                        <div className="w-full h-16 bg-amber-600 border-b border-blue-950 flex justify-between items-center px-5">
                            <div className="w-80 h-12 flex items-center gap-3">
                                <img
                                    src=""
                                    alt=""
                                    className="w-10 h-10 bg-purple-500 rounded-full"
                                />
                                <p>Rapheal Ukachukwu</p>
                            </div>
                            <div className="w-56 h-12 flex items-center">
                                raphealjunior07@gmail.com
                            </div>
                            <div className="w-52 h-12 flex items-center">
                                +2348129931343
                            </div>
                            <div className="w-32 h-12 flex items-center">
                                User
                            </div>
                            <div className="w-32 h-12 flex items-center">
                                <span></span>
                                <p>Active</p>
                            </div>
                            <div className="w-24 h-12 flex items-center">
                                <MdOutlineMoreVert />
                            </div>
                        </div>
                        <div className="w-full h-16 bg-amber-600 border-b border-blue-950 flex justify-between items-center px-5">
                            <div className="w-80 h-12 flex items-center gap-3">
                                <img
                                    src=""
                                    alt=""
                                    className="w-10 h-10 bg-purple-500 rounded-full"
                                />
                                <p>Rapheal Ukachukwu</p>
                            </div>
                            <div className="w-56 h-12 flex items-center">
                                raphealjunior07@gmail.com
                            </div>
                            <div className="w-52 h-12 flex items-center">
                                +2348129931343
                            </div>
                            <div className="w-32 h-12 flex items-center">
                                User
                            </div>
                            <div className="w-32 h-12 flex items-center">
                                <span></span>
                                <p>Active</p>
                            </div>
                            <div className="w-24 h-12 flex items-center">
                                <MdOutlineMoreVert />
                            </div>
                        </div>
                        <div className="w-full h-16 bg-amber-600 border-b border-blue-950 flex justify-between items-center px-5">
                            <div className="w-80 h-12 flex items-center gap-3">
                                <img
                                    src=""
                                    alt=""
                                    className="w-10 h-10 bg-purple-500 rounded-full"
                                />
                                <p>Rapheal Ukachukwu</p>
                            </div>
                            <div className="w-56 h-12 flex items-center">
                                raphealjunior07@gmail.com
                            </div>
                            <div className="w-52 h-12 flex items-center">
                                +2348129931343
                            </div>
                            <div className="w-32 h-12 flex items-center">
                                User
                            </div>
                            <div className="w-32 h-12 flex items-center">
                                <span></span>
                                <p>Active</p>
                            </div>
                            <div className="w-24 h-12 flex items-center">
                                <MdOutlineMoreVert />
                            </div>
                        </div>
                        <div className="w-full h-16 bg-amber-600 border-b border-blue-950 flex justify-between items-center px-5">
                            <div className="w-80 h-12 flex items-center gap-3">
                                <img
                                    src=""
                                    alt=""
                                    className="w-10 h-10 bg-purple-500 rounded-full"
                                />
                                <p>Rapheal Ukachukwu</p>
                            </div>
                            <div className="w-56 h-12 flex items-center">
                                raphealjunior07@gmail.com
                            </div>
                            <div className="w-52 h-12 flex items-center">
                                +2348129931343
                            </div>
                            <div className="w-32 h-12 flex items-center">
                                User
                            </div>
                            <div className="w-32 h-12 flex items-center">
                                <span></span>
                                <p>Active</p>
                            </div>
                            <div className="w-24 h-12 flex items-center">
                                <MdOutlineMoreVert />
                            </div>
                        </div>
                        <div className="w-full h-16 bg-amber-600 border-b border-blue-950 flex justify-between items-center px-5">
                            <div className="w-80 h-12 flex items-center gap-3">
                                <img
                                    src=""
                                    alt=""
                                    className="w-10 h-10 bg-purple-500 rounded-full"
                                />
                                <p>Rapheal Ukachukwu</p>
                            </div>
                            <div className="w-56 h-12 flex items-center">
                                raphealjunior07@gmail.com
                            </div>
                            <div className="w-52 h-12 flex items-center">
                                +2348129931343
                            </div>
                            <div className="w-32 h-12 flex items-center">
                                User
                            </div>
                            <div className="w-32 h-12 flex items-center">
                                <span></span>
                                <p>Active</p>
                            </div>
                            <div className="w-24 h-12 flex items-center">
                                <MdOutlineMoreVert />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-16 flex items-center justify-between px-5">
                    <div>
                        <p>Showing results of 1-7 of 321 Users</p>
                    </div>
                    <div>
                        <Pagination defaultCurrent={1} total={50} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminUsers;
