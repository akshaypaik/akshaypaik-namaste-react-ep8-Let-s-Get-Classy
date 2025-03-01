import ShimmerCardImg from '../../../../../assets/ShimmerUI/ShimmerUICardImg.gif';
import './ShimmerUICard.css';

export default function ShimmerUICard() {
    return (
        <>
            <div className='shimmer-card-container'>
                <img src={ShimmerCardImg} alt="Loading" className='shimmer-image' />
            </div>
            <div className='shimmer-card-container'>
                <img src={ShimmerCardImg} alt="Loading" className='shimmer-image' />
            </div>
            <div className='shimmer-card-container'>
                <img src={ShimmerCardImg} alt="Loading" className='shimmer-image' />
            </div>
            <div className='shimmer-card-container'>
                <img src={ShimmerCardImg} alt="Loading" className='shimmer-image' />
            </div>
            <div className='shimmer-card-container'>
                <img src={ShimmerCardImg} alt="Loading" className='shimmer-image' />
            </div>
            <div className='shimmer-card-container'>
                <img src={ShimmerCardImg} alt="Loading" className='shimmer-image' />
            </div>
            <div className='shimmer-card-container'>
                <img src={ShimmerCardImg} alt="Loading" className='shimmer-image' />
            </div>
        </>
    )
}