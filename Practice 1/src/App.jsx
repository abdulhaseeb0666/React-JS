export var h1 = <h1 id="title">Hello World</h1>;
export var h2 = <h2 class="heading">Welcome to ReactJS</h2>;

function App(){
    return(
        // Do cheezain return nhi kr sktey iss liye single parent element main rkhna parta hai
        // Div is a parent element. We can also use fragments or empty tags <> and </> as parent element
        // Fragments are used to avoid extra divs in the html structure
        <div>
            {h1}
            {h2}
            <p>You can write all the html in the single div tage also</p>
        </div>
    )
}

export default App;
