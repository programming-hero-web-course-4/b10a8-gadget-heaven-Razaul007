

const Footer = () => {
    return (
        <div>
            <footer className="bg-base-100 mt-20">
                <div className="space-y-5">
                    <div className="flex flex-col items-center" >
                        <h2 className="text-3xl font-bold">Gadget Heaven</h2>
                        <p>Leading the way in cutting-edge technology and innovation</p>
                    </div>
                    <hr className=" mx-16" />
                    <div className=" flex justify-around items-center">
                        <div className="flex flex-col items-center">
                            <h6 className="footer-title">Services</h6>
                            <a className="link link-hover">Branding</a>
                            <a className="link link-hover">Design</a>
                            <a className="link link-hover">Marketing</a>
                            <a className="link link-hover">Advertisement</a>
                        </div>
                        <div className="flex flex-col items-center">
                            <h6 className="footer-title">Company</h6>
                            <a className="link link-hover">About us</a>
                            <a className="link link-hover">Contact</a>
                            <a className="link link-hover">Jobs</a>
                            <a className="link link-hover">Press kit</a>
                        </div>
                        <div className="flex flex-col items-center">
                            <h6 className="footer-title">Legal</h6>
                            <a className="link link-hover">Terms of use</a>
                            <a className="link link-hover">Privacy policy</a>
                            <a className="link link-hover">Cookie policy</a>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;