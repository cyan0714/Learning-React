import {useSelector, useDispatch} from 'react-redux';
import {setName, setAge} from './store/stuSlice';
import {setName as setSchoolName, setAddress} from './store/schoolSlice';

function App() {
  const {student, school} = useSelector(state => state)
  const dispatch = useDispatch()
  const setNameHandler = () => {
    dispatch(setName("猪八戒")) 
  }
  const setAgeHandler = () => {
    dispatch(setAge(23))
  }
  const setSchoolNameHandler = () => {
    dispatch(setSchoolName("实验中学"))
  }
  const setAddressHandler = () => {
    dispatch(setAddress("海府路"))
  }

  return (
    <div className='App'>
      <p>{JSON.stringify(student)}</p>
      <button onClick={setNameHandler}>change name</button>
      <button onClick={setAgeHandler}>change age</button>
      <p>{JSON.stringify(school)}</p>
      <button onClick={setSchoolNameHandler}>change name</button>
      <button onClick={setAddressHandler}>change address</button>
    </div>
  )
}

export default App;
