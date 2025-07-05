import { CATEGORIES } from '@/app/_assets/data';
import { animate, AnimationPlaybackControls, MotionValue, useMotionValue, useTransform, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Badges() {
    const controls = useRef<AnimationPlaybackControls>(null);
    const translateX = useMotionValue(0);
    const sliderMotion = useTransform(translateX, (value) => `${value * -1}%`);

    function stopAnimation() {
        if(controls.current) controls.current.stop();
    }
    function moveCategories(duration: number, waitToFinish?: boolean) {
        stopAnimation();

        if(waitToFinish) {
            const currentXValue = translateX.get();
            const durationToFinish = duration - (duration * (currentXValue / 100));

            controls.current = animate(translateX, [currentXValue, 100], {
                duration: durationToFinish,
                ease: 'linear', 
                onComplete: () => moveCategories(duration)
            })
        } else {
            controls.current = animate(translateX, [0, 100], {
                duration,
                ease: 'linear',
                repeat: Infinity
            })
        }
    };

    function slowDownMove() {
        moveCategories(30, true);
    };

    function revertToNormalSpeed() {
        moveCategories(20, true);
    }

    useEffect(() => {
        moveCategories(20);
    }, []);

    return (
        <div onMouseOver={slowDownMove} onMouseOut={revertToNormalSpeed} className="w-full flex overflow-hidden bg-light-orange py-6">
            <CategorySlider x={sliderMotion} />
            <CategorySlider x={sliderMotion} />
        </div>
    )
};

function CategorySlider({ x }: { x: MotionValue }) {
    return (
        <motion.ul 
            style={{ x }}
            className="w-fit flex gap-4 overflow-visible pr-4"
        >
            {
                CATEGORIES.map(({ title, Icon, href }) => (
                    <li key={title}>
                        <Link draggable={false} href={`/category${href}`} className={`bg-white overflow-hidden relative min-w-[280px] flex justify-between p-4 pb-4 rounded-2xl`}>
                            <div className="flex items-center gap-4">
                                <span className="flex items-center justify-center w-10 aspect-square rounded-full bg-light-orange text-dark-orange">
                                    <Icon size={20} />
                                </span>
                                <div className="flex flex-col">
                                    <span className="font-semibold text-xl tracking-tighter text-dark-orange">{title}</span>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))
            }
        </motion.ul>
    )
};