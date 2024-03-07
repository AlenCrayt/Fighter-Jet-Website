export default function Categories({clicked_gen, clicked_display}) {

    //When clicking over a specific generation element the number changes and that number is sent to the hook in the main webpage code
    const gen_selected = (gen) => {
        clicked_gen(gen);
    }
    //A boolean that changes depending on whether the user clicks on the Articles or Stat Cards categories
    const display_selected = (show_card_stats) => {
        clicked_display(show_card_stats);
    }

    return (
        <div className="container text-center">
            <nav className="row">
                <h5 onClick={() => gen_selected(0)} className="col" id="categories">All</h5>
                <h5 onClick={() => gen_selected(1)} className="col" id="categories">1st Generation</h5>
                <h5 onClick={() => gen_selected(2)} className="col" id="categories">2nd Generation</h5>
                <h5 onClick={() => gen_selected(3)} className="col" id="categories">3rd Generation</h5>
                <h5 onClick={() => gen_selected(4)} className="col" id="categories">4th Generation</h5>
                <h5 onClick={() => gen_selected(5)} className="col" id="categories">5th Generation</h5>
            </nav>
            <nav className="row justify-content-center">
                <h5 onClick={() => display_selected(false)} className="col-2" id="categories">Articles</h5>
                <h5 onClick={() => display_selected(true)} className="col-2" id="categories">Stat cards</h5>
            </nav>
        </div>
    );
}