import { FaGithub } from "react-icons/fa"

function Navbar() {
    return (
        <footer className="navbar">
            <FaGithub className="github-icon"/>
            <div><p className="footer-txt">Copy&copy; 2024 GitHub, inc.</p>
            <ul>
                <li><Link to="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service/">Terms</Link></li>
                <li><Link to="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement/">Privacy</Link></li>
                <li><Link to="https://github.com/security">Security</Link></li>
                <li><Link to="https://www.githubstatus.com/">Status</Link></li>
                <li><Link to="https://docs.github.com/en/">Docs</Link></li>
                <li><Link to="https://support.github.com/?tags=dotcom-footer/">Contact</Link></li>
                <li><Link to="./components/Home">Manag cookies</Link></li>
            </ul>
            </div>
        </footer>
    )

}

export default Navbar