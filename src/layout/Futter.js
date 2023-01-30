import './Styles/Futter.css'
import {FaArrowUp, FaGithub, FaInstagram, FaTelegram, FaTwitter} from "react-icons/fa";

const Futter = () => {
    return (
        <div className={'Futter'}>
            <div className={'Icons'}>
                <a href='https://www.instagram.com/yurii__bobyk_/?igshid=NDk5N2NlZjQ%3D'>
                <FaInstagram/>
                </a>
                <a href='https://github.com/yuriybobyk'>
                <FaGithub/>
                </a>
                <a href='https://t.me/yura_bobyk'>
                <FaTelegram/>
                </a>
                <a href='https://twitter.com/YuriiBobyk?t=qv-YnNhOBA6gLlxdyoetJA&s=35'>
                <FaTwitter/>
                </a>
                <span>© 2023 Yurii Bobyk, Inc.</span>
                <button className={'up'}>
                <FaArrowUp onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}/>
                </button>


            </div>
        </div>
    );
};

export {Futter};