import { FaJava, FaReact, FaLinux, FaGithub, FaDocker, FaNpm } from "react-icons/fa";
import { SiCss3, SiFirebase, SiHtml5, SiJavascript, SiAdobe, SiMysql } from "react-icons/si";
//styles
import './Tools.css'
export default function Tools() {
  return (
    <div className='tools-container'>
        <div className='tools-header'>
            <h1>Tools I Use:</h1>
        </div>
        <div className='tools-content'>
            <p>
                <ul>
                    <li>Java<FaJava /></li>
                    <li>React<FaReact/></li>
                </ul>
                <ul>
                    <li>Linux<FaLinux /></li>
                    <li>Git/Github<FaGithub /></li>
                </ul>
                 <ul>
                    <li>Firebase<SiFirebase/></li>
                    <li>Docker<FaDocker/></li>
                </ul>
                 <ul>
                    <li>HTML<SiHtml5 /></li>
                    <li>CSS<SiCss3/></li>
                </ul>
                 <ul>
                    <li>NPM<FaNpm/></li>
                    <li>SQL<SiMysql/></li>
                </ul>
                <ul>
                    <li>JavaScript<SiJavascript/></li>
                    <li>Adobe Creative Suite<SiAdobe/></li>
                </ul>
            </p>
        </div>
    </div>
  )
}
