import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface StickerData {
  id: string;
  emoji: string;
  left: string;
  top: string;
  rotate: number;
  size: number;
}

const sectionStickers: Record<string, StickerData[]> = {
  hero: [],
  about: [
    { id: 'a1', emoji: '🏔️', left: '3%',  top: '20%', rotate: -5,  size: 36 },
    { id: 'a2', emoji: '☕', left: '3%',  top: '52%', rotate: 10,  size: 34 },
    { id: 'a3', emoji: '🌿', left: '94%', top: '25%', rotate: -8,  size: 32 },
    { id: 'a4', emoji: '📖', left: '93%', top: '55%', rotate: 6,   size: 30 },
  ],
  experience: [
    { id: 'e1', emoji: '💼', left: '3%',  top: '20%', rotate: 8,   size: 36 },
    { id: 'e2', emoji: '🖥️', left: '3%',  top: '52%', rotate: -5,  size: 34 },
    { id: 'e3', emoji: '📝', left: '94%', top: '25%', rotate: 10,  size: 32 },
    { id: 'e4', emoji: '🚀', left: '93%', top: '55%', rotate: -8,  size: 30 },
  ],
  projects: [
    { id: 'p1', emoji: '💡', left: '3%',  top: '20%', rotate: -10, size: 36 },
    { id: 'p2', emoji: '🔧', left: '3%',  top: '52%', rotate: 8,   size: 34 },
    { id: 'p3', emoji: '⚙️', left: '94%', top: '25%', rotate: 5,   size: 32 },
    { id: 'p4', emoji: '📦', left: '93%', top: '55%', rotate: -12, size: 30 },
  ],
  skills: [
    { id: 's1', emoji: '⚡', left: '3%',  top: '20%', rotate: 15,  size: 36 },
    { id: 's2', emoji: '🎯', left: '3%',  top: '52%', rotate: -8,  size: 34 },
    { id: 's3', emoji: '🔮', left: '94%', top: '25%', rotate: 6,   size: 32 },
    { id: 's4', emoji: '💪', left: '93%', top: '55%', rotate: -10, size: 30 },
  ],
  education: [
    { id: 'ed1', emoji: '📚', left: '3%',  top: '20%', rotate: -6,  size: 36 },
    { id: 'ed2', emoji: '✏️', left: '3%',  top: '52%', rotate: 14,  size: 34 },
    { id: 'ed3', emoji: '🎓', left: '94%', top: '25%', rotate: -8,  size: 32 },
    { id: 'ed4', emoji: '📐', left: '93%', top: '55%', rotate: 5,   size: 30 },
  ],
  contact: [
    { id: 'c1', emoji: '💌', left: '3%',  top: '20%', rotate: 8,   size: 36 },
    { id: 'c2', emoji: '📮', left: '3%',  top: '52%', rotate: -12, size: 34 },
    { id: 'c3', emoji: '🤝', left: '94%', top: '25%', rotate: 5,   size: 32 },
    { id: 'c4', emoji: '🌸', left: '93%', top: '55%', rotate: -8,  size: 30 },
  ],
};

interface FloatingStickersProps {
  activeSection: string;
}

const FloatingStickers: React.FC<FloatingStickersProps> = ({ activeSection }) => {
  const stickers = sectionStickers[activeSection] ?? [];

  return (
    <div className="stickers-layer" aria-hidden="true">
      <AnimatePresence>
        {stickers.map((sticker, i) => (
          <div
            key={sticker.id}
            className="sticker-anchor"
            style={{ left: sticker.left, top: sticker.top }}
          >
            <motion.div
              className="sticker"
              drag
              dragMomentum={false}
              dragElastic={0.06}
              initial={{ scale: 0, opacity: 0, rotate: sticker.rotate - 25 }}
              animate={{ scale: 1, opacity: 1, rotate: sticker.rotate }}
              exit={{ scale: 0, opacity: 0, rotate: sticker.rotate + 25 }}
              transition={{
                delay: i * 0.07,
                type: 'spring',
                stiffness: 280,
                damping: 18,
              }}
              whileHover={{
                rotate: [
                  sticker.rotate,
                  sticker.rotate - 12,
                  sticker.rotate + 12,
                  sticker.rotate - 6,
                  sticker.rotate,
                ],
                scale: 1.25,
                transition: { duration: 0.4, ease: 'easeInOut' },
              }}
              whileTap={{ scale: 0.88 }}
              style={{ fontSize: sticker.size }}
            >
              {sticker.emoji}
            </motion.div>
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FloatingStickers;

