import logo from './logo.svg';
import './App.css';
function App(props) {
 const {employee}=props;
return(
  <div className="container ">
    <div className="profile-container">
      <img className="profileimg" alt="profile-img" src={employee.profileImg}></img>
    </div>
    <div className='name-title'>
      <h1>{employee.name}</h1>
    </div>
    <div className='info-content'>
      <div>
        <label>Location</label>
      </div>
      <div>
        <strong>{employee.location}</strong>
      </div>
    </div>
    <div className='info-content'>
      <div>
        <label>Blood group</label>
      </div>
      <div>
        <strong>{employee.bloodGroup}</strong>
      </div>
    </div>
    <div className='info-content'>
      <div>
        <label>Age</label>
      </div>
      <div>
        <strong>{employee.age}</strong>
      </div>
    </div>
</div>
)
}
export default App;