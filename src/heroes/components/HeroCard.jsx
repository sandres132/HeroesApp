import React from 'react'
import { Link } from 'react-router-dom';

const CharacterByHero = ({alter_ego, characters}) => {
    // if (alter_ego === characters) return (<></>);

    // return <p>{characters}</p>;

    return (alter_ego === characters) ? <></> : <p>{characters}</p>;
}

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const heroImageUrl = `/assets/heroes/${ id }.jpg`;

    // const characterByHero = <p>{characters}</p>;

  return (
    <div className='col animate__animated animate__jackInTheBox mt-2'>
        <div className="card">
            <div className="row no-gutters">
                <div className="col-4">
                    <img className='card-img' src={heroImageUrl} alt={superhero} />
                </div>

                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>

                        {/* {
                            (alter_ego !== characters) && (<p>{characters}</p>)
                        } */}

                        {/* {
                            (alter_ego !== characters) && characterByHero
                        } */}


                        <Link to={`/hero/${id}`}>
                            More..
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
