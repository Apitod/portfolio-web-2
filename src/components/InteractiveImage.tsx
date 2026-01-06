import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "../Design/InteractiveImage.css";

interface InteractiveImageProps {
    src: string;
    alt: string;
    description: string;
    className?: string; // To inherit 'grid-item' or others
}

export default function InteractiveImage({ src, alt, description, className = "" }: InteractiveImageProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.div
                className={`${className} interactive-image-trigger`}
                layoutId={`container-${src}`}
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <motion.img
                    src={src}
                    alt={alt}
                    layoutId={`image-${src}`}
                    className="interactive-img"
                />
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <div className="interactive-overlay" onClick={() => setIsOpen(false)}>
                        <motion.div
                            className="interactive-card"
                            layoutId={`container-${src}`}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking card
                        >
                            <motion.img
                                src={src}
                                alt={alt}
                                layoutId={`image-${src}`}
                                className="interactive-card-img"
                            />
                            <motion.div
                                className="interactive-description"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ delay: 0.2 }}
                            >
                                <p>{description}</p>
                                <button className="close-btn" onClick={() => setIsOpen(false)}>Close</button>
                            </motion.div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
