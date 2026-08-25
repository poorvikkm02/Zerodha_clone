import { Link } from "react-router-dom";
import zerodhaLogo from '../assets/zerodha-logo.svg';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="upper_footer">
                    <div className="footer_section1">
                        <div className="logo">
                            <Link to="/dashboard">
                                <img src={zerodhaLogo} alt="Logo" />
                            </Link>
                        </div>
                        <div className="footer_text">
                            © 2010 - 2026, Zerodha Broking Ltd.<br/>All rights reserved.
                        </div>
                        <div className="social_media">
                            <div><img src="https://unpkg.com/simple-icons@11.12.0/icons/x.svg" alt="Twitter/X" /></div>
                            <div><img src="https://unpkg.com/simple-icons@11.12.0/icons/instagram.svg" alt="Instagram" /></div>
                            <div><img src="https://unpkg.com/simple-icons@11.12.0/icons/facebook.svg" alt="Facebook" /></div>
                            <div><img src="https://unpkg.com/simple-icons@11.12.0/icons/linkedin.svg" alt="LinkedIn" /></div>
                        </div>
                        <div className="social_media">
                            <div><img src="https://unpkg.com/simple-icons@11.12.0/icons/youtube.svg" alt="YouTube" /></div>
                            <div><img src="https://unpkg.com/simple-icons@11.12.0/icons/whatsapp.svg" alt="WhatsApp" /></div>
                            <div><img src="https://unpkg.com/simple-icons@11.12.0/icons/telegram.svg" alt="Telegram" /></div>
                        </div>
                        <div className="app_badges">
                            <div><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" /></div>
                            <div><img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" /></div>
                        </div>
                    </div>
                    <div className="footer_section2"> 
                        <div id="account">Account</div>
                        <div>Open demat account</div>
                        <div>Minor demat account</div>
                        <div>NRI demat account</div>
                        <div>HUF demat account</div>
                        <div>Commodity</div>
                        <div>Dematerialisation</div>
                        <div>Fund transfer</div>
                        <div>MTF</div>
                    </div>
                    <div className="footer_section3">
                        <div id="account">Support</div>
                        <div>Contact us</div>
                        <div>Support portal</div>
                        <div>Status of your complaints</div>
                        <div>How to file a complaint?</div>
                        <div>Bulletin</div>
                        <div>Circular</div>
                        <div>Z-Connect blog</div>
                        <div>Downloads</div>
                    </div>
                    <div className="footer_section4">
                        <div id="account">Company</div>
                        <div>About</div>
                        <div>Careers</div>
                        <div>Media</div>
                        <div>Zerodha Cares (CSR)</div>
                        <div>Press & media</div>
                        <div>Dematerialisation</div>
                        <div>Open source</div>
                        <div>Referral program</div>
                    </div>
                    <div className="footer_section5">
                        <div id="account">Quicklinks</div>
                        <div>Open demat account</div>
                        <div>Minor demat account</div>
                        <div>NRI demat account</div>
                        <div>HUF demat account</div>
                        <div>Commodity</div>
                        <div>Dematerialisation</div>
                        <div>Fund transfer</div>
                        <div>MTF</div>
                    </div>
                </div>
                <div className="lower_footer">
                    <div><p>Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address:
                    </p></div>
                    <div><p>Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                    </p></div>
                    <div><p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p></div>
                    <div className="bluetext"><p>Smart Online Dispute Resolution | Grievances Redressal Mechanism
                        </p></div>
                        <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services,<span className="bluetext"><br/>
                          please create a ticket <a href="#">here.</a></span></p>
                </div>
                <div className="lower_footer_lower_section">
                    <div></div>
                        <div>NSE</div>
                        <div>BSE</div>
                        <div>MSEI</div>
                        <div>MCX</div>
                        <div>Terms & conditions</div>
                        <div>Privacy policy</div>
                        <div>Disclaimer</div>
                        <div>For investor's attention</div>
                        <div>Anti-bribery policy</div>
                        <div>Fair practice code</div>
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;
