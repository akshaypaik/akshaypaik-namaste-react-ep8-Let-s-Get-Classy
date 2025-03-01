import { useEffect, useState } from 'react';
import './RestaurantMenu.css';
import RestaurantMenuCard from '../RestaurantMenuCard/RestaurantMenuCard';
import { useParams } from 'react-router-dom';
import { SWIGGY_RESTAURANTS_MENU } from '../../../../utils/apiConstants';
import ShimmerUICard from '../ShimmerUI/ShimmerUICard/ShimmerUICard';

export default function RestaurantMenu(){

    const [resInfo, setResInfo] = useState({});
    const [menuItemCards, setMenuItemCards] = useState([]);
    const { resturantId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async() => {
        const data = await fetch(`${SWIGGY_RESTAURANTS_MENU}${resturantId}&catalog_qa=undefined&submitAction=ENTER`);
        const jsonData = await data.json();
        console.log("menu details: ", jsonData);
        setResInfo(jsonData?.data?.cards[2]?.card?.card?.info);
        const menuItemCardsData = [];
        jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.forEach((card) => {
            if(card.card?.card?.itemCards){
                menuItemCardsData.push(...card.card?.card?.itemCards);
            }
        })
        // const menuItemCardsData = jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card?.itemCards || jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card?.itemCards;
        console.log("menuItemCardsData: ", menuItemCardsData);
        
        setMenuItemCards(menuItemCardsData);
    }

    const { name, cuisines, costForTwoMessage } = resInfo;
    // console.log(resInfo.cuisines);
    console.log("menuItemCards: ", menuItemCards);

    if(menuItemCards.length === 0){
        return <ShimmerUICard />
    }
    

    return(
        <div className="res-menu">
            <h1>{name}</h1>
            <div> {cuisines?.join(", ").toUpperCase()} - <strong>{costForTwoMessage}</strong></div>
            <h2>Menu</h2>
            {menuItemCards.map(item => <RestaurantMenuCard menuCardDetails={item?.card?.info} key={item?.card?.info.id}/>)}
        </div>
    )
}