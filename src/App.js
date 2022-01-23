import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="app">
      By The Name Of Allah
      <div className="row">
        <div className="rowChild">1</div>
        <div className="rowChild">2</div>
        <div className="rowChild">3</div>
        <div className="rowChild">4</div>
        <div className="rowChild">6</div>
        <div className="rowChild">7</div>
      </div>
      <div className="root">
        <div className="col">
          <div className="colChild">8</div>
          <div className="colChild">9</div>
          <div className="colChild">10</div>
        </div>
        <div className="colTow">
          <div className="colTowChild">11</div>
          <div className="colTowChild">12</div>
          <div className="colTowChild">13</div>
        </div>
      </div>
      <div className="rowTow">
        <div className="rowTowChild">14</div>
        <div className="rowTowChild">15</div>
        <div className="rowTowChild">16</div>
        <div className="rowTowChild">17</div>
        <div className="rowTowChild">18</div>
        <div className="rowTowChild">19</div>
      </div>
    </div>
  );
}

export default App;
