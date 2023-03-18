import React from "react";
import './HomeBody.css'

const HomeBody = () => {
  return (
    <div className="homebody">
      <table>
        <tbody>
          <tr>
            <td>JUL16</td>

            <td>DETROIT,MI</td>

            <td>DTE ENERGY MUSIC THEATRE</td>

            <td>
              <button variant="info">BUY TICKETS</button>
            </td>
          </tr>

          <tr>
            <td>JUL 19</td>

            <td>TORONTO,ON</td>

            <td>BUDWEISER STAGE</td>

            <td>
              <button variant="info">BUY TICKETS</button>
            </td>
          </tr>

          <tr>
            <td>JUL 22</td>

            <td>BRISTOW,VA</td>
            <td>JIGGY LUBE LIVE</td>
            <td>
              <button variant="info">BUY TICKETS</button>
            </td>
          </tr>

          <tr>
            <td>JUL 29</td>

            <td>PHOENIX,AZ</td>

            <td>AK-CHIN PAVILION</td>

            <td>
              <button variant="info">BUY TICKETS</button>
            </td>
          </tr>

          <tr>
            <td>AUG 2</td>

            <td>LAS VEGAS,NV</td>

            <td>T-MOBILE ARENA</td>

            <td>
              <button variant="info">BUY TICKETS</button>
            </td>
          </tr>

          <tr>
            <td>AUG 7</td>
            <td>CONCORD,CA</td>
            <td>CONCORD PAVILION</td>
            <td>
              <button variant="info">BUY TICKETS</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HomeBody;
