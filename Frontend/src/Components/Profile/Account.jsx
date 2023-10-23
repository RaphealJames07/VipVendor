import { Form, Input, Modal} from "antd";
import TextArea from "antd/es/input/TextArea";
import {useState} from "react";
import {AiFillEdit} from "react-icons/ai";
import {BsFillCheckCircleFill} from "react-icons/bs";

const Account = () => {
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Doe");
    const [email, setEmail] = useState("test@gmail.com");
    const [phoneNumber, setPhoneNumber] = useState("1234567890");
    const [editMode, setEditMode] = useState(false);
    // const [password, setPassword] = useState("*********");
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [editAddy, setEditAddy] = useState(false);
    const [addy, setAddy] = useState([
        "No 10 Somewhere in lagos nigeria Ikeja Lagos Nigeria",
        "No 2 Somewhere in lagos nigeria Ikeja Lagos Nigeria",
    ]);

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    const handleAddyChange = (e) => {
        setAddy(e.target.value);
    };

    const toggleEditAddy = () => {
        setEditAddy(!editAddy);
    };

    const handleEditPassword = () => {
        setShowPasswordModal(true);
    };

    return (
        <>
            <div className="w-full h-[100vh] flex flex-col justify-between pb-10">
                <div className="w-full h-[50%] bg-white border-x-2 border-y-2 border-pry rounded p-4">
                    <p className="text-pry text-2xl font-semibold w-full h-10 flex items-center">
                        Account Information
                    </p>
                    <div className="w-full h-[90%] ">
                        <div className="w-full h-[70%]">
                            <div className="w-full h-[50%] flex justify-between">
                                <div className="w-[45%] h-full flex  flex-col">
                                    <label
                                        htmlFor=""
                                        className="w-full h-[40%] flex items-center text-lg"
                                    >
                                        {" "}
                                        First Name
                                    </label>
                                    <Input
                                        className="w-full h-[40%] text-lg border-pry"
                                        value={firstName}
                                        onChange={handleFirstNameChange}
                                        disabled={!editMode}
                                    />
                                </div>
                                <div className="w-[45%] h-full flex  flex-col">
                                    <label
                                        htmlFor=""
                                        className="w-full h-[40%] flex items-center text-lg"
                                    >
                                        {" "}
                                        Last Name
                                    </label>
                                    <Input
                                        className="w-full h-[40%] text-lg border-pry"
                                        value={lastName}
                                        onChange={handleLastNameChange}
                                        disabled={!editMode}
                                    />
                                </div>
                            </div>
                            <div className="w-full h-[50%] flex justify-between">
                                <div className="w-[45%] h-full flex  flex-col">
                                    <label
                                        htmlFor=""
                                        className="w-full h-[40%] flex items-center text-lg"
                                    >
                                        Email
                                    </label>
                                    <Input
                                        className="w-full h-[40%] text-lg border-pry"
                                        value={email}
                                        onChange={handleEmailChange}
                                        disabled={!editMode}
                                    />
                                </div>
                                <div className="w-[45%] h-full flex  flex-col">
                                    <label
                                        htmlFor=""
                                        className="w-full h-[40%] flex items-center text-lg"
                                    >
                                        Phone Number
                                    </label>
                                    <Input
                                        className="w-full h-[40%] text-lg border-pry"
                                        value={phoneNumber}
                                        onChange={handlePhoneNumberChange}
                                        disabled={!editMode}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[30%] flex items-center justify-center gap-10">
                            {editMode ? (
                                <button
                                    type="primary"
                                    className=" bg-pry w-32 rounded text-white h-10"
                                >
                                    Save Initials
                                </button>
                            ) : (
                                <button
                                    onClick={toggleEditMode}
                                    className=" bg-pry w-32 rounded text-white h-10"
                                >
                                    Edit Account
                                </button>
                            )}
                            <button
                                onClick={handleEditPassword}
                                className=" bg-pry w-40 rounded text-white h-10"
                            >
                                Change Password
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[45%]  border-x-2 border-y-2 border-pry rounded p-4">
                    <p className="text-pry text-2xl font-semibold w-full h-14 flex items-center">
                        Delivery Address
                    </p>
                    <div className="w-full h-[65%] flex items-center overflow gap-3">
                        <span className="w-72 h-[90%] flex flex-col gap-4 ">
                            <label className="w-full h-[20%] flex items-end justify-between text-lg px-2">
                                Address 1{" "}
                                <span
                                    className="w-7 h-7 cursor-pointer"
                                    onClick={toggleEditAddy}
                                >
                                    {editAddy ? (
                                        <BsFillCheckCircleFill className="text-2xl" />
                                    ) : (
                                        <AiFillEdit className="text-2xl" />
                                    )}
                                </span>
                            </label>
                            <TextArea
                                size="large"
                                rows={4}
                                placeholder=""
                                className="w-full h-[70%] border-pry"
                                disabled={!editAddy}
                                value={addy[0]}
                                onChange={handleAddyChange}
                            />
                        </span>
                        <span className="w-72 h-[90%] flex flex-col gap-4 ">
                            <label className="w-full h-[20%] flex items-end justify-between text-lg px-2">
                                Address 1{" "}
                                <span
                                    className="w-7 h-7 cursor-pointer"
                                    onClick={toggleEditAddy}
                                >
                                    {editAddy ? (
                                        <BsFillCheckCircleFill className="text-2xl" />
                                    ) : (
                                        <AiFillEdit className="text-2xl" />
                                    )}
                                </span>
                            </label>
                            <TextArea
                                size="large"
                                rows={4}
                                placeholder=""
                                className="w-full h-[70%] border-pry"
                                disabled={!editAddy}
                                value={addy[0]}
                                onChange={handleAddyChange}
                            />
                        </span>
                        <span className="w-72 h-[90%] flex flex-col gap-4">
                            <label className="w-full h-[20%] flex items-end justify-between text-lg px-2">
                                Address 1{" "}
                                <span
                                    className="w-7 h-7 cursor-pointer"
                                    onClick={toggleEditAddy}
                                >
                                    {editAddy ? (
                                        <BsFillCheckCircleFill className="text-2xl" />
                                    ) : (
                                        <AiFillEdit className="text-2xl" />
                                    )}
                                </span>
                            </label>
                            <TextArea
                                size="large"
                                rows={4}
                                placeholder=""
                                className="w-full h-[70%] border-pry"
                                disabled={!editAddy}
                                value={addy[1]}
                                onChange={handleAddyChange}
                            />
                        </span>
                    </div>
                    <div className="w-full h-[20%]  flex items-center justify-center">
                        <button className=" bg-pry w-40 rounded text-white h-10">Add New Address</button>
                    </div>
                </div>
            </div>
            <Modal
                title="Change Password"
                open={showPasswordModal}
                onOk={""}
                onCancel={() => setShowPasswordModal(false)}
            >
                <Form>
                    <Form.Item label="New Password">
                        <Input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item label="Confirm New Password">
                        <Input
                            type="password"
                            value={confirmNewPassword}
                            onChange={(e) =>
                                setConfirmNewPassword(e.target.value)
                            }
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default Account;
