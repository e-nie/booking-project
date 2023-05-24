import './App.css';
import Hilton from './img/hilton.jpg';
import FourSeasons from './img/4seasonsd.jpg';
import Marriott from './img/marriott.jpg';
import Sheraton from './img/sheraton.jpg';
import Renaissance from './img/renaiss.jpg';
import Hyatt from './img/hyatt.jpg';


const menuContainerStyle = {display: 'flex', width: '80%', justifyContent: 'center', margin: '0 auto', paddingBottom: '25px'};

const listStyle = {display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center'};

const offersGridStyle = {display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'};

const initialHotels = [
  {
    id: 123,
    name: 'Hilton',
    description: '4 star hotel',
    price: 250,
    img: Hilton
  },
  {
    id: 124,
    name: 'Marriott',
    description: '5 star hotel',
    price: 200,
    img: Marriott
  },
  {
    id: 125,
    name: 'Four Seasons',
    description: '5 star hotel',
    price: 300,
    img: FourSeasons
  },
  {
    id: 126,
    name: 'Renaissance',
    description: '5 star hotel',
    price: 100,
    img: Renaissance
  },
  {
    id: 127,
    name: 'Sheraton',
    description: '5 star hotel',
    price: 400,
    img: Sheraton
  },
  {
    id: 128,
    name: 'Hyatt',
    description: '5 star hotel',
    price: 450,
    img: Hyatt
  },
];


function App() {
  const appName = 'Booking App';
  const user = {
    name: 'Alice',
    surname: 'Smith'
  };
  const createFullName = (user) => {
    return `${user.name} ${user.surname}`;
  };
  const menu = ['Home', 'Hotels', 'Cars', 'Avia', 'Activities', 'Villas', 'Bus Tours'];
  const hotels = initialHotels;
  const footerMenu = ['Contact Us', ]


  return (
    <div className="App">
      <h1>{appName}</h1>
      <h2>Welcome, {user.name} {user.surname}</h2>
      <h3>Hello, {createFullName(user)}</h3>
      <hr/>

      <div className="flex-container" style={menuContainerStyle}>
        <div style={listStyle}>
          {menu.map(el => <div>{el} </div>)}
        </div>
      </div>



      <div style={offersGridStyle}>

        {hotels.map(hotels =>
          <div>
            <img width='300px' height='200px' src={hotels.img} alt="Hotel name"/>
            <h3>{hotels.name}</h3>
            <h3>{hotels.description}</h3>
            <h3>${hotels.price}</h3>
          </div>
        )}
      </div>

      <div className='Footer'>
<p> copyright &copy; 2023 by {appName}</p>
      </div>

    </div>
  );
}

export default App;
