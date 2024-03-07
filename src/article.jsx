export default function Article({plane_list, current_plane, filter_for, show_cards}) {
  //create an empty variable which will hold the fighter_list passed as a prop
  let processed_list;

  //functions which sends back to the main code the id of the plane in the article which the user clicked in
  const handle_click = (id) => {
    current_plane(id);
  }

  //conditional checks whether it needs to filter the array for a specific generation of fighter jet
  if (filter_for >= 1 && filter_for <= 5) {
    processed_list = plane_list.filter(plane => plane.generation === filter_for);
  }else{
    processed_list = plane_list;
  }
  //Component uses the map function to iterate over the array of plane objects and fills in elements of an article tag, the result is an article is created for each plane object in the fighter_list array
    return (
        <>
          {processed_list.map((plane, id) => (
            <article id="articles" key={id} className="col" onClick={() => handle_click(plane.id)}>
              <img src={plane.images[0]} alt="" />
              <h5>{plane.fighter_name}</h5>
              {show_cards && (<div className="">
                <p>{"Max Speed: " + plane.max_speed + " km/h"}</p>
                <p>{"Climb rate: " + plane.climb_rate + " meters per second"}</p>
                <p>{"Flight Ceiling: " + plane.flight_ceiling + " meters"}</p>
                <p>{"Payload Capacity: " + plane.payload_capacity + " kilograms"}</p>
                <p>{"Range: " + plane.range + " kms"}</p>
              </div>)}
            </article>
          ))}
        </>
      );
    }