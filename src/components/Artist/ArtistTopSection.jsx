const ArtistTopSection = (props) => {
    return (
        <div class="top-section">
            <div class="h-100 p-5 text-center text-white bg-trasparent ">
                <br />
                <br />
                <p>{props.nb_fan} MONTHLY LISTENERS</p>
                <h2>{props.name}</h2>
                <div class="d-flex justify-content-center">
                    <button class="btn mt-3 rounded-pill btn-outline-light mainbuttons hovered green-btn" type="button">PLAY</button>
                    <button class="btn mt-3 rounded-pill btn-outline-light mainbuttons hovered" type="button">FOLLOW</button>
                    <button class="btn mt-3 rounded-pill text-white d-flex justify-content-center align-items-center three-dots" type="button">
                        <i class="fas fa-ellipsis-h"></i>
                    </button>
                </div>
            </div>
            <div class = "d-flex justify-content-center">
                <div class = "button_top">
                    OVERVIEW
                    <div class="green_line"></div>
                </div>
                <div class = "button_top ">RELATED ARTISTS</div>
                <div class = "button_top ">ABOUT</div>
            </div>
        </div>
    )
}

export default ArtistTopSection