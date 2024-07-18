import ButtonDefault from "../button/ButtonDefault";
import { IconClose } from "../../config/IconData";
import { twMerge as tw } from "tailwind-merge";

const ModalCreateTree = () => {
    return (
        <div className={tw("p-5 bg-gray-800 text-white w-80", "relative border border-gray-600")}>
            <h3 className="font-title leading-5 text-gray-200">새 나무 심기</h3>
            <input
                type="text"
                placeholder="이름을 지어주세요."
                className={tw(
                    "mt-6 border-b outline-none border-gray-600",
                    "h-10 w-full bg-gray-800 placeholder:text-gray-600 focus:border-white"
                )}
            ></input>
            <div className="text-right mt-4">
                <ButtonDefault className="ml-1">나무 심기</ButtonDefault>
            </div>
            <button
                type="button"
                className="text-zero w-5 h-5 absolute right-5 top-5 fill-gray-600 hover:fill-white transition"
            >
                <IconClose />
                닫기
            </button>
        </div>
    );
};

export default ModalCreateTree;
