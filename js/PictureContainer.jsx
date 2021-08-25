'use strict';
const e = React.createElement;

const Student = props => <div className="picture">
  <img src={props.student.picture.large}/>
  <h3>{props.student.name.first} {props.student.name.last}</h3>
</div>;

const PictureContainer = () => {
  const [students, setStudents] = React.useState([]);
  const [studentCount, setStudentCount] = React.useState(0);

  const fetchUsers = async (newNumber) => {
    const fetchedStudents = await fetch(`https://randomuser.me/api/?results=${newNumber}`)
      .then(response => response.json()).then(json => json.results)
    setStudents(fetchedStudents)
  }

  const changeCount = (number) => {
    let newNumber = studentCount + number;
    setStudentCount(newNumber)
    fetchUsers(newNumber)
  }
  return <div >
    <div>
      <div className="buttonContainer">
        <p>{studentCount}</p>
        <button className="button" onClick={() => changeCount(1)} disabled={studentCount === 10}>+</button>
        <button className="button" onClick={() => changeCount(-1)} disabled={studentCount === 1}>-</button>
      </div>
    </div>
    <div className="pictureContainer" >
      {students.map(student => (<Student key={student.login.uuid} student={student}/>))}
    </div>
  </div>
}

const domContainer = document.querySelector('#pictureContainer');
ReactDOM.render(e(PictureContainer), domContainer);
