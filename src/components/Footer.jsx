import { FaGithub } from "react-icons/fa";
import { Link, useRouteError } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-items">
                <FaGithub className="footer-github-icon"/>
                
                <p className="footer-txt">Copy&copy; 2024 GitHub, inc.</p>
                <ul>
                    <li><Link className="link" to="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service/" target="_blank">Terms</Link></li>
                    <li><Link className="link" to="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement/" target="_blank">Privacy</Link></li>
                    <li><Link className="link" to="https://github.com/security" target="_blank" >Security</Link></li>
                    <li><Link className="link" to="https://www.githubstatus.com/" target="_blank">Status</Link></li>
                    <li><Link className="link" to="https://docs.github.com/en/" target="_blank">Docs</Link></li>
                    <li><Link className="link" to="https://support.github.com/?tags=dotcom-footer/" target="_blank">Contact</Link></li>
                    <li><Link className="link" to="#" target="_blank">Manage cookies</Link></li>
                    <li><Link className="link" to="#" target="_blank">Do not share my personal information</Link></li>
                    
                </ul>
                
            </div>
        </footer>
    )

}

export default Footer