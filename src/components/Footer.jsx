
import { Link } from "react-router-dom";


export const Footer = () => {

    return (
        <footer className=" bg-whitish dark:bg-darkwhitish">
            <div className="flex-row container">
                <div>
                    <p className="text-5xl text-titlegray dark:text-darktitlegray font-semibold">Let’s work together on </p>
                    <p className="text-5xl text-titlegray dark:text-darktitlegray font-semibold mb-20"> your next product.</p>
                </div>
                <div className="flex justify-between">
                    <Link to="mailto:burzenn@gmail.com" className="text-redish dark:text-darkredish text-xl underline">
                        burzenn@gmail.com
                    </Link>
                    <div className="flex gap-3">
                        <button className="text-black text-xl" href="#">Personal Blog</button>
                        <a href="https://www.github.com/burzenn" target="_blank" className="text-[#00AB6B] text-xl">Github</a>
                        <a href="https://www.linkedin.com/in/burcuzengin" target="_blank" className="text-[#0077B5] text-xl">Linkedin</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;