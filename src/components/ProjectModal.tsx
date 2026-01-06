import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion, AnimatePresence } from 'framer-motion';
import '../Design/ProjectModal.css';

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        title: string;
        description: string;
        images: string[];
        label?: string;
    } | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
    const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: false }, [
        Autoplay({ delay: 3000, stopOnInteraction: false })
    ]);

    const handleBackdropClick = useCallback((e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }, [onClose]);

    if (!isOpen || !project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="modal-backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleBackdropClick}
                >
                    <motion.div
                        className="modal-content"
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                    >
                        <button className="modal-close" onClick={onClose}>×</button>

                        <div className="modal-carousel-container">
                            <div className="embla" ref={emblaRef}>
                                <div className="embla__container">
                                    {project.images.map((src, index) => (
                                        <div className="embla__slide" key={index}>
                                            <img src={src} alt={`${project.title} ${index + 1}`} className="carousel-image" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="modal-details">
                            {project.label && <span className="modal-label">{project.label}</span>}
                            <h2 className="modal-title">{project.title}</h2>
                            <p className="modal-description">{project.description}</p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
