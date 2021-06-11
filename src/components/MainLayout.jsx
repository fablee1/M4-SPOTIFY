import './MainLayout.css'

const MainLayout = (props) => {
    return (
        <div id="body" class={props.class}>
            {props.children}
        </div>
    )
}

export default MainLayout