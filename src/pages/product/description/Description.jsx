import classes from '../description/Description.module.scss'

function Description() {
    return ( 
        <div className={classes.container}>
            <div className={classes.title}>
                <h2 className={classes.title__text}>Описание</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet, lacus a hendrerit venenatis, purus metus vulputate orci, quis interdum dolor neque ac orci. Quisque interdum interdum magna id semper. Morbi ut ultricies velit. Sed sit amet purus nec augue imperdiet consequat quis nec tellus. Sed non luctus ante. </p>
            <p>
                <ul>
                    <li>Morbi sodales facilisis turpis</li>
                    <li>Lorem ipsum</li>
                    <li>consectetur</li>
                    <li>Etiam laoreet</li>
                    <li>a hendrerit venenatis</li>
                </ul>
            </p>
            <p>Proin non finibus felis. Morbi in nisl nisl. Curabitur varius enim mauris, at iaculis ante ultrices at. Cras sit amet ante quis massa lobortis ornare. Donec bibendum bibendum varius. In hac habitasse platea dictumst. Etiam ultrices dui eu porta interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean non nunc vitae urna eleifend convallis. Nullam facilisis erat id nunc dapibus, a congue lacus dapibus. Sed at fringilla leo, sit amet dapibus tellus. Proin eu orci volutpat, sagittis odio sed, consequat tortor.</p>
            <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
        </div>
     );
}

export default Description;