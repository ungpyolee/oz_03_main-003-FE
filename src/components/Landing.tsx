import { motion } from "framer-motion";
import { IconStar } from "../IconData";

const Landing = () => {
    return (
        <div className="select-none">
            <div className="w-full flex justify-center">
                <img className="w-[184px] mb-[100px]" src="/logo-white.png"></img>
            </div>
            <div className="w-[330px] h-[440px] relative flex flex-col">
                <motion.img
                    animate={{ right: [-100, 0], opacity: [0, 1] }}
                    transition={{ duration: 1, type: "tween" }}
                    className="w-[200px] -rotate-3 absolute right-0"
                    src="/img/landing-chat-user.png"
                />
                <motion.img
                    animate={{ left: [-100, 0], opacity: [0, 1] }}
                    transition={{ duration: 1, delay: 1, type: "tween" }}
                    className="left-0 w-[200px] rotate-3 absolute top-[100px]"
                    src="/img/landing-chat-ai.png"
                />
                <motion.img
                    animate={{ left: [-100, 100], opacity: [0, 1] }}
                    transition={{ duration: 1, delay: 1, type: "tween" }}
                    className="animate-bounce top-[170px] left-[100px] absolute w-[25px] "
                    src="/img/landing-worry.png"
                />

                <motion.div
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 1, delay: 2, type: "spring" }}
                >
                    <img
                        className="absolute top-[200px] left-[150px] w-[50px]"
                        src="/img/landing-happy.png"
                    />
                    <IconStar className="absolute top-[210px] left-[120px] w-[8px] -rotate-12 animate-pulse fill-white" />
                    <IconStar className="absolute top-[250px] left-[210px] w-[13px] rotate-[25deg] animate-pulse fill-white" />
                    <IconStar className="absolute top-[270px] left-[130px] w-[16px] rotate-3 animate-pulse fill-white" />

                    <img
                        className="absolute bottom-0 w-[200px] right-0"
                        src="/img/landing-trees.png"
                    />
                </motion.div>
            </div>
            <motion.div
                animate={{
                    translateY: [-30, 0],
                    opacity: [0, 1],
                }}
                transition={{
                    duration: 1,
                    delay: 3,
                    type: "spring",
                }}
                className="flex flex-col text-xl text-center mb-7"
            >
                <p className="text-white font-extralight">
                    대화 <span className="font-medium ">감정분석 AI 서비스</span>
                    <br />
                    <span className="font-medium">감정을 나무에 기록</span>하세요!
                </p>
            </motion.div>
        </div>
    );
};

export default Landing;
