import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>Learn & Master GitHub Actions</h1>
        <h2>I added this line to create a pull request to merge with the main branch</h2>
        <h3>I added this line to trigger the filter event workflow when we push this change to the activity_type_pullrequest branch</h3>
      </header>
      <MainContent />
    </>
  );
}

export default App;
