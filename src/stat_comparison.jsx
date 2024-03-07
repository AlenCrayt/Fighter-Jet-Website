export default function StatCardComparison({cards_list, plane_list}) {
    //The fighter_list array passed as a prop is filtered through so that only the plane objects in that array which have the same indexes as the ones on the cards remain
    let filtered_list = plane_list.filter((_, index) => cards_list.includes(index));

    return (
        <div className="row">
            <div className="col-2 text-start" id="stats">
                <h6 id="spec_lines">Max (km/h):</h6>
                <h6 id="spec_lines">Climb Rate(meters/second):</h6>
                <h6 id="spec_lines">Flight Ceiling(meters):</h6>
                <h6 id="spec_lines">Payload Capacity(kilograms):</h6>
                <h6 id="spec_lines">Range(kilometers): </h6>
            </div>
            {/*The map() function iterates over the filtered array and renders the stat cards, a maximum of 5 stat cards may be compared at a time */}
            {filtered_list.slice(0, 5).map((plane, id) => (
                <article key={id} className="col-3" id="stat_card">
                    <img src={plane.images[0]} alt="" id="card_img"></img>
                    <h6>{plane.fighter_name}</h6>
                    <p>{plane.max_speed}</p>
                    <p>{plane.climb_rate}</p>
                    <p>{plane.flight_ceiling}</p>
                    <p>{plane.payload_capacity}</p>
                    <p>{plane.range}</p>
                </article>
            ))}
        </div>
    );
}
