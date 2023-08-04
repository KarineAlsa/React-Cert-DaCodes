import React from 'react'
import {TbStarFilled, TbStarHalfFilled, TbStar} from "react-icons/tb"
interface StarsProps {
    stars: number;
}
const Stars: React.FC<StarsProps> = (props) => {
    const { stars } = props;

    const ratingStars = Array.from({ length: 5 }, (_, index) => {
        const number = index + 0.5;
        return (
            <span key={index}>
                {stars/2 >= index + 1 ? <TbStarFilled /> : stars/2 >= number ? <TbStarHalfFilled /> : <TbStar />}
            </span>
        );
    });

    return <div className="flex text-yellow-300 text-2xl">{ratingStars}</div>;
};
export default Stars;