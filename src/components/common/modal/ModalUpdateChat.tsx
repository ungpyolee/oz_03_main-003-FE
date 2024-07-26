import ButtonDefault from "../button/ButtonDefault";
import { IconClose, IconSelectArrow } from "../../../config/IconData";
import { twMerge as tw } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ModalListItem from "./ModalListItem";
import { useUserChatStore, useUserStore } from "../../../config/store";

interface ModalUpdateChatProps {
    isOpen: boolean;
    onClose: () => void;
    chat_room_uuid: string;
}

const ModalUpdateChat = ({ isOpen, onClose, chat_room_uuid }: ModalUpdateChatProps) => {
    const { treeDetail } = useUserStore((state) => state.userData);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    // dropDown treelist data
    const [selectedTree, setSelectedTree] = useState<{ name: string; uuid: string } | null>(null);

    const inputRef = useRef<HTMLInputElement>(null);
    const { chatRooms } = useUserChatStore();

    const chatRoomData = chatRooms.find((item) => item.chat_room_uuid === chat_room_uuid);
    const chatRoomName = chatRoomData?.chat_room_name;

    const treeData = treeDetail.find((item) => item.tree_uuid === chatRoomData?.tree_uuid);
    const treeName = treeData?.tree_name;
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    const handleItemClick = (tree: { name: string; uuid: string }) => {
        setSelectedTree(tree);
        setIsDropdownOpen(false);
    };

    const closeHandler = () => {
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    onClick={closeHandler}
                    onKeyDown={(e) => {
                        e.key === "Escape" && closeHandler();
                    }}
                    className={tw("inset-0 select-none z-0 fixed flex items-center justify-center")}
                >
                    <nav
                        onClick={stopPropagation}
                        className={tw(
                            "p-5 bg-gray-800 text-white w-80 border border-gray-600",
                            "absolute z-20"
                        )}
                    >
                        <h3 className="font-title leading-5 mb-4 text-gray-200">
                            채팅방 정보 변경
                        </h3>
                        <p>
                            <b>{chatRoomName}</b>의 이름을 변경합니다.
                        </p>
                        <p>{treeName}</p>
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="이름을 입력해주세요."
                            className="mt-6 border-b outline-none border-gray-600 h-10 w-full bg-gray-800 placeholder:text-gray-600 focus:border-white"
                        ></input>

                        <h3 className="font-title leading-5 mb-2 mt-6 text-gray-200">
                            나무를 선택해 주세요.
                        </h3>
                        <div onClick={toggleDropdown} className="relative">
                            <div
                                id="tab"
                                className={tw(
                                    "py-3 px-4 bg-gray-600",
                                    ` ${isDropdownOpen ? "" : "hover:bg-gray-400 cursor-pointer"}`,
                                    "fill-white flex items-center justify-between select-none "
                                )}
                            >
                                {selectedTree ? selectedTree.name : treeName}
                                <IconSelectArrow
                                    className={`w-4 transition-transform duration-300 ${isDropdownOpen ? "transform rotate-180" : ""}`}
                                />
                            </div>
                            {/* tree list rendering */}
                            {isDropdownOpen && (
                                <ul className="absolute left-0 top-13 right-0 z-10 cursor-pointer">
                                    {treeDetail.map((item) => (
                                        <ModalListItem
                                            key={item.tree_uuid}
                                            item={{ name: item.tree_name, uuid: item.tree_uuid }}
                                            onClick={handleItemClick}
                                        />
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className="text-right mt-4">
                            <ButtonDefault>변경하기</ButtonDefault>
                            <ButtonDefault className="ml-1">취소하기</ButtonDefault>
                        </div>
                        <button
                            type="button"
                            className="text-zero w-5 h-5 absolute right-5 top-5 fill-gray-600 hover:fill-white transition"
                            onClick={closeHandler}
                        >
                            <IconClose />
                            닫기
                        </button>
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ModalUpdateChat;
