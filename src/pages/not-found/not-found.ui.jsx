import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./not-found.style.scss";
import ROUTES from "../../routes/routes";

const NotFoundUi = () => {
    return (
        <div id="notfound">
            <div className="notfound">
                <motion.div
                    className="notfound-404"
                    initial={{ opacity: 0, scale: 0.25 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 125,
                            restDelta: 0.001,
                        },
                    }}
                >
                    <div></div>
                    <h1>404</h1>
                </motion.div>
                <h2>Page Not Found</h2>
                <Link to={ROUTES.BASE}>homepage</Link>
            </div>
        </div>
    );
};

export default NotFoundUi;
