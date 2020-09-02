const Intro = () => <div>
    <div>
    Lost in Tokyo is a directory of fun places to see, play in and explore, in Tokyo, Japan.
    </div>
    <div>
    From museums and galleries, to Robot Restaurants and kitten cafes, Tokyo is the gift that keeps on giving. Dattebayo!
    </div>
    </div>;

const App = () => (
    <div>
        <div className="min-vh-100 ph4 flex flex-column">
            {}
            <Intro />
        </div>
        <div className="flex flex-wrap container">
            {}
        </div>
    </div>
)
ReactDOM.render(<Hello name="Lawrence" />, document.getElementById('root'));
